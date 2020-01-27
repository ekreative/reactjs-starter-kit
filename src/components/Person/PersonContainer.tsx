import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { spinnerIsLoading } from "../../actions/main";
import { Person } from "./Person";

const mapStateToProps = ({ main: { value, isLoading } }: any) => {
  return {
    value,
    isLoading
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({ changeStateProp, spinnerIsLoading }, dispatch)
  };
};

const PersonContainer = connect(mapStateToProps, mapDispatchToProps)(Person);

export default PersonContainer;
