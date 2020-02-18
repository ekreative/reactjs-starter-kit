import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { Planets } from "./Planets";
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

const PlanetsContainer = connect(mapStateToProps, mapDispatchToProps)(Planets);

export default PlanetsContainer;