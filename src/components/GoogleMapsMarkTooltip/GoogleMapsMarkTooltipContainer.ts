import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { GoogleMapsMarkTooltip } from "./GoogleMapsMarkTooltip";
import {
  deleteMapPoint,
  inFocus
} from "../../actions/googleMap";

const mapStateToProps = (googleMap: any) => {
  return googleMap;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      { deleteMapPoint, inFocus },
      dispatch
    )
  };
};

const GoogleMapsMarkTooltipContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMapsMarkTooltip);

export default GoogleMapsMarkTooltipContainer;
