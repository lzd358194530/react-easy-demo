

const clickBtn=(state={count:0},action)=>{
    switch(action.type){
        case 'ADD':
            return Object.assign({},state,{
                count:state.count+1
            })
        case 'REDUCE':
            return Object.assign({},state,{
                count:state.count-1
            })
        default:
            return state
    }
}
export default clickBtn