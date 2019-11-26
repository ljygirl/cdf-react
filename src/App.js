import React from "react";
import { HashRouter,Redirect,Switch} from "react-router-dom";
import routeEach from "./utils/routeEach"
import {configRoute} from "./router"
import TabBar from "./common/tabBar"

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Redirect from="/" to="/shouye" exact/>
                    {routeEach(configRoute)}
                </Switch>
                <TabBar/>
            </HashRouter>
        )
    }

}


export default App;


