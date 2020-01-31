import React, { useEffect, useState } from "react";
import API from "../../services/api";
import SinglePlanetContainer from "../SinglePlanet/SinglePlanetContainer";
import {
  PlanetElements,
  PlanetElement,
  PlanetsContainerButton,
  SinglePlanetElement
} from "./PlanetsElements";

interface IElement {
  name: string;
  url: string;
}

interface IPropsPlanet {
  value: number;
  showLoading: () => {};
  hideLoading: () => {};
  isLoading: boolean;
}

export const Planet: React.FC<IPropsPlanet> = props => {
  const [planets, setPlanets] = useState({ results: [] });
  const [swPlanetsPage, setSwPlanetsPage] = useState(1);
  const [onePlanetData, setOnePlanetData] = useState({ name: "" });

  const getSWPlanets = async () => {
    setSwPlanetsPage(1);
    let planetsData = await API.getPlanets(`1`);
    await setPlanets(planetsData);
    await props.hideLoading();
  };

  const getNextPageSWPlanets = async () => {
    if (swPlanetsPage < 7) {
      props.showLoading();
      setSwPlanetsPage(swPlanetsPage + 1);
      let peopleData = await API.getPlanets(`${swPlanetsPage + 1}`);
      await setPlanets(peopleData);
      await props.hideLoading();
    }
  };

  const getPrevPageSWPlanets = async () => {
    if (swPlanetsPage > 1) {
      props.showLoading();
      setSwPlanetsPage(swPlanetsPage - 1);
      let peopleData = await API.getPlanets(`${swPlanetsPage - 1}`);
      await setPlanets(peopleData);
      await props.hideLoading();
    }
  };

  const getSinglePlanetData = async (url: string) => {
    props.showLoading();
    let getOnePlanetData = await API.get(url);
    await setOnePlanetData(getOnePlanetData);
    await props.hideLoading();
  };
  useEffect(() => {
    props.showLoading();
    getSWPlanets();
  }, []); // eslint-disable-line

  return (
    <div>
      <div className="ComponentA-header">
        <h2>SW Planets</h2>
      </div>
      <PlanetElements>
        <PlanetElement>
          {planets?.results.map((element: IElement, id: number) => {
            return (
              <SinglePlanetContainer
                id={id}
                key={element.url}
                element={element}
                planetName={element.name}
                getSinglePlanetData={getSinglePlanetData}
                swPlanetsPage={swPlanetsPage}
              />
            );
          })}
        </PlanetElement>
        <SinglePlanetElement>{onePlanetData.name}</SinglePlanetElement>
      </PlanetElements>
      <PlanetsContainerButton>
        <button onClick={getPrevPageSWPlanets}> {`<<<`} </button>
        <div>page: {swPlanetsPage}</div>
        <button onClick={getNextPageSWPlanets}> {`>>>`} </button>
      </PlanetsContainerButton>
    </div>
  );
};
