import '../commons/template/dependencies'


import React, { Component } from 'react'
import Header from '../commons/template/header'
import Routes from '../main/routers'
import { getCategories } from '../utils/api'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {categories : []}
    }
    componentDidMount(){
        getCategories().then((categories) => {
            console.log(categories)
            this.setState({categories:categories})
          })
    }

    render() {
        return (
            <div className='wrapper'>
                <Header categories={this.state.categories} />
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