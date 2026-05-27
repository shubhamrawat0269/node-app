export const submitPipeline = async (nodes, edges) => {
  try {
    // console.log({ nodes, edges });
    const response = await fetch("http://localhost:8000/pipelines/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        nodes,
        edges,
      }),
    });

    const data = await response.json();

    alert(
      `Nodes: ${data.num_nodes} Edges: ${data.num_edges} IsDAG: ${data.is_dag}`,
    );
  } catch (error) {
    console.error("Submission failed:", error);
  }
};
