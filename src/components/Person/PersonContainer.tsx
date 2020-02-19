import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Person } from "./Person";

const mapStateToProps = ({ main: { value } }: any) => {
  return {
    value
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({}, dispatch),
  };
};

const PersonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Person);

export default PersonContainer;
