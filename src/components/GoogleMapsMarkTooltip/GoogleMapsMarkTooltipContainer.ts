import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Card } from "./GoogleMapsMarkTooltip";
import {
  deleteMapPoint
} from "../../actions/googleMap";

const mapStateToProps = (googleMap: any) => {
  return googleMap;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      { deleteMapPoint },
      dispatch
    )
  };
};

const GoogleMapsMarkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default GoogleMapsMarkContainer;
