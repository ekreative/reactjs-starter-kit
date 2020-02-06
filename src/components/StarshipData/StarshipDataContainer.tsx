import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { StarshipData } from "./StarshipData";

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

const SinglePersonDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarshipData);

export default SinglePersonDataContainer;
