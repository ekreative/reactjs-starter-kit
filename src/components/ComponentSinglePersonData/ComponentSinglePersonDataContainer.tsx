import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { ComponentSinglePersonData } from "./ComponentSinglePersonData";

const mapStateToProps = ({ main: { value } }: any) => {
  return {
    value
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // bind actions with dispatch
    ...bindActionCreators({ changeStateProp }, dispatch)
    // example that we can add our custom funcs to props
  };
};

const ComponentSinglePersonDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentSinglePersonData);

export default ComponentSinglePersonDataContainer;
