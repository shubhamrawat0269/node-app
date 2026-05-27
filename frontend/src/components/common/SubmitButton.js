export const SubmitButton = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "12px 18px",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </div>
  );
};
