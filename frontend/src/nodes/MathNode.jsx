import { useState } from "react";
import BaseNode from "../components/BaseNode";

const MathNode = ({ data }) => {
  const [operation, setOperation] = useState(data?.operation || "add");

  return (
    <BaseNode
      title="Math Node"
      inputs={[{ id: "value-a" }, { id: "value-b" }]}
      outputs={[{ id: "result" }]}
    >
      <div className="node-input">
        <label>Operation</label>

        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
      </div>

      <div className="node-input">
        <label>Precision</label>
        <input type="number" min="0" max="10" defaultValue="2" />
      </div>
    </BaseNode>
  );
};

export default MathNode;
