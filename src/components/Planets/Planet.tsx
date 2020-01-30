import React, { useEffect, useState } from "react";
import API from "../../services/api";
import SinglePlanetContainer from "../SinglePlanet/SinglePlanetContainer";
import { PlanetElement } from "./PlanetsElements";

interface IElement {
  name: string;
  url: string;
}

interface IPropsPlanet {
  value: number;
  spinnerStartLoading: () => {};
  spinnerEndLoading: () => {};
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
    await props.spinnerEndLoading();
  };

  const getNextPageSWPlanets = async () => {
    if (swPlanetsPage < 7) {
      props.spinnerStartLoading();
      setSwPlanetsPage(swPlanetsPage + 1);
      let peopleData = await API.getPlanets(`${swPlanetsPage + 1}`);
      await setPlanets(peopleData);
      await props.spinnerEndLoading();
    }
  };

  const getPrevPageSWPlanets = async () => {
    if (swPlanetsPage > 1) {
      props.spinnerStartLoading();
      setSwPlanetsPage(swPlanetsPage - 1);
      let peopleData = await API.getPlanets(`${swPlanetsPage - 1}`);
      await setPlanets(peopleData);
      await props.spinnerEndLoading();
    }
  };

  const getSinglePlanetData = async (url: string) => {
    props.spinnerStartLoading();
    let getOnePlanetData = await API.get(url);
    await setOnePlanetData(getOnePlanetData);
    await props.spinnerEndLoading();
  };
  useEffect(() => {
    props.spinnerStartLoading();
    getSWPlanets();
  }, []); // eslint-disable-line

  return (
    <div>
      <div>
        <button onClick={getPrevPageSWPlanets}> {`<<<`} </button>
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
