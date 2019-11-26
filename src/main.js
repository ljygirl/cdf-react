import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import "./static/index.scss"

ReactDOM.render(
    <App />,
    document.getElementById("root"),
    () => {
        console.log("渲染成功")
    }
)

/*
    withRouter:
        路由当中的一个高阶组件，作用是给当前组件的props身上添加三个属性(history location match)

*/

