import React, { useEffect, useState } from "react";
import API from "../../services/api";
import SinglePlanetContainer from "../SinglePlanet/SinglePlanetContainer";
import { PlanetElement } from "./PlanetsElements";
import { Spinner } from "../Spinner/Spinner";
// @ts-ignore
import LoadingOverlay from "react-loading-overlay";

interface IElement {
  name: string;
  url: string;
}

interface IPropsPlanet {
  value: number;
  spinnerIsLoading: () => {};
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
    await props.spinnerIsLoading();
  };

  const getNextPageSWPlanets = async () => {
    if (swPlanetsPage < 7) {
      props.spinnerIsLoading();
      setSwPlanetsPage(swPlanetsPage + 1);
      let peopleData = await API.getPlanets(`${swPlanetsPage + 1}`);
      await setPlanets(peopleData);
      await props.spinnerIsLoading();
    }
  };

  const getPrevPageSWPlanets = async () => {
    if (swPlanetsPage > 1) {
      props.spinnerIsLoading();
      setSwPlanetsPage(swPlanetsPage - 1);
      let peopleData = await API.getPlanets(`${swPlanetsPage - 1}`);
      await setPlanets(peopleData);
      await props.spinnerIsLoading();
    }
  };

  const getSinglePlanetData = async (url: string) => {
    props.spinnerIsLoading();
    let getOnePlanetData = await API.get(url);
    await setOnePlanetData(getOnePlanetData);
    await props.spinnerIsLoading();
  };
  useEffect(() => {
    props.spinnerIsLoading();
    getSWPlanets();
  }, []); // eslint-disable-line

  return (
    <LoadingOverlay active={props.isLoading} spinner={<Spinner />}>
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
    </LoadingOverlay>
  );
};
