import { useState } from "react";
import BaseNode from "../components/BaseNode";

const FilterNode = ({ data }) => {
  const [condition, setCondition] =
    useState(data?.condition || "");

  return (
    <BaseNode
      title="Filter Node"
      inputs={[
        { id: "items" },
      ]}
      outputs={[
        { id: "filtered-items" },
      ]}
    >
      <div className="node-input">
        <label>Condition</label>

        <input
          type="text"
          placeholder="item.age > 18"
          value={condition}
          onChange={(e) =>
            setCondition(e.target.value)
          }
        />
      </div>

      <div className="node-input">
        <label>Mode</label>

        <select>
          <option>Include</option>
          <option>Exclude</option>
        </select>
      </div>
    </BaseNode>
  );
};

export default FilterNode;