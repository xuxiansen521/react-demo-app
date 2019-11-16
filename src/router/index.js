import React , { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom"

import home from "../pages/home/home"

export default class RouteConfig extends Component{
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/home' component={home}></Route>
                </Switch>
            </HashRouter>
        )
    }
} 