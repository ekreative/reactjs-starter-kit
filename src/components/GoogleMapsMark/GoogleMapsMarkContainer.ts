import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import GoogleMapsMark from "./GoogleMapsMark";
import {
  changeGoogleMapMarkText,
  inFocus,
  deleteMapPoint
} from "../../actions/googleMap";

const mapStateToProps = (googleMap: any) => {
  return googleMap;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      { changeGoogleMapMarkText, inFocus, deleteMapPoint },
      dispatch
    )
  };
};

const GoogleMapsMarkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMapsMark);

export default GoogleMapsMarkContainer;
