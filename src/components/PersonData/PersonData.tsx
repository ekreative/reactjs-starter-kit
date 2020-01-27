// @ts-ignore
import React from "react";
import { PersonContainer } from "./PersonDataElements";

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
        <p>
          {props.swPeoplePage * 10 + props.id + 1 - 10}. {props.element.name}
        </p>
      </PersonContainer>
    </div>
  );
};
