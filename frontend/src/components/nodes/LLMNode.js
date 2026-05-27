import BaseNode from "../common/BaseNode";

export const LLMNode = () => {
  return (
    <BaseNode
      title="LLM Node"
      inputs={[{ id: "prompt" }]}
      outputs={[{ id: "response" }]}
    >
      <div className="node-input">
        <label>Model</label>

        <select>
          <option>GPT-4</option>
          <option>Claude</option>
        </select>
      </div>
    </BaseNode>
  );
};
