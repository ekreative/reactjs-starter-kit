// @ts-ignore
import React from "react";
import "./ComponentPerson.css";
import { IProps } from "./ComponentPersonInterfaces";
import API from "../../services/api"

const getSWPeople = () => {
  API.get("https://swapi.co/api/people/")
}
export const ComponentPerson: React.FC<IProps> = props => {

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
        <button onClick={getSWPeople}>get SW Pe111ople</button>
        <button onClick={props.decrement}>Decrement</button>
      </p>
    </div>
  );
};

ComponentPerson.defaultProps = {
  value: 0,
  increment: () => {},
  decrement: () => {}
};
