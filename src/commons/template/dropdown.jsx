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
                            <li><Link to="/post">Post</Link></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li className="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
        )
    }
}

export default DropDown