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
  return (
    <div className="toolbar-nodes">
      <div className="toolbar-node-list">
        {NODE_CONFIG.map(({ type, label }) => (
          <DraggableNode key={type} type={type} label={label} />
        ))}
      </div>
    </div>
  );
};
