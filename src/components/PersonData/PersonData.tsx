// @ts-ignore
import React from "react";
import { PersonContainer } from "./PersonDataElements";
import { Link } from "react-router-dom";

interface IPropsData {
  getOnePersonData: any;
  swPeoplePage: number;
  id: number;
  element: {
    name: string;
    url: string;
  };
}

export const PersonData: React.FC<IPropsData> = props => {
  return (
    <div>
      <PersonContainer
        onClick={() => {
          props.getOnePersonData(props.element.url);
        }}
      >
        <Link to={`/person/${props.element.name}`}>
          {props.swPeoplePage * 10 + props.id + 1 - 10}. {props.element.name}
        </Link>
      </PersonContainer>
    </div>
  );
};
