import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import DashBoard from '../components/dashboard/dashboard'
import Post from '../components/post/post'

export default props => (
    <Switch>
        <Route exact path='/'  component={DashBoard} />
        <Route path='/post'  component={Post} />
        <Redirect from='*'  to="/" />
    </Switch>
)