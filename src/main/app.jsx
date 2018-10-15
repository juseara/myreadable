import '../commons/template/dependencies'


import React, { Component } from 'react'
import Header from '../commons/template/header'
import Routes from '../main/routers'

const App = () =>{
    return (
        <div className='wrapper'>
            <Header  />
            <div className='content-wrapper'>
                <div className="container">
                    <Routes />
                </div>
            </div>
        </div>
        )
}

export default App