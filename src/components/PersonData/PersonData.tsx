// @ts-ignore
import React from "react";
import { IPropsData } from "./PersonDataInterfaces";
import { PersonContainer } from "./PersonDataElements"

export const PersonData: React.FC<IPropsData> = props => {
  return (
    <div>
      <PersonContainer onClick={()=>{props.getOnePersonData(props.element.url)}}>
        <p>{props.swPeoplePage * 10 + props.id + 1 - 10}. {props.element.name}</p>
      </PersonContainer>
    </div>
  );
};
