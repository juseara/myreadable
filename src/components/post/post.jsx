import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

import { sendNewPost } from '../post/postActions'

import Content from '../../commons/template/content'
import ContentHeader from '../../commons/template/contentHeader'
import PostForm from './postForm'


class Post extends Component {

    componentDidMount(){
     
    }
    render() {
        if (this.props.goToDashboard) {
            return <Redirect to='/' />;
        }
        return (
            <div>
                <ContentHeader title='New' small='Post' />
                <Content>
                    <PostForm categories={this.props.categories} onSubmit={this.props.sendNewPost}/>
                </Content>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({goToDashboard: state.post.goToDashboard, categories: state.category.categories})
const mapDispatchToProps = dispath => bindActionCreators({sendNewPost},dispath)
export default connect(mapStateToProps,mapDispatchToProps)(Post)
