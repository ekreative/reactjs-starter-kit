// @ts-ignore
import React from "react";
import "./SinglePersonData.css";
import { IPropsSinglePerson } from "./SinglePersonDataInterfaces";

export const SinglePersonData: React.FC<IPropsSinglePerson> = props => {

  return (
    <div>
      <div>
        {props.element.name && <p>Name: {props.element.name}</p>}
        {props.element.height && <p>Height: {props.element.height}</p>}
        {props.element.homeworld && (
          <button onClick={() => {props.getOnePersonHomeworld(props.element.homeworld)}}>
            Homeworld
          </button>
        )}
        {props?.onePersonHomeworld && <p>{props?.onePersonHomeworld}</p>}
      </div>
    </div>
  );
};
