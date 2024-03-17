import json
import requests

def summarize(file:str):
    prompt_id = "6cd41f67-5110-4340-b1e9-650e55cac2f2"
    api_key = "sk-2rJzAVtTE5tGIqel6MPokRwRGWxxLdItuQ7FZwMZjhS8ufTnmdJZx5"

    data = ""
    with open(file, 'r') as file:
        data = file.read()

    lines = data.splitlines()
    date = lines[0].replace("date: ", "")
    url = lines[1].replace("url: ", "")
    title = lines[2].replace("title: ", "")
    content = "\n".join(lines[3:])

    # Describe the prompt (shows just the inputs for now)
    r1 = requests.get(f"https://app.wordware.ai/api/prompt/{prompt_id}/describe",
                      headers={"Authorization": f"Bearer {api_key}"})

    # Execute the prompt
    r = requests.post(f"https://app.wordware.ai/api/prompt/{prompt_id}/run",
                      json={
                          "inputs": {
                              "article": content,
                          }
                      },
                      headers={"Authorization": f"Bearer {api_key}"},
                      stream=False
                      )

    if r.status_code != 200:
        print("Request failed with status code", r.status_code)
        print(json.dumps(r.json(), indent=4))
        return {"date": date, "url": url, "title": title}

    for line in r.iter_lines():
        if not line:
            continue
        content = json.loads(line.decode('utf-8'))
        value = content['value']
        if value['type'] != "outputs":
            continue

    return {"date": date, "url": url, "title": title, "summary": value["values"]["summary"], "related_symbols":value["values"]["related_symbols"], "industry":value["values"]["industry"]}

def main():
    summary1 = summarize('./data/2024-03-16-news1.txt')
    summary2 = summarize('./data/2024-03-16-news2.txt')

    summary3 = summarize('./data/2024-03-16-news3.txt')

    print(summary1['related_symbols'])
    print(summary2['related_symbols'])

    print(summary3['related_symbols'])


if __name__ == '__main__':
    main()


