// @ts-ignore
import React, { useState } from "react";
import "./ComponentPersonData.css";
import { IPropsData } from "./ComponentPersonDataInterfaces";
import API from "../../services/api";

export const ComponentPersonData: React.FC<IPropsData> = props => {
const [personData, setPersonData] = useState({})

  const getSWPeople = async () => {
    let onePersonData = await API.get(`https://swapi.co/api/people/1`);
    await setPersonData(onePersonData);
  };

  console.log(props.data)
  return (
    <div className="ComponentA">
      <p>{props.data.name}</p>
    </div>
  );
};
