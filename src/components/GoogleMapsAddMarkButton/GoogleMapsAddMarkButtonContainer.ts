import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import GoogleMapsAddMarkButton from "./GoogleMapsAddMarkButton";

const mapStateToProps = (googleMap: any) => {
  return googleMap;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      {
      },
      dispatch
    )
  };
};

const GoogleMapsAddMarkButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMapsAddMarkButton);

export default GoogleMapsAddMarkButtonContainer;
