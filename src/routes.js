import React from "react";
import { Route , BrowserRouter } from "react-router-dom";


import Home from "./pages/Home/Index.js";
import Pokemon from "./pages/Pokemon/Index.js";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Pokemon} path="/Pokemon" />
        
        </BrowserRouter>
    )
}

export default Routes;