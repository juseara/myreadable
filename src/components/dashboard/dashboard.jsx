import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import queryString from 'query-string'

import {    fetchPosts, 
            votePostUp, 
            votePostDown, 
            voteCommentUp, 
            voteCommentDown, 
            goToDashboard,
            sendNewComment, 
            deletePost,
            deleteComment,
            editPost,
            editComment } from '../post/postActions'

import Content from '../../commons/template/content'
import PostsList from '../post/postsList'
import ContentHeader from '../../commons/template/contentHeader'
import If from '../../commons/operator/if'

class DashBoard extends Component {
    constructor(props){
        super(props)
        this.state = { order:'timestamp' }
        this.onChangeOrder = this.onChangeOrder.bind(this)
    }

    onChangeOrder(event){
        this.setState({order:event.target.value})
    }

    componentWillMount() {
        this.props.fetchPosts()
        this.props.goToDashboard(false)
    }

    renderBreadCrumb(category) {
        return (
            <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard"></i> Category</a></li>
                <li><a href="#">{category}</a></li>
            </ol>
        )
    }
    render() {
        const { posts, location } = this.props
        const values = queryString.parse(location.search)
        return (
            <div>
                <ContentHeader title='Home' small='Recent Posts' >
                    <If test={values.category}>
                        {this.renderBreadCrumb(values.category)}
                    </If>
                </ContentHeader>
                <Content>
                    <div className='input-group group-post'>
                        <span className="input-group-addon input-group-post">Order</span>
                        <select className='form-control input-order-post' name="order" id="order" onChange={this.onChangeOrder}>
                                <option  value="timestamp">DATE</option>
                                <option  value="voteScore">LIKE</option>
                            </select>
                    </div>
                    <PostsList posts={posts}
                        order={this.state.order}
                        filter={location.search}
                        votePostUp={this.props.votePostUp}
                        votePostDown={this.props.votePostDown}
                        voteCommentUp={this.props.voteCommentUp}
                        voteCommentDown={this.props.voteCommentDown}
                        sendNewComment={this.props.sendNewComment}
                        deletePost={this.props.deletePost}
                        deleteComment={this.props.deleteComment}
                        editPost={this.props.editPost}
                        editComment={this.props.editComment} />
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ posts: state.post.posts })
const mapDispatchToProps = dispath => bindActionCreators({ fetchPosts, 
            votePostUp, 
            votePostDown, 
            voteCommentUp, 
            voteCommentDown, 
            goToDashboard, 
            sendNewComment, 
            deletePost, 
            deleteComment,
            editPost,
            editComment }, dispath)
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)