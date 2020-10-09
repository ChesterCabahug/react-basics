import React from "react";

export const CardList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.children}</h1>
    </div>
  );
};
