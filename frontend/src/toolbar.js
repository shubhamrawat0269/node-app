import { DraggableNode } from "./components/common/DraggableNode";
import { ThemeToggle } from "./ThemeToggle";

export const PipelineToolbar = () => {
  return (
    <div className="toolbar-container">
      <div className="toolbar-header">
        <div className="toolbar-primary">
          <div className="toolbar-title-row">
            <h2 className="toolbar-title">Pipeline</h2>
            <div className="toolbar-tools">
              <ThemeToggle />
            </div>
          </div>
          <p className="toolbar-subtitle">Design and connect nodes to build flows</p>
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
    </div>
  );
};
