import React, { useEffect, useState } from "react";
import API from "../../services/api";
import SingleStarshipContainer from "../SingleStarship/SingleStarshipContainer";
import { StarshipsDataElement } from "./StarshipsElements";
import { Spinner } from "../Spinner/Spinner";
// @ts-ignore
import LoadingOverlay from "react-loading-overlay";

interface IElement {
  name: string;
  url: string;
}

interface IPropsStarships {
  value: number;
  spinnerStartLoading: () => {};
  spinnerEndLoading: () => {};
  isLoading: boolean;
}

export const Starships: React.FC<IPropsStarships> = props => {
  const [starships, setStarships] = useState({ results: [] });
  const [swStarshipsPage, setSwStarshipsPage] = useState(1);

  const getSWStarships = async () => {
    let peopleData = await API.getStarships(`1`);
    await setStarships(peopleData);
    await props.spinnerEndLoading();
  };

  const getNextPageSWStarships = async () => {
    if (swStarshipsPage < 4) {
      props.spinnerStartLoading();
      setSwStarshipsPage(swStarshipsPage + 1);
      let starshipsData = await API.getStarships(`${swStarshipsPage + 1}`);
      await setStarships(starshipsData);
      await props.spinnerEndLoading();
    }
  };

  const getPrevPageSWStarships = async () => {
    if (swStarshipsPage > 1) {
      props.spinnerStartLoading();
      setSwStarshipsPage(swStarshipsPage - 1);
      let starshipsData = await API.getStarships(`${swStarshipsPage - 1}`);
      await setStarships(starshipsData);
      await props.spinnerEndLoading();
    }
  };

  useEffect(() => {
    props.spinnerStartLoading();
    getSWStarships();
  }, []); // eslint-disable-line

  return (
    <LoadingOverlay active={props.isLoading} spinner={<Spinner />}>
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
    </LoadingOverlay>
  );
};
