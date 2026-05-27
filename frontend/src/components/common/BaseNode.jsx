import React from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  width = 260,
}) => {
  // Responsive width calculation
  const getResponsiveWidth = () => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      if (screenWidth < 480) {
        return Math.max(200, screenWidth * 0.8);
      } else if (screenWidth < 768) {
        return 240;
      }
    }
    return width;
  };

  return (
    <div
      className="node-container"
      style={{
        width: getResponsiveWidth(),
        minWidth: "180px",
        maxWidth: "320px",
      }}
    >
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
