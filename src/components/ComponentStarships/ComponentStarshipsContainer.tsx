import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { ComponentStarships } from "./ComponentStarships";

const mapStateToProps = ({ main: { value } }: any) => {
  return {
    value
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({ changeStateProp }, dispatch),
  };
};

const ComponentStarshipsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentStarships);

export default ComponentStarshipsContainer;
