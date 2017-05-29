import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeStateProp } from '../actions'
import App from './App'

const mapStateToProps = ({main: {value}}, ownProps) => {
  return {
    value,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // bind actions with dispatch
    ...bindActionCreators({changeStateProp}, dispatch),
    // example that we can add our custom funcs to props
    myCustomPropsFunc: function (prop, value, reducer) {
      // call of action in custom func
      changeStateProp(prop, value, reducer)(dispatch)
      return null
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
