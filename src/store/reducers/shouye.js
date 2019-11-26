import {shouyeMessage} from "../../action/actionsTypes"
const defaultState = {
   
    shouyeList:[],
}


export default (state=defaultState,action)=>{
    switch(action.type){
        case shouyeMessage:
            let shouyeState=Object.assign({},state);
            shouyeState.shouyeList=action.data;
            // console.log(shouyeState)
            return shouyeState;
    }
    return state;
}