import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeStateProp } from '../../actions'
import { increment, incrementAsync, decrement, decrementAsync, postData } from '../../actions/main'
import ComponentA from './ComponentA'

const mapStateToProps = ({main: {value}}) => {
  return {
    value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // bind actions with dispatch
    ...bindActionCreators({changeStateProp, increment, incrementAsync, decrement, decrementAsync, postData}, dispatch),
    // example that we can add our custom funcs to props
    decrement: function () {
      // call of action in custom func
      decrement()(dispatch)
    }
  }
}

const ComponentAContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentA)

export default ComponentAContainer
