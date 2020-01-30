import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { spinnerStartLoading, spinnerEndLoading } from "../../actions/main";
import { Person } from "./Person";

const mapStateToProps = ({ ui: { isLoading } }: any) => {
  return {
    isLoading
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      { changeStateProp, spinnerStartLoading, spinnerEndLoading },
      dispatch
    )
  };
};

const PersonContainer = connect(mapStateToProps, mapDispatchToProps)(Person);

export default PersonContainer;
