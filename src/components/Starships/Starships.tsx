import React, { useState } from "react";
import API from "../../services/api";
import SingleStarshipContainer from "../SingleStarship/SingleStarshipContainer";
import { StarshipsDataElement } from "./StarshipsElements";

interface IElement {
  name: string;
  url: string;
}

interface IPropsStarships {
  value: number;
}

export const Starships: React.FC<IPropsStarships> = props => {
  const [starships, setStarships] = useState({ results: [] });
  const [swStarshipsPage, setSwStarshipsPage] = useState(1);

  const getSWStarships = async () => {
    let peopleData = await API.getStarships(`1`);
    await setStarships(peopleData);
  };

  const getNextPageSWStarships = async () => {
    if (swStarshipsPage < 4) {
      setSwStarshipsPage(swStarshipsPage + 1);
      let starshipsData = await API.getStarships(`${swStarshipsPage + 1}`);
      await setStarships(starshipsData);
    }
  };

  const getPrevPageSWStarships = async () => {
    if (swStarshipsPage > 1) {
      setSwStarshipsPage(swStarshipsPage - 1);
      let starshipsData = await API.getStarships(`${swStarshipsPage - 1}`);
      await setStarships(starshipsData);
    }
  };
  return (
    <StarshipsDataElement>
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
    </StarshipsDataElement>
  );
};
