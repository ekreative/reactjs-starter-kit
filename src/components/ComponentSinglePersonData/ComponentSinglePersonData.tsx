// @ts-ignore
import React, { useState } from "react";
import "./ComponentSinglePersonData.css";
import { IPropsSinglePerson } from "./ComponentSinglePersonDataInterfaces";
import API from "../../services/api";

export const ComponentSinglePersonData: React.FC<IPropsSinglePerson> = props => {
  const [personPlanet, setPersonPlanet] = useState({name: null});
  console.log(111, props);

  const getOnePersonHomeworld = async () => {
    console.log(personPlanet);
    let onePersonHomeworld = await API.get(props.element.homeworld);
    await setPersonPlanet(onePersonHomeworld);
  };

  return (
    <div>
      <div>
        {props.element.name && <p>Name: {props.element.name}</p>}
        {props.element.height && <p>Height: {props.element.height}</p>}
        {props.element.homeworld && (
          <button onClick={getOnePersonHomeworld}>
            Homeworld: {props.element.homeworld}
          </button>
        )}
        {personPlanet && <p>{personPlanet?.name}</p>}
      </div>
    </div>
  );
};
