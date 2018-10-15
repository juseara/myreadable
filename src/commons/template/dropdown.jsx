import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const DropDown = ({categories}) =>{
    return (
        <li className={`dropdown`}>
            <a href="#"
                className="dropdown-toggle"
                data-toggle="dropdown">Categories<span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
                {categories.map(category => <li key={category.name}><Link to={`/${category.path}`}>{category.name}</Link></li>)}
            </ul>
        </li>
    )
}

export default DropDown