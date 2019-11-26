import {ShouYeApi} from "../api/shouye"

export const getShouYe=()=>{
   
    var getShouyeAsyncAction=(data)=>({
        type:"SHOUYE_MESSAGE",
        data
    })

    return async (dispatch)=>{
        let data =await ShouYeApi();
        console.log(data);
        dispatch(getShouyeAsyncAction(data.data))
    }
}