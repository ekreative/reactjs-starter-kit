// @ts-ignore
import React, { useState } from "react";
import "./Planet.css";
import { IPropsPlanet } from "./PlanetInterfaces";
import API from "../../services/api";
import { IElement } from "../Person/PersonInterfaces";
import SinglePlanetContainer from "../SinglePlanet/SinglePlanetContainer";

export const Planet: React.FC<IPropsPlanet> = props => {
  const [planets, setPlanets] = useState({ results: [] });
  const [swPlanetsPage, setSwPlanetsPage] = useState(1);
  const [onePlanetData, setOnePlanetData] = useState({ name: "" });

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

  const getsinglePlanetData = async (url: string) => {
    console.log("onePlanetData", onePlanetData);
    let getOnePlanetData = await API.get(url);
    await setOnePlanetData(getOnePlanetData);
  };

  return (
    <div>
      <div>
        <button onClick={getPrevPageSWPlanets}> {`<<<`} </button>
        <button onClick={getSWPlanets}>Get Planets</button>
        <button onClick={getNextPageSWPlanets}> {`>>>`} </button>
      </div>
      <div className="Planets">
        <div>
        {planets?.results.map((element: IElement, id: number) => {
          return (
            <SinglePlanetContainer
              key={id}
              element={element}
              planetName={element.name}
              getsinglePlanetData={getsinglePlanetData}
            />
          );
        })}
        </div>
        <div>{onePlanetData.name}</div>
      </div>
    </div>
  );
};
