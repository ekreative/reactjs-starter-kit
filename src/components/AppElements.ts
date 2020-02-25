import styled from "styled-components";
// @ts-ignore
import LoadingOverlay from "react-loading-overlay";

export const AppElement = styled.div`
  text-align: center;
`;

export const AppIntro = styled.p`
  font-size: large;
  color: green;
`;

export const StyledLoader = styled(LoadingOverlay)`
  width: 100%;
  height: 98vh;
  overflow: hidden;
  .MyLoader_overlay {
    background: rgba(255, 0, 0, 0.5);
  }
  &.MyLoader_wrapper--active {
    overflow: hidden;
  }
`;
