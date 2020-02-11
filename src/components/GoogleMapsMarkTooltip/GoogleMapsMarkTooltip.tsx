import React from "react";

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
            props.deleteMapPoint(props.pointId);
          }}
        >
          Delete Mark
        </button>
        <button
          onClick={() => {
            props.inFocus(props.pointId);
          }}
        >
          Edit Title
        </button>
      </div>
    </div>
  );
};
