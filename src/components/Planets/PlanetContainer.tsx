import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { Planet } from "./Planet";
import { hideLoading, showLoading } from "../../actions/ui";

const mapStateToProps = ({ ui: { isLoading } }: any) => {
  return {
    isLoading
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      { changeStateProp, showLoading, hideLoading },
      dispatch
    )
  };
};

const PlanetContainer = connect(mapStateToProps, mapDispatchToProps)(Planet);

export default PlanetContainer;
