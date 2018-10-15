import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import  { getCategories } from '../utils/api'

import DashBoard from '../components/dashboard/dashboard'
import Post from '../components/post/post'
import PostDetail from '../components/post/postDetail'


const Routers = () =>{
    return (
        <Switch>
            <Route exact path='/'  component={DashBoard} />
            <Route exact path='/post'  component={Post} />
            <Route exact path='/:category'  component={DashBoard} />
            <Route exact path='/:category/:id'  component={PostDetail} />
            <Redirect from='*'  to="/" />
        </Switch>
    )
}
export default Routers