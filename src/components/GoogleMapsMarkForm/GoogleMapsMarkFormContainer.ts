import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { AddGoogleMapMarkForm } from "./GoogleMapsMarkForm";
import {
  createMapPoint,
  changeGoogleMapMarkText
} from "../../actions/googleMap";

const mapStateToProps = (googleMap: any) => {
  return googleMap;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      { createMapPoint, changeGoogleMapMarkText },
      dispatch
    )
  };
};

const GoogleMapsMarkFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGoogleMapMarkForm);

export default GoogleMapsMarkFormContainer;
