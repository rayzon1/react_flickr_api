import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../App";



// Main container holds the routes set up.
const MainContainer = () => {
    return(
        
        <HashRouter>
            <div>
                <h2>Flickr Search</h2>
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </div>
        </HashRouter>
    )

}

export default MainContainer;