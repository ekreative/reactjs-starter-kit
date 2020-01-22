// @ts-ignore
import React, { useState } from "react";
import "./ComponentPerson.css";
import { IProps, IElement } from "./ComponentPersonInterfaces";
import API from "../../services/api";
import ComponentPersonDataContainer from "../ComponentPersonData/ComponentPersonDataContainer";

export const ComponentPerson: React.FC<IProps> = props => {
  const [people, setPeople] = useState({ results: [] });
  const [swPeoplePage, setSwPeoplePage] = useState(1);

  const getSWPeople = async () => {
    setSwPeoplePage(1);
    let peopleData = await API.get(`https://swapi.co/api/people/?page=1`);
    await setPeople(peopleData);
  };

  const getNextPageSWPeople = async () => {
    if (swPeoplePage < 9) {
      setSwPeoplePage(swPeoplePage + 1);
      let peopleData = await API.get(
        `https://swapi.co/api/people/?page=${swPeoplePage + 1}`
      );
      await setPeople(peopleData);
    }
  };

  const getPrevPageSWPeople = async () => {
    if (swPeoplePage > 1) {
      setSwPeoplePage(swPeoplePage - 1);
      let peopleData = await API.get(
        `https://swapi.co/api/people/?page=${swPeoplePage - 1}`
      );
      await setPeople(peopleData);
    }
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
        <button onClick={getPrevPageSWPeople}> {`<<<`} </button>
        <button onClick={getSWPeople}>get SW People page 1</button>
        <button onClick={getNextPageSWPeople}> {`>>>`} </button>
      </p>
    </div>
  );
};
