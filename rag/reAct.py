# pip install llama-index-llms-openai

from dotenv import load_dotenv, dotenv_values
import logging
import sys
import os


load_dotenv()

from llama_index.core import (
    SimpleDirectoryReader,
    VectorStoreIndex,
    StorageContext,
    load_index_from_storage,
)

from llama_index.core.tools import QueryEngineTool, ToolMetadata
from llama_index.core.agent import ReActAgent
from llama_index.llms.openai import OpenAI

import nest_asyncio


try:
    storage_context = StorageContext.from_defaults(
        persist_dir="../data"
    )
    index = load_index_from_storage(storage_context)
    index_loaded = True
except:
    index_loaded = False
    
if not index_loaded:
    # load data
    docs = SimpleDirectoryReader(
        input_files=["../data/2024-03-14-nyc-rents-hit-record-highs-in-manhattan-brooklyn-and-queens.txt"]).load_data()
    # build index
    index = VectorStoreIndex.from_documents(docs)
    # persist index
    index.storage_context.persist(persist_dir="../data")

query_engine = index.as_query_engine(similarity_top_k=3)

query_engine_tools = [
    QueryEngineTool(
        query_engine=query_engine,
        metadata=ToolMetadata(
            name="news_nyc",
            description=(
                "Provides news articles"
                "Use a detailed plain text question as input to the tool."
            ),
        ),
    ),
]

llm = OpenAI(model="gpt-3.5-turbo-0613")

context = """\
You are a stock market financial advisor.\
You will answer questions about the current sociopolitical environment as a veteran stock market investor.
"""
agent = ReActAgent.from_tools(
    query_engine_tools,
    llm=llm,
    verbose=True,
    context=context
)
async def agentPrompt(query):
    nest_asyncio.apply()
    response = await agent.achat(query)
    return str(response)

agentPrompt("Compare and contrast the risks of Uber and Lyft in 2021, then give an"
        " analysis")