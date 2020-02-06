import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { showLoading, hideLoading } from "../../actions/ui";
import { Persons } from "./Persons";

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

const PersonsContainer = connect(mapStateToProps, mapDispatchToProps)(Persons);

export default PersonsContainer;
