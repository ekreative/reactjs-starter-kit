import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from './Login'
import { changeStateProp } from '../../actions'
import { login } from '../../actions/user'

const mapStateToProps = ({user: {name, email, isRequesting, isFailure, isLoggedIn}}, ownProps) => {
  return {
    name,
    email,
    isRequesting,
    isFailure,
    isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({changeStateProp, login}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
