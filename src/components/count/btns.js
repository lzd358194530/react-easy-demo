import React from 'react'

const Btns = (onAddClick,onReduceClick)=>{
    return (
        <div>
            <button onClick={onAddClick}>add</button>
            <button onClick={onReduceClick}>reduce</button>
        </div>
    )
}

export default Btns