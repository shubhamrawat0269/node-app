import toast from "react-hot-toast";

export const submitPipeline = async (nodes, edges) => {
  try {
    // console.log({ nodes, edges });
    toast.success(
      `Nodes: ${nodes} Edges: ${edges} IsDAG: ${true}`,
    );
  } catch (error) {
    console.error("Submission failed:", error);
  }
};
