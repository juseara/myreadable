import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import DropDown from './dropdown'
import { fetchCategories } from '../../components/category/categoryAction'


class Header extends Component {

    componentWillMount(){
        this.props.fetchCategories();
    }

    render() {
        const { categories } = this.props
        return (
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
                                <DropDown categories={categories} />
                            </ul>
                        </div>

                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                <li className="messages-menu">
                                    <Link to="/post" >
                                        <i className="fa fa-envelope-o"></i> New Post
                            </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
const mapStateToProps = state => ({categories: state.category.categories})
const mapDispatchToProps = dispath => bindActionCreators({fetchCategories},dispath)
export default connect(mapStateToProps,mapDispatchToProps)(Header)
