import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import GoogleMapsMark from "./GoogleMapsMark";
import {
  deleteMapPoint,
  changeGoogleMapMarkText
} from "../../actions/googleMap";

const mapStateToProps = (googleMap: any) => {
  return googleMap;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({ deleteMapPoint, changeGoogleMapMarkText }, dispatch)
  };
};

const GoogleMapsMarkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMapsMark);

export default GoogleMapsMarkContainer;
