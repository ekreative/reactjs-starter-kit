import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { changeStateProp } from "../../actions";
import { increment, decrement } from "../../actions/main";
import { ComponentPerson } from "./ComponentPerson";

const mapStateToProps = ({ main: { value } }: any) => {
  return {
    value
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // bind actions with dispatch
    ...bindActionCreators({ changeStateProp, increment }, dispatch),
    // example that we can add our custom funcs to props
    decrement: function() {
      // call of action in custom func
      decrement()(dispatch);
    }
  };
};

const ComponentPersonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentPerson);

export default ComponentPersonContainer;
