// @ts-ignore
import React, { useState } from "react";
import API from "../../services/api";
import SinglePlanetContainer from "../SinglePlanet/SinglePlanetContainer";
import { PlanetElement } from "./PlanetsElements";

interface IElement {
  name: string;
  url: string;
}

interface IPropsPlanet {
  value: number;
}

export const Planet: React.FC<IPropsPlanet> = props => {
  const [planets, setPlanets] = useState({ results: [] });
  const [swPlanetsPage, setSwPlanetsPage] = useState(1);
  const [onePlanetData, setOnePlanetData] = useState({ name: "" });

  const getSWPlanets = async () => {
    setSwPlanetsPage(1);
    let planetsData = await API.getPlanets(`1`);
    await setPlanets(planetsData);
  };

  const getNextPageSWPlanets = async () => {
    if (swPlanetsPage < 7) {
      setSwPlanetsPage(swPlanetsPage + 1);
      let peopleData = await API.getPlanets(`${swPlanetsPage + 1}`);
      await setPlanets(peopleData);
    }
  };

  const getPrevPageSWPlanets = async () => {
    if (swPlanetsPage > 1) {
      setSwPlanetsPage(swPlanetsPage - 1);
      let peopleData = await API.getPlanets(`${swPlanetsPage - 1}`);
      await setPlanets(peopleData);
    }
  };

  const getSinglePlanetData = async (url: string) => {
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
      <PlanetElement>
        <div>
          {planets?.results.map((element: IElement, id: number) => {
            return (
              <SinglePlanetContainer
                key={id}
                element={element}
                planetName={element.name}
                getSinglePlanetData={getSinglePlanetData}
              />
            );
          })}
        </div>
        <div>{onePlanetData.name}</div>
      </PlanetElement>
    </div>
  );
};
