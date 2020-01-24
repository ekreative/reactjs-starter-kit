// @ts-ignore
import React, { useState } from "react";
import "./ComponentStarships.css";
import { IPropsStarships } from "./ComponentStarshipsInterfaces";
import API from "../../services/api";
import { IElement } from "../ComponentPerson/ComponentPersonInterfaces";
import ComponsntSingleStarshipContainer from "../ComponentSingleStarship/ComponsntSingleStarshipContainer";

export const ComponentStarships: React.FC<IPropsStarships> = props => {
  const [starships, setStarships] = useState({ results: [] });
  const [swStarshipsPage, setSwStarshipsPage] = useState(1);

  const getSWStarships = async () => {
    console.log(starships);
    let peopleData = await API.get(`https://swapi.co/api/starships/?page=1`);
    await setStarships(peopleData);
  };

  const getNextPageSWStarships = async () => {
    if (swStarshipsPage < 4) {
      setSwStarshipsPage(swStarshipsPage + 1);
      let starshipsData = await API.get(
        `https://swapi.co/api/starships/?page=${swStarshipsPage + 1}`
      );
      await setStarships(starshipsData);
    }
  };

  const getPrevPageSWStarships = async () => {
    if (swStarshipsPage > 1) {
      setSwStarshipsPage(swStarshipsPage - 1);
      let starshipsData = await API.get(
        `https://swapi.co/api/starships/?page=${swStarshipsPage - 1}`
      );
      await setStarships(starshipsData);
    }
  };
  return (
    <div className={"StarshipsData"}>
      <button onClick={getPrevPageSWStarships}> {`<<<`} </button>
      <button onClick={getSWStarships}>getStarships</button>
      <button onClick={getNextPageSWStarships}> {`>>>`} </button>
      {starships?.results.map((element: IElement, id: number) => {
        return (
          <div>
            <div>
              <ComponsntSingleStarshipContainer key={id} element={element} />
            </div>
          </div>
        );
      })}
      <div>some Text</div>
    </div>
  );
};
