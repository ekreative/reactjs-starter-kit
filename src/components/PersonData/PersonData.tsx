// @ts-ignore
import React from "react";
import { PersonDataElement } from "./PersonDataElements";
import { Link } from "react-router-dom";

interface IPropsSinglePerson {
  element: any;
  getOnePersonHomeworld: any;
  onePersonHomeworld: string;
}

export const PersonData: React.FC<IPropsSinglePerson> = props => {
  return (
    <div>
      <PersonDataElement>
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
      </PersonDataElement>
    </div>
  );
};
