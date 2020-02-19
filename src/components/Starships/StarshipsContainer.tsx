import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Starships } from "./Starships";
import { hideLoading, showLoading } from "../../actions/ui";

const mapStateToProps = ({ ui: { isLoading } }: any) => {
  return {
    isLoading
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({ showLoading, hideLoading }, dispatch)
  };
};

const StarshipsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Starships);

export default StarshipsContainer;
