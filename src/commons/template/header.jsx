import React from 'react'
import DropDown from './dropdown'
import { Link } from 'react-router-dom'

export default props => (
    <header className="main-header">
        <nav className="navbar navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <Link to="/#/" className="navbar-brand"><b>My</b> Readable</Link>
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
                <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
                    <ul className="nav navbar-nav">
                        <DropDown />
                    </ul>
                </div>

                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <li class="dropdown messages-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-envelope-o"></i>
                                <span class="label label-success">4</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)