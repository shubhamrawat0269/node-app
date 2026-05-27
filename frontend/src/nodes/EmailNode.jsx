import { useState } from "react";
import { Handle, Position } from "reactflow";

export const EmailNode = ({ id, data }) => {
  const [recipient, setRecipient] = useState(
    data?.recipient || "example@email.com",
  );
  const [subject, setSubject] = useState(data?.subject || "Hello");

  return (
    <div style={{ width: 220, height: 140, border: "1px solid black" }}>
      <Handle type="target" position={Position.Left} id={`${id}-input`} />
      <div>
        <strong>Email</strong>
      </div>
      <div>
        <label style={{ display: "block", marginBottom: 6 }}>
          To:
          <input
            type="email"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </div>
  );
};
