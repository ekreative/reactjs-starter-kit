import React, { useEffect, useState } from "react";
import API from "../../services/api";
import SingleStarshipContainer from "../SingleStarship/SingleStarshipContainer";
import SingleStarshipDataContainer from "../SingleStarshipData/SingleStarshipDataContainer";
import {
  StarshipsDataElement,
  StarshipsContainerButton,
  StarshipsWrapper
} from "./StarshipsElements";

interface IElement {
  name: string;
  url: string;
}

interface IPropsStarships {
  value: number;
  showLoading: () => {};
  hideLoading: () => {};
  isLoading: boolean;
}

export const Starships: React.FC<IPropsStarships> = props => {
  const [starships, setStarships] = useState({ results: [] });
  const [swStarshipsPage, setSwStarshipsPage] = useState(1);
  const [oneStarshipData, setOneStarshipData] = useState({ name: "" });

  const getSWStarships = async () => {
    let peopleData = await API.getStarships(`1`);
    await setStarships(peopleData);
    await props.hideLoading();
  };

  const getNextPageSWStarships = async () => {
    if (swStarshipsPage < 4) {
      props.showLoading();
      setSwStarshipsPage(swStarshipsPage + 1);
      let starshipsData = await API.getStarships(`${swStarshipsPage + 1}`);
      await setStarships(starshipsData);
      await props.hideLoading();
    }
  };

  const getPrevPageSWStarships = async () => {
    if (swStarshipsPage > 1) {
      props.showLoading();
      setSwStarshipsPage(swStarshipsPage - 1);
      let starshipsData = await API.getStarships(`${swStarshipsPage - 1}`);
      await setStarships(starshipsData);
      await props.hideLoading();
    }
  };

  const getOneStarshipData = async (url: string) => {
    props.showLoading();
    setOneStarshipData({ name: "" });
    let getOneStarshipData = await API.get(url);
    await setOneStarshipData(getOneStarshipData);
    await props.hideLoading();
  };
  useEffect(() => {
    props.showLoading();
    getSWStarships();
  }, []); // eslint-disable-line

  return (
    <div>
      <div className="ComponentA-header">
        <h2>SW Starships</h2>
      </div>
      <StarshipsDataElement>
        <StarshipsWrapper>
          <div>
            {starships?.results.map((element: IElement, id: number) => {
              return (
                <SingleStarshipContainer
                  swStarshipsPage={swStarshipsPage}
                  key={element.url}
                  id={id}
                  element={element}
                  getOneStarshipData={getOneStarshipData}
                />
              );
            })}
          </div>
          <SingleStarshipDataContainer oneStarshipData={oneStarshipData} />
        </StarshipsWrapper>
        <StarshipsContainerButton>
          <button onClick={getPrevPageSWStarships}> {`<<<`} </button>
          <div>page: {swStarshipsPage}</div>
          <button onClick={getNextPageSWStarships}> {`>>>`} </button>
        </StarshipsContainerButton>
      </StarshipsDataElement>
    </div>
  );
};
