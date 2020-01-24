// @ts-ignore
import React, { useState } from "react";
import "./Person.scss";
import { IProps, IElement } from "./PersonInterfaces";
import API from "../../services/api";
import PersonDataContainer from "../PersonData/PersonDataContainer";
import SinglePersonDataContainer from "../SinglePersonData/SinglePersonDataContainer";

export const Person: React.FC<IProps> = props => {
  const [people, setPeople] = useState({ results: [] });
  const [swPeoplePage, setSwPeoplePage] = useState(1);
  const [onePersonData, setOnePersonData] = useState({ results: [] });
  const [onePersonHomeworld, setOnePersonHomeworld] = useState({name: ''});

  const getSWPeople = async () => {
    console.log(people);
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
  const getOnePersonData = async (url: string) => {
    let onePersonData = await API.get(url);
    await setOnePersonData(onePersonData);
  };

  const getOnePersonHomeworld = async (url: string) => {
    console.log(555);
    let onePersonHomeworld = await API.get(url);
    await setOnePersonHomeworld(onePersonHomeworld)
  };

  return (
    <div className="ComponentA">
      <div className="ComponentA-header">
        <h2>Welcome to SWapi People Component</h2>
      </div>
      <div className="ComponentA-intro">
        <button onClick={getPrevPageSWPeople}> {`<<<`} </button>
        <button onClick={getSWPeople}>get SW People page 1</button>
        <button onClick={getNextPageSWPeople}> {`>>>`} </button>
      </div>
      <div className="ComponentA-intro">
        <div>
          {people?.results.map((element: IElement, id: number) => {
            return (
              <PersonDataContainer
                id={id}
                key={element.url}
                element={element}
                swPeoplePage={swPeoplePage}
                getOnePersonData={getOnePersonData}
              />
            );
          })}
        </div>
        <SinglePersonDataContainer
          element={onePersonData}
          getOnePersonHomeworld={getOnePersonHomeworld}
          onePersonHomeworld={onePersonHomeworld.name}
        />
      </div>
    </div>
  );
};
