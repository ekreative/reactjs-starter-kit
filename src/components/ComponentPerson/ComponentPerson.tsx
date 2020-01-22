// @ts-ignore
import React, { useState } from "react";
import "./ComponentPerson.css";
import { IProps, IElement } from "./ComponentPersonInterfaces";
import API from "../../services/api";
import ComponentPersonDataContainer from "../ComponentPersonData/ComponentPersonDataContainer";

export const ComponentPerson: React.FC<IProps> = props => {
  const [people, setPeople] = useState({ results: [] });
  const [swPeoplePage, setSwPeoplePage] = useState(2);

  const getSWPeople = async () => {
    setSwPeoplePage(2)
    let peopleData = await API.get(`https://swapi.co/api/people/?page=1`);
    await setPeople(peopleData);
  };

  const getNextPageSWPeople = async () => {
    setSwPeoplePage(swPeoplePage +1)
    let peopleData = await API.get(`https://swapi.co/api/people/?page=${swPeoplePage}`);
    await setPeople(peopleData);
  };

  return (
    <div className="ComponentA">
      <div className="ComponentA-header">
        <h2>Welcome to SWapi People Component</h2>
      </div>
      <div className="ComponentA-intro">
        <div>
          {people.results.map((element: IElement) => {
            return (
                <ComponentPersonDataContainer key={element.url} data={element} />
            );
          })}
        </div>
      </div>
      <p className="ComponentA-intro">
        <button onClick={getSWPeople}>get SW People</button>
        <button onClick={getNextPageSWPeople}> >>> </button>
      </p>
    </div>
  );
};

ComponentPerson.defaultProps = {
  value: 0,
  increment: () => {},
  decrement: () => {}
};
