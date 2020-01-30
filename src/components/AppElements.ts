import styled, { keyframes } from "styled-components";
// @ts-ignore
import LoadingOverlay from "react-loading-overlay";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppElement = styled.div`
  text-align: center;
`;

export const AppHeaderElement = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

export const AppIntro = styled.p`
  font-size: large;
  color: green;
`;

export const AppLogo = styled.img`
  animation: ${rotate360} infinite 12s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
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
