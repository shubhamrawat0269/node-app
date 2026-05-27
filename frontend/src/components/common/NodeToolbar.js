import { useState } from "react";
import { DraggableNode } from "./DraggableNode";

const NODE_CONFIG = [
  { type: "customInput", label: "Input" },
  { type: "llm", label: "LLM" },
  { type: "customOutput", label: "Output" },
  { type: "text", label: "Text" },
  { type: "api", label: "API" },
  { type: "delay", label: "Delay" },
  { type: "email", label: "Email" },
  { type: "filter", label: "Filter" },
  { type: "math", label: "Math" },
];

export const NodeToolbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`toolbar-nodes ${isOpen ? "open" : "collapsed"}`}>
      <div className="toolbar-header">
        <div>
          <h3 className="toolbar-panel-title">Node Element</h3>
          <p className="toolbar-panel-subtitle">Drag a node onto the canvas</p>
        </div>
        <button
          type="button"
          className="toolbar-toggle-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
        >
          <span className="toolbar-toggle-icon">{isOpen ? "−" : "+"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="toolbar-node-list">
          {NODE_CONFIG.map(({ type, label }) => (
            <DraggableNode key={type} type={type} label={label} />
          ))}
        </div>
      )}
    </div>
  );
};
