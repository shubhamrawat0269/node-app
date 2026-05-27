import BaseNode from "../components/BaseNode";

export const OutputNode = ({ data }) => {
  return (
    <BaseNode title="Output Node" inputs={[{ id: "input" }]} outputs={[]}>
      <div className="node-input">
        <label>Output Name</label>

        <input
          type="text"
          defaultValue={data?.outputName || ""}
          placeholder="Final Output"
        />
      </div>

      <div className="node-input">
        <label>Output Type</label>

        <select defaultValue="text">
          <option value="text">Text</option>
          <option value="json">JSON</option>
          <option value="image">Image</option>
        </select>
      </div>
    </BaseNode>
  );
};
