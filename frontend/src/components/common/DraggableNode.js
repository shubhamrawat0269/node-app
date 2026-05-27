import { useTheme } from "../../context/ThemeContext";

export const DraggableNode = ({ type, label }) => {
  const { isDarkMode } = useTheme();

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: isDarkMode ? "#3b89e0" : "#1C2536",
        justifyContent: "center",
        flexDirection: "column",
        transition: "background-color 0.3s ease",
        color: "#fff",
        padding: "0.5rem 1.25rem",
      }}
      draggable
    >
      <span style={{ color: "#fff" }}>{label}</span>
    </div>
  );
};
