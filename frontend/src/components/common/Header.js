import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <div className="toolbar-container">
      <div className="toolbar-primary">
        <h1 className="toolbar-title">Pipeline</h1>
        <p className="toolbar-subtitle">
          Design and connect nodes to build flows
        </p>
      </div>
      <div className="toolbar-tools">
        <ThemeToggle />
      </div>
    </div>
  );
};
