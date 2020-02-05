import React from "react";
import Popup from "reactjs-popup";
import marker from "../../assets/images/marker.png";
import { ImgElement, StyledDiv } from "./GoogleMapsMarkElements";

interface ICard {
  title: string;
}

interface IGoogleMapsMark {
  lat: any;
  element: {
    lat: any;
  };
}
const Card = ({ title }: ICard) => (
  <div className="card">
    <div className="header">{title} position </div>
    <div className="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem
      sapiente labore architecto exercitationem optio quod dolor cupiditate
    </div>
  </div>
);

const GoogleMapsMark: React.FC<IGoogleMapsMark> = props => {
  return (
    <StyledDiv>
      <Popup
        trigger={<ImgElement src={marker} />}
        position="bottom center"
        on="hover"
      >
        <Card title="Bottom Center" />
      </Popup>
    </StyledDiv>
  );
};

export default GoogleMapsMark;
