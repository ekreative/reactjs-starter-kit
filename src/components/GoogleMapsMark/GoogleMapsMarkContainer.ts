import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import GoogleMapsMark from "./GoogleMapsMark";

const mapStateToProps = ( googleMap: any) => {
  return googleMap;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      {

      },
      dispatch
    )
  };
};

const GoogleMapsMarkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMapsMark);

export default GoogleMapsMarkContainer;
