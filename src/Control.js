import React from "react";
import { connect } from 'react-redux';

const Control = props =>{
    return(
        <div>
            <button onClick ={()=>props.add5()} >ADD 5</button>
            <button onClick ={()=>props.add()} >ADD</button>
            <button onClick ={()=>props.sub()} >SUB</button>
            <button onClick ={()=>props.reset()} >RESET</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        add5: () => { 
            dispatch({type: 'ADD5', })
        },
        add: () => {
            dispatch({type: 'ADD', })
        },
        sub: () => {
            dispatch({type: 'SUB'})
        },
        reset: () => {
            dispatch({type: 'RESET'})
        },
    }
   };

export default connect(null, mapDispatchToProps)(Control);