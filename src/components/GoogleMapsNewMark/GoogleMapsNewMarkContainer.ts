import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { GoogleMapsNewMark } from "./GoogleMapsNewMark";
import { createMapPoint } from "../../actions/googleMap"

const mapStateToProps = (googleMap: any) => {
  return googleMap;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({ createMapPoint }, dispatch),
  };
};

const GoogleMapsNewMarkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMapsNewMark);

export default GoogleMapsNewMarkContainer;
