// @ts-ignore
import React from "react";
import { SingleStarshipDataElement } from "./SingleStarshipsDataElements";

interface ISingleStarshipData {}

export const SingleStarshipData: React.FC<ISingleStarshipData> = props => {
  return (
    <div>
      <SingleStarshipDataElement>
        <p>123</p>
      </SingleStarshipDataElement>
    </div>
  );
};
