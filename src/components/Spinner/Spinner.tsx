import React from "react";
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";

interface ISomething {}

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Spinner: React.FC<ISomething> = props => {
  // const [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading">
      <ClipLoader
        css={override}
        size={30}
        //size={"150px"} this also works
        color={"#123abc"}
        loading={true}
      />
    </div>
  );
};
