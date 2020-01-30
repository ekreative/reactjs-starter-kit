import { connect } from "react-redux";
import { Dispatch } from "redux";
import { bindActionCreators } from "redux";
import { changeStateProp } from "../actions";
import { App } from "./App";

const mapStateToProps = ({ main: { value }, ui: { isLoading } }: any) => {
  return {
    isLoading,
    value
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // bind actions with dispatch
    ...bindActionCreators({ changeStateProp }, dispatch),
    // example that we can add our custom funcs to props
    myCustomPropsFunc: function(prop: string, value: number, reducer: string) {
      // call of action in custom func
      changeStateProp(prop, value, reducer)(dispatch);
      return null;
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
