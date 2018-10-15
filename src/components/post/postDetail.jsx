import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


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

import BoxPost from '../../commons/widgets/boxPost'
import Grid from '../../commons/layout/grid'
import ContentHeader from '../../commons/template/contentHeader'
import NoMatch from '../../commons/template/noMatch'

class PostDetail extends Component{

    componentWillMount(){
        this.props.fetchPosts()
    }
    render(){
        const post = this.props.posts.find(post => post.id === this.props.match.params.id)

        return(
            <Grid>
                   <ContentHeader title='Post' small='detail' />
                {post ? <BoxPost  post={post}
                votePostUp={this.props.votePostUp}
                votePostDown={this.props.votePostDown}
                voteCommentUp={this.props.voteCommentUp}
                voteCommentDown={this.props.voteCommentDown}
                sendNewComment={this.props.sendNewComment}
                deletePost={this.props.deletePost}
                deleteComment={this.props.deleteComment}
                editPost={this.props.editPost}
                editComment={this.props.editComment}/>:<NoMatch/>}
            </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
