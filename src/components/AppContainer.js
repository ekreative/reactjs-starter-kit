import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeStateProp} from "../actions";
import App from "./App";

const mapStateToProps = (state, ownProps) => {
  return {
    state,
    ...ownProps
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({changeStateProp}, dispatch)
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;







