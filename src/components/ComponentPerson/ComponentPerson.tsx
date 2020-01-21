// @ts-ignore
import React, { useState } from "react";
import "./ComponentPerson.css";
import { IProps } from "./ComponentPersonInterfaces";
import API from "../../services/api";

export const ComponentPerson: React.FC<IProps> = props => {
  // @ts-ignore
  const [people, setPeople] = useState({ results: [] });

  const getSWPeople = async () => {
    let peopleData = await API.get("https://swapi.co/api/people/");
    await setPeople(peopleData);
  };

  return (
    <div className="ComponentA">
      <div className="ComponentA-header">
        <h2>Welcome to SWapi People Component</h2>
      </div>
      <div className="ComponentA-intro">
        <div>
          {people.results.map((element: {name: string, url: string})  => {
            console.log(element)
            return(
              <p key={element.url}>{element.name}</p>
            )
          })}
        </div>
      </div>
      <p className="ComponentA-intro">Value: {props.value}</p>
      <p className="ComponentA-intro">
        <button onClick={getSWPeople}>get SW People</button>
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
