import React from "react";
import { PersonContainerElement } from "./PersonElements";
import { Link } from "react-router-dom";

interface IPerson {
  getOnePersonData: any;
  swPeoplePage: number;
  id: number;
  element: {
    name: string;
    url: string;
  };
}

export const Person: React.FC<IPerson> = props => {
  return (
    <div>
      <PersonContainerElement
        onClick={() => {
          props.getOnePersonData(props.element.url);
        }}
      >
        <Link to={`/person/${props.element.name}`}>
          {props.swPeoplePage * 10 + props.id + 1 - 10}. {props.element.name}
        </Link>
      </PersonContainerElement>
    </div>
  );
};
