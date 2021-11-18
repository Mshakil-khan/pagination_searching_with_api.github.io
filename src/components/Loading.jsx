import React from "react";

export const Loading = () => {
  return (
    <div
      className="spinner-border "
      role="status"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "70px",
        height: "70px",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
