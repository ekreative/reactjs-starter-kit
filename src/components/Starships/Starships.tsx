import React, { useEffect, useState } from "react";
import API from "../../services/api";
import SingleStarshipContainer from "../SingleStarship/SingleStarshipContainer";
import { StarshipsDataElement } from "./StarshipsElements";
import { Spinner } from "../Spinner/Spinner";

interface IElement {
  name: string;
  url: string;
}

interface IPropsStarships {
  value: number;
  spinnerIsLoading: () => {};
  isLoading: boolean;
}

export const Starships: React.FC<IPropsStarships> = props => {
  const [starships, setStarships] = useState({ results: [] });
  const [swStarshipsPage, setSwStarshipsPage] = useState(1);

  const getSWStarships = async () => {
    let peopleData = await API.getStarships(`1`);
    await setStarships(peopleData);
    await props.spinnerIsLoading();
  };

  const getNextPageSWStarships = async () => {
    if (swStarshipsPage < 4) {
      props.spinnerIsLoading();
      setSwStarshipsPage(swStarshipsPage + 1);
      let starshipsData = await API.getStarships(`${swStarshipsPage + 1}`);
      await setStarships(starshipsData);
      await props.spinnerIsLoading();
    }
  };

  const getPrevPageSWStarships = async () => {
    if (swStarshipsPage > 1) {
      props.spinnerIsLoading();
      setSwStarshipsPage(swStarshipsPage - 1);
      let starshipsData = await API.getStarships(`${swStarshipsPage - 1}`);
      await setStarships(starshipsData);
      await props.spinnerIsLoading();
    }
  };

  useEffect(() => {
    props.spinnerIsLoading();
    getSWStarships();
  }, []);

  return props.isLoading ? (
    <Spinner />
  ) : (
    <StarshipsDataElement>
      <button onClick={getPrevPageSWStarships}> {`<<<`} </button>
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
    </StarshipsDataElement>
  );
};
