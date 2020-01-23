// @ts-ignore
import React from "react";
import "./ComponentPersonData.css";
import { IPropsData } from "./ComponentPersonDataInterfaces";

export const ComponentPersonData: React.FC<IPropsData> = props => {
  return (
    <div className="ComponentA">
      <div className="PersonName" onClick={()=>{props.getOnePersonData(props.element.url)}}>
        <p>{props.swPeoplePage * 10 + props.id + 1 - 10}. {props.element.name}</p>
      </div>
    </div>
  );
};
