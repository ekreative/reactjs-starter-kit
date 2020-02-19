import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Starship } from "./Starship";

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

const StarshipsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Starship);

export default StarshipsContainer;
