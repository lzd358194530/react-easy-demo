import React from 'react'
import {connect} from 'react-redux'
import { add,reduce } from '../actions'


import { bindActionCreators } from 'redux'
import * as actions from '../actions'



class Btn extends React.Component{
    render(){
        // const {onAdd,onReduce} = this.props; 写法2 
        const {add,reduce} =this.props;
        return (
            <div>
                {/*  写法2 <button onClick={onAdd}>add</button><button onClick={onReduce}>reduce</button>*/}
                <button onClick={add}>add</button>
                <button onClick={reduce}>reduce</button>
            </div>
        )
    }
}


export default connect(
    state => state,
    dispatch => bindActionCreators({...actions}, dispatch)
    // dispatch =>{ 写法2 
    //     return {
    //         onAdd:()=>dispatch(add()),
    //         onReduce:()=>dispatch(reduce())
    //     }
    // }
)(Btn)