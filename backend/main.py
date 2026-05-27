from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

from collections import defaultdict, deque

# creating app
app = FastAPI()

# create class Edge, Pipeline
class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: list
    edges: List[Edge]

# implementing DAG Check


def is_dag(nodes, edges):

  graph = defaultdict(list)
  indegree = defaultdict(int)

  for node in nodes:
      indegree[node["id"]] = 0

  for edge in edges:
      graph[edge.source].append(
          edge.target
      )

      indegree[edge.target] += 1

  queue = deque([
      node
      for node in indegree
      if indegree[node] == 0
  ])

  visited = 0

  while queue:
      current = queue.popleft()
      visited += 1
      for neighbor in graph[current]:
          indegree[neighbor] -= 1
          if indegree[neighbor] == 0:
              queue.append(neighbor)

  return visited == len(nodes)

# Create Post cll 
@app.post("/pipelines/parse")
async def parse_pipeline(
  pipeline: Pipeline
):

  num_nodes = len(
    pipeline.nodes
  )

  num_edges = len(
    pipeline.edges
  )

  dag_status = is_dag(
    pipeline.nodes,
    pipeline.edges
  )

  return {
    "num_nodes": num_nodes,
    "num_edges": num_edges,
    "is_dag": dag_status,
  }