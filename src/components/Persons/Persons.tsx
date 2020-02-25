import React, { useEffect, useState } from "react";
import API from "../../services/api";
import PersonContainer from "../Person/PersonContainer";
import PersonDataContainer from "../PersonData/PersonDataContainer";
import {
  PersonContainerElement,
  PersonContainerButtonElement
} from "./PersonsElements";

interface IProps {
  value: number;
  showLoading: () => {};
  hideLoading: () => {};
  isLoading: boolean;
}
interface IElement {
  name: string;
  url: string;
}

export const Persons: React.FC<IProps> = props => {
  const [people, setPeople] = useState({ results: [] });
  const [swPeoplePage, setSwPeoplePage] = useState(1);
  const [onePersonData, setOnePersonData] = useState({ results: [] });
  const [onePersonHomeworld, setOnePersonHomeworld] = useState({ name: "" });

  const getSWPeople = async () => {
    setSwPeoplePage(1);
    let peopleData = await API.getPeople("1");
    await setPeople(peopleData);
    await props.hideLoading();
  };

  const getNextPageSWPeople = async () => {
    if (swPeoplePage < 9) {
      props.showLoading();
      setSwPeoplePage(swPeoplePage + 1);
      let peopleData = await API.getPeople(`${swPeoplePage + 1}`);
      await setPeople(peopleData);
      await props.hideLoading();
    }
  };

  const getPrevPageSWPeople = async () => {
    if (swPeoplePage > 1) {
      props.showLoading();
      setSwPeoplePage(swPeoplePage - 1);
      let peopleData = await API.getPeople(`${swPeoplePage - 1}`);
      await setPeople(peopleData);
      await props.hideLoading();
    }
  };
  const getOnePersonData = async (url: string) => {
    props.showLoading();
    setOnePersonHomeworld({ name: "" });
    let onePersonData = await API.get(url);
    await setOnePersonData(onePersonData);
    await props.hideLoading();
  };

  const getOnePersonHomeworld = async (url: string) => {
    props.showLoading();
    let onePersonHomeworld = await API.get(url);
    await setOnePersonHomeworld(onePersonHomeworld);
    await props.hideLoading();
  };

  useEffect(() => {
    props.showLoading();
    getSWPeople();
  }, []); // eslint-disable-line

  return (
    <div className="ComponentA">
      <div className="ComponentA-header">
        <h2>SW Persons</h2>
      </div>
      <PersonContainerElement>
        <div>
          {people?.results.map((element: IElement, id: number) => {
            return (
              <PersonContainer
                id={id}
                key={element.url}
                element={element}
                swPeoplePage={swPeoplePage}
                getOnePersonData={getOnePersonData}
              />
            );
          })}
        </div>
        <PersonDataContainer
          element={onePersonData}
          getOnePersonHomeworld={getOnePersonHomeworld}
          onePersonHomeworld={onePersonHomeworld.name}
        />
      </PersonContainerElement>
      <PersonContainerButtonElement>
        <button onClick={getPrevPageSWPeople}> {`<<<`} </button>
        <div>page: {swPeoplePage}</div>
        <button onClick={getNextPageSWPeople}> {`>>>`} </button>
      </PersonContainerButtonElement>
    </div>
  );
};
