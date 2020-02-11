import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { AddGoogleMapMarkForm } from "./GoogleMapMarkForm";
import { createMapPoint } from "../../actions/googleMap"

const mapStateToProps = (googleMap: any) => {
  return googleMap;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({ changeStateProp, createMapPoint }, dispatch),
  };
};

const GoogleMapMarkFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGoogleMapMarkForm);

export default GoogleMapMarkFormContainer;
