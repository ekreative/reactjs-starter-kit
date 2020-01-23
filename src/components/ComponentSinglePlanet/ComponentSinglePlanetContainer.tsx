import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { ComponentSinglePlanet } from "./ComponentSinglePlanet";

const mapStateToProps = ({ main: { value } }: any) => {
  return {
    value
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // bind actions with dispatch
    ...bindActionCreators({ changeStateProp }, dispatch),
    // example that we can add our custom funcs to props
  };
};

const ComponentSinglePlanetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentSinglePlanet);

export default ComponentSinglePlanetContainer;
