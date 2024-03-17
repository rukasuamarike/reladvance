from dotenv import load_dotenv, dotenv_values
import logging
import sys
import os

config = dotenv_values(".env.local")
load_dotenv()

from llama_index.core import Document
from llama_index.embeddings.openai import OpenAIEmbedding
from llama_index.core.node_parser import SentenceSplitter
from llama_index.core.extractors import TitleExtractor
from llama_index.core.ingestion import IngestionPipeline, IngestionCache

from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.vector_stores.chroma import ChromaVectorStore
from llama_index.core import StorageContext
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from IPython.display import Markdown, display
import chromadb
from llama_index.core import VectorStoreIndex


load_data()



documents = SimpleDirectoryReader(os.path.abspath("../../data")).

pipeline = IngestionPipeline(
    transformations=[
        SentenceSplitter(chunk_size=25, chunk_overlap=0),
        TitleExtractor(),
        OpenAIEmbedding(),
    ]
)

nodes = pipeline.run(documents=[Document.example()])


index = VectorStoreIndex.from_vector_store(vector_store)

llm = OpenAI(model="gpt-3.5-turbo", temperature=0)

# retriever = VectaraAutoRetriever(
#     index,
#     vector_store_info=vector_store_info,
#     llm=llm,
#     verbose=False,
# )
vectara = VectaraRAG(
    vectara_query_mode="mmr", mmr_k=50, mmr_diversity_bias=1.0
)
response = vectara._query_engine.query(
    "movie directed by Greta Gerwig"
).response

print(response)