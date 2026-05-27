import { useStore } from "../../store/store";
import { shallow } from "zustand/shallow";
import { submitPipeline } from "../../utils/submitHandler";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "12px 18px",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      <button
        className="submit-btn"
        type="submit"
        onClick={() => submitPipeline(nodes, edges)}
      >
        Submit
      </button>
    </div>
  );
};
