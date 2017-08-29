import React from 'react'
import {connect} from 'react-redux'

// import show from '../components/count/show'
// import { bindActionCreators } from 'redux'
// import * as actions from '../actions'



class Show extends React.Component{
    render(){
        let count = this.props.btns.count
        return <div>{count}</div>
    }
}


export default connect(
    state => state
)(Show)