import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { ComponentPlanet } from "./ComponentPlanet";

const mapStateToProps = ({ main: { value } }: any) => {
  return {
    value
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({ changeStateProp }, dispatch),
  };
};

const ComponentPlanetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentPlanet);

export default ComponentPlanetContainer;
