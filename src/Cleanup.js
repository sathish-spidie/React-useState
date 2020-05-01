import React, { useEffect } from "react";
// import { useFetch } from "./useFetch";

export const Cleanup = () => {
  useEffect(() => {
    const onMouseMove = e => {
      // console.log(e);
    };
    console.log("mounted1");
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      console.log("cleaned1");
    };
  });

  // Fire off in order
  // useEffect(() => console.log("mounted2"));
  // useEffect(() => console.log("mounted3"));
  // *****************
  return (
    <div>
      <h3>Cleanup</h3>
    </div>
  );
};
