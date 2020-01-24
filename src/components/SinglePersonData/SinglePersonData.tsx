// @ts-ignore
import React from "react";
import { IPropsSinglePerson } from "./SinglePersonDataInterfaces";
import { SinglePersonDataElement } from "./SinglePersonDataElements"

export const SinglePersonData: React.FC<IPropsSinglePerson> = props => {

  return (
    <div>
      <SinglePersonDataElement>
        {props.element.name && <p>Name: {props.element.name}</p>}
        {props.element.height && <p>Height: {props.element.height}</p>}
        {props.element.homeworld && (
          <button onClick={() => {props.getOnePersonHomeworld(props.element.homeworld)}}>
            Homeworld
          </button>
        )}
        {props?.onePersonHomeworld && <p>{props?.onePersonHomeworld}</p>}
      </SinglePersonDataElement>
    </div>
  );
};
