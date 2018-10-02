import '../commons/template/dependencies'


import React from 'react'
import Header from '../commons/template/header'
import Routes from '../main/routers'

export default props => (
    <div className='wrapper'>
        <Header />
        <div className='content-wrapper'>
        <div className="container">
            <Routes />
        </div>
        </div>
    </div>
)