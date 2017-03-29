import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeStateProp} from "../../actions";
import ComponentA from "./ComponentA";

const mapStateToProps = (state, ownProps) => {
  return {
    state,
    ...ownProps
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({changeStateProp}, dispatch)
};

const ComponentAContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentA);

export default ComponentAContainer;







