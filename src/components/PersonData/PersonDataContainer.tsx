import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { PersonData } from "./PersonData";

const mapStateToProps = ({ main: { value } }: any) => {
  return {
    value
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({}, dispatch)
  };
};

const PersonDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonData);

export default PersonDataContainer;
