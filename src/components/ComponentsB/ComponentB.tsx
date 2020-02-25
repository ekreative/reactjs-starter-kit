// @ts-ignore
import React from "react";
import "./ComponentB.scss";
import { IProps } from "./ComponentBInterfaces";

export const ComponentB: React.FC<IProps> = props => {
  return (
    <div className="ComponentB">
      <div className="ComponentB-header">
        <h2>Welcome to ComponentB</h2>
      </div>
      <p className="ComponentB-intro">
        <code>src/components/componentsB/ComponentB.ts</code>
      </p>
      <p className="ComponentB-intro">{props.fullDescription}</p>
      <p className="ComponentB-intro">
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Decrement</button>
      </p>
    </div>
  );
};

ComponentB.defaultProps = {
  value: 0,
  increment: () => {},
  decrement: () => {}
};
