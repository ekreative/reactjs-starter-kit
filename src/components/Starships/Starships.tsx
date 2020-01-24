// @ts-ignore
import React, { useState } from "react";
import "./Starships.scss";
import { IPropsStarships } from "./StarshipsInterfaces";
import API from "../../services/api";
import { IElement } from "../Person/PersonInterfaces";
import SingleStarshipContainer from "../SingleStarship/SingleStarshipContainer";

export const Starships: React.FC<IPropsStarships> = props => {
  const [starships, setStarships] = useState({ results: [] });
  const [swStarshipsPage, setSwStarshipsPage] = useState(1);

  const getSWStarships = async () => {
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
              <SingleStarshipContainer key={id} element={element} />
            </div>
          </div>
        );
      })}
      <div>some Text</div>
    </div>
  );
};
