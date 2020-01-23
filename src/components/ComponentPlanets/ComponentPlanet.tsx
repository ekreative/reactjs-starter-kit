// @ts-ignore
import React, { useState } from "react";
import "./ComponentPlanet.css";
import { IPropsPlanet } from "./ComponentPlanetInterfaces";
import API from "../../services/api";
import { IElement } from "../ComponentPerson/ComponentPersonInterfaces";

export const ComponentPlanet: React.FC<IPropsPlanet> = props => {
  const [planets, setPlanets] = useState({ results: [] });
  const [swPlanetsPage, setSwPlanetsPage] = useState(1);

  const getSWPlanets = async () => {
    console.log(planets);
    setSwPlanetsPage(1);
    let planetsData = await API.get(`https://swapi.co/api/planets/?page=1`);
    await setPlanets(planetsData);
  };

  const getNextPageSWPlanets = async () => {
    if (swPlanetsPage < 7) {
      setSwPlanetsPage(swPlanetsPage + 1);
      let peopleData = await API.get(
        `https://swapi.co/api/planets/?page=${swPlanetsPage + 1}`
      );
      await setPlanets(peopleData);
    }
  };

  const getPrevPageSWPlanets = async () => {
    if (swPlanetsPage > 1) {
      setSwPlanetsPage(swPlanetsPage - 1);
      let peopleData = await API.get(
        `https://swapi.co/api/planets/?page=${swPlanetsPage - 1}`
      );
      await setPlanets(peopleData);
    }
  };

  return (
    <div className="ComponentA">
      <div>
        {planets?.results.map((element: IElement, id: number) => {
          return <div>{element.name}</div>;
        })}
      </div>
      <button onClick={getPrevPageSWPlanets}> {`<<<`} </button>
      <button onClick={getSWPlanets}>Get Planets</button>
      <button onClick={getNextPageSWPlanets}> {`>>>`} </button>
    </div>
  );
};
