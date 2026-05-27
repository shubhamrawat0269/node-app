import { useState } from "react";
import { Handle, Position } from "reactflow";

export const DelayNode = ({ id, data }) => {
  const [delayMs, setDelayMs] = useState(data?.delayMs || 1000);

  return (
    <div style={{ width: 220, height: 120, border: "1px solid black" }}>
      <Handle type="target" position={Position.Left} id={`${id}-input`} />
      <div>
        <strong>Delay</strong>
      </div>
      <div>
        <label>
          Delay (ms):
          <input
            type="number"
            value={delayMs}
            min={0}
            onChange={(e) => setDelayMs(Number(e.target.value))}
            style={{ width: "100%" }}
          />
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </div>
  );
};
