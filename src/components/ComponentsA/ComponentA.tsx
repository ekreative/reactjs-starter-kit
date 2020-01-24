import React from "react";
import "./ComponentA.scss";
import { IProps } from "./ComponentAInterfaces";

export const ComponentA: React.FC<IProps> = props => {
  return (
    <div className="ComponentA">
      <div className="ComponentA-header">
        <h2>Welcome to ComponentA</h2>
      </div>
      <p className="ComponentA-intro">
        <code>src/components/componentsA/ComponentA.ts</code>
      </p>
      <p className="ComponentA-intro">Value: {props.value}</p>
      <p className="ComponentA-intro">
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Decrement</button>
      </p>
    </div>
  );
};

ComponentA.defaultProps = {
  value: 0,
  increment: () => {},
  decrement: () => {}
};
