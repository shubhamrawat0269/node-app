import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
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
          <p className="toolbar-subtitle">
            Design and connect nodes to build flows
          </p>
        </div>
      </div>
    </div>
  );
};
