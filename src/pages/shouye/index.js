import React from "react";
import store from "../../store";
import {getShouYe} from "../../action/shouyeAction"
// console.log(store)

class ShouYe extends React.Component{
    constructor(){
        super()
        this.state=store.getState().shouyeList;
        store.subscribe(this.handleUpdate.bind(this))
    }
    render(){
        // console.log(this.state);
        return (
            <div>
                <h2>ShouYe</h2>
                <button onClick={this.handleGetShouYeMessage.bind(this)}>点击获取信息</button>
            </div>
        )
    }
    handleGetShouYeMessage(){
        store.dispatch(getShouYe())
        //  console.log(this.state);
    }
    handleUpdate(){
        this.setState(store.getState().shouyeList);
        // console.log(this.state);
    }
}

export default ShouYe;