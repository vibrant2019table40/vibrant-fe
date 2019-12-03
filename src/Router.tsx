import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './containers/Home'
import Case from './containers/Case'

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/:casenum' component={Case}/>
    </Switch>
)

export default Router
