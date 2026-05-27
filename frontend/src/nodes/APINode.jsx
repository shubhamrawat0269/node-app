import { useState } from "react";
import { Handle, Position } from "reactflow";

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || "https://api.example.com");
  const [method, setMethod] = useState(data?.method || "GET");

  return (
    <div style={{ width: 220, height: 120, border: "1px solid black" }}>
      <Handle type="target" position={Position.Left} id={`${id}-in`} />
      <div>
        <strong>API</strong>
      </div>
      <div>
        <label style={{ display: "block", marginBottom: 6 }}>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>
        <label>
          Method:
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-out`} />
    </div>
  );
};
