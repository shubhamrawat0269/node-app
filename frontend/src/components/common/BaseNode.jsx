import React from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  width = 260,
}) => {
  return (
    <div className="node-container" style={{ width }}>
      <div className="node-header">
        <h3>{title}</h3>
      </div>

      <div className="node-body">{children}</div>

      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{
            top: 60 + index * 30,
          }}
        />
      ))}

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{
            top: 60 + index * 30,
          }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
