// submit.js

export const SubmitButton = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </div>
  );
};
