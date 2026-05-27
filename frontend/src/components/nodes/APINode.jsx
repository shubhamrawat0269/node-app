import { useState } from "react";
import BaseNode from "../common/BaseNode";

const APINode = ({ data }) => {
  const [url, setUrl] = useState(data?.url || "");
  const [method, setMethod] = useState(data?.method || "GET");

  return (
    <BaseNode
      title="API Node"
      inputs={[{ id: "request-body" }, { id: "headers" }]}
      outputs={[{ id: "response" }, { id: "error" }]}
    >
      <div className="node-input">
        <label>Method</label>

        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
      </div>

      <div className="node-input">
        <label>API URL</label>

        <input
          type="text"
          placeholder="https://api.example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
    </BaseNode>
  );
};

export default APINode;
