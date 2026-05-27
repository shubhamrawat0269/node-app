import { useState } from "react";
import { Handle, Position } from "reactflow";

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || "Add");

  return (
    <div style={{ width: 220, height: 120, border: "1px solid black" }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-a`}
        style={{ top: "30%" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-b`}
        style={{ top: "70%" }}
      />
      <div>
        <strong>Math</strong>
      </div>
      <div>
        <label>
          Operation:
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="Add">Add</option>
            <option value="Subtract">Subtract</option>
            <option value="Multiply">Multiply</option>
            <option value="Divide">Divide</option>
          </select>
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-result`} />
    </div>
  );
};
