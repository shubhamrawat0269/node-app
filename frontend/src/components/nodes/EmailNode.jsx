import { useState } from "react";
import BaseNode from "../common/BaseNode";

const EmailNode = ({ data }) => {
  const [recipient, setRecipient] = useState(data?.recipient || "");
  const [subject, setSubject] = useState(data?.subject || "");

  return (
    <BaseNode
      title="Email Node"
      inputs={[{ id: "message" }, { id: "attachments" }]}
      outputs={[{ id: "status" }]}
    >
      <div className="node-input">
        <label>Recipient</label>

        <input
          type="email"
          placeholder="john@example.com"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>

      <div className="node-input">
        <label>Subject</label>

        <input
          type="text"
          placeholder="Enter subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
    </BaseNode>
  );
};

export default EmailNode;
