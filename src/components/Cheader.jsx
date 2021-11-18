import React from "react";

export const Cheader = ({ val }) => {
  return (
    <>
      <p className="me-2">capsule id : {val.capsule_id}</p>
      <p>capsule serial : {val.capsule_serial}</p>
    </>
  );
};
