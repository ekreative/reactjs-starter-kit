import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import GoogleMaps from "./GoogleMaps";
import {
  createMapPoint,
  deleteMapPoint
} from "../../actions/googleMap";

const mapStateToProps = (googleMap: any) => {
  return googleMap;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      {
        createMapPoint,
        deleteMapPoint
      },
      dispatch
    )
  };
};

const GoogleMapsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMaps);

export default GoogleMapsContainer;
