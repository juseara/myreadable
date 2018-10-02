import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class DropDown extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    changeOpen() {
        console.log("OPEN === ",this.state.open)
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
                    <li className={`dropdown`}>
                        <a href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown">Categorias<span className="caret"></span></a>
                        <ul className="dropdown-menu" role="menu">
                            <li><Link to="/post">React</Link></li>
                            <li><Link to="/post">Redux</Link></li>
                            <li><Link to="/post">Udacity</Link></li>
                        </ul>
                    </li>
        )
    }
}

export default DropDown