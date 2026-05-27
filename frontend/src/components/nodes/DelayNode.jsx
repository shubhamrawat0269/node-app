import { useState } from "react";
import BaseNode from "../common/BaseNode";

const DelayNode = ({ data }) => {
  const [delay, setDelay] = useState(data?.delay || 1000);

  return (
    <BaseNode
      title="Delay Node"
      inputs={[{ id: "input" }]}
      outputs={[{ id: "output" }]}
    >
      <div className="node-input">
        <label>Delay (ms)</label>

        <input
          type="number"
          value={delay}
          min="0"
          onChange={(e) => setDelay(e.target.value)}
        />
      </div>

      <div
        style={{
          fontSize: "12px",
          color: "#666",
        }}
      >
        Delays execution flow
      </div>
    </BaseNode>
  );
};

export default DelayNode;
