import '../commons/template/dependencies'


import React, { Component } from 'react'
import Header from '../commons/template/header'
import Routes from '../main/routers'
import { getCategories } from '../utils/api'

class App extends Component {
    render() {
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
}

export default App