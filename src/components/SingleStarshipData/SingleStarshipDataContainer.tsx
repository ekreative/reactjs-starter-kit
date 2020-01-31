import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { SingleStarshipData } from "./SingleStarshipData";

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
)(SingleStarshipData);

export default SinglePersonDataContainer;
