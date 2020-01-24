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
    ...bindActionCreators({ changeStateProp }, dispatch)
  };
};

const ComponentSinglePersonDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentSinglePersonData);

export default ComponentSinglePersonDataContainer;
