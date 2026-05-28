from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from collections import defaultdict, deque
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: list
    edges: List[Edge]

def is_dag(nodes, edges):

    graph = defaultdict(list)
    indegree = defaultdict(int)

    for node in nodes:
        indegree[node["id"]] = 0

    for edge in edges:
        graph[edge.source].append(edge.target)
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

@app.post("/pipelines/parse")
async def parse_pipeline(
    pipeline: Pipeline
):

    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag(
            pipeline.nodes,
            pipeline.edges,
        ),
    }