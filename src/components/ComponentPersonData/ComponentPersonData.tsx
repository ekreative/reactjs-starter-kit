// @ts-ignore
import React, { useState } from "react";
import "./ComponentPersonData.css";
import { IPropsData, IElement } from "./ComponentPersonDataInterfaces";
import API from "../../services/api";

export const ComponentPersonData: React.FC<IPropsData> = props => {
  console.log(props.data)
  return (
    <div className="ComponentA">
      <p>{props.data.name}</p>
    </div>
  );
};
