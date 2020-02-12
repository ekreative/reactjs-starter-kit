import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
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
      { changeStateProp, createMapPoint, changeGoogleMapMarkText },
      dispatch
    )
  };
};

const GoogleMapsMarkFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGoogleMapMarkForm);

export default GoogleMapsMarkFormContainer;
