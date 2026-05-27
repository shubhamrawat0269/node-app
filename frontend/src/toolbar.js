// toolbar.js

import { DraggableNode } from "./draggableNode";
import { ThemeToggle } from "./ThemeToggle";

export const PipelineToolbar = () => {
  return (
    <div className="toolbar-container">
      <div
        className="toolbar-header"
        style={{ width: "100%", marginBottom: "12px" }}
      >
        <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "600" }}>
          Nodes
        </h2>
        <ThemeToggle />
      </div>
      <div className="toolbar-nodes">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="api" label="API" />
        <DraggableNode type="delay" label="Delay" />
        <DraggableNode type="email" label="Email" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="math" label="Math" />
      </div>
    </div>
  );
};
