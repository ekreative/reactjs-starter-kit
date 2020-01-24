import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { ComponsntSingleStarship } from "./ComponsntSingleStarship";

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
)(ComponsntSingleStarship);

export default ComponentStarshipsContainer;
