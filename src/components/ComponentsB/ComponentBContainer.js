import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeStateProp} from "../../actions";
import ComponentB from "./ComponentB";

const mapStateToProps = (state, ownProps) => {
  return {
    state,
    ...ownProps
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({changeStateProp}, dispatch)
};

const ComponentBContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentB);

export default ComponentBContainer;
