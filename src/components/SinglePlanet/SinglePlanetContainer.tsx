import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { SinglePlanet } from "./SinglePlanet";

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

const SinglePlanetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePlanet);

export default SinglePlanetContainer;
