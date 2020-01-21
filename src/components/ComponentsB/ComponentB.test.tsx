import React from "react";
import ReactDOM from "react-dom";
import { ComponentB } from "./ComponentB";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ComponentB
      value={10}
      description={"some text"}
      fullDescription={"some text"}
      decrement={() => {}}
      increment={() => {}}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
