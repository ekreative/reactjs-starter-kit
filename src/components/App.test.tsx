import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <App value={15} changeStateProp={() => {}} myCustomPropsFunc={() => {}} isLoading={false}/>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
