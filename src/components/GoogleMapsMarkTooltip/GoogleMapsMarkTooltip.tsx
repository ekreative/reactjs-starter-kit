import React from "react";
import { Link } from "react-router-dom";

interface ICard {
  pointId: string;
  title: string;
  lat: number;
  lng: number;
  deleteMapPoint: (pointID: string) => {};
  inFocus: (pointID: string) => {};
}

export const GoogleMapsMarkTooltip = (props: ICard) => {
  return (
    <div className="card">
      <div className="header">Title: {props.title}</div>
      <div className="content">
        <p>lat: {props.lat}</p>
        <p>lng: {props.lng}</p>
        <button
          onClick={() => {
            if (window.confirm("Are you sure?")) {
            props.deleteMapPoint(props.pointId);
          }}}
        >
          Delete Mark
        </button>
        <button>
          <Link to={{
            pathname: "/editGoogleMapMark",
          state: {
              currentMarkId: props.pointId
          }}}>Edit</Link>
        </button>
      </div>
    </div>
  );
};
