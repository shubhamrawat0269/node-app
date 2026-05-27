import { useState } from "react";
import { Handle, Position } from "reactflow";

export const FilterNode = ({ id, data }) => {
  const [filter, setFilter] = useState(data?.filter || "Contains");

  return (
    <div style={{ width: 220, height: 120, border: "1px solid black" }}>
      <Handle type="target" position={Position.Left} id={`${id}-input`} />
      <div>
        <strong>Filter</strong>
      </div>
      <div>
        <label>
          Condition:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="Contains">Contains</option>
            <option value="StartsWith">Starts with</option>
            <option value="EndsWith">Ends with</option>
            <option value="Equals">Equals</option>
          </select>
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </div>
  );
};
