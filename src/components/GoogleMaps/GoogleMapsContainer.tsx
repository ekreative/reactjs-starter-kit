import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import GoogleMaps from "./GoogleMaps";
import { hideLoading, showLoading } from "../../actions/ui";
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
