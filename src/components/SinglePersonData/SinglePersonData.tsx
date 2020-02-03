// @ts-ignore
import React from "react";
import { SinglePersonDataElement } from "./SinglePersonDataElements";
import { Link } from "react-router-dom";

interface IPropsSinglePerson {
  element: any;
  getOnePersonHomeworld: any;
  onePersonHomeworld: string;
}

export const SinglePersonData: React.FC<IPropsSinglePerson> = props => {
  return (
    <div>
      <SinglePersonDataElement>
        {props.element.name && <p>Name: {props.element.name}</p>}
        {props.element.height && <p>Height: {props.element.height}</p>}
        {props.element.homeworld && (
          <div
            onClick={() => {
              props.getOnePersonHomeworld(props.element.homeworld);
            }}
          >
            <Link to={`/person/${props.element.name}/homeworld`}>
              Homeworld
            </Link>
          </div>
        )}
        {props?.onePersonHomeworld && <p>{props?.onePersonHomeworld}</p>}
      </SinglePersonDataElement>
    </div>
  );
};
