import React from "react";

export const Cbody = ({ val }) => {
  return (
    <>
      <h6>details : {val.details}</h6>
      <hr />
      <h6>original launch : {val.original_launch}</h6>
      <hr />

      <h6>original launch unix : {val.original_launch_unix}</h6>
      <hr />

      <h6>reuse ount : {val.details}</h6>
      <hr />

      <h6>status : {val.status}</h6>
      <hr />

      <h6>type : {val.details}</h6>
    </>
  );
};
