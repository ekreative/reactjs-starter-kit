import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Planet } from "./Planet";

const mapStateToProps = ({ main: { value } }: any) => {
  return {
    value
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({}, dispatch)
  };
};

const PlanetContainer = connect(mapStateToProps, mapDispatchToProps)(Planet);

export default PlanetContainer;
