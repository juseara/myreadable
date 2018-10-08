import React, { Component } from 'react'

import Moment from 'react-moment';
Moment.globalFormat = 'D MMM YYYY';

import If from '../operator/if'
import CommentList from '../../components/post/comment/commentList'
import CommentForm from '../../components/post/comment/commentForm'

import imagemDefault from '../img/default_user.png'
class BoxPost extends Component {
  constructor(props){
      super(props)

      this.handleDeletePost = this.handleDeletePost.bind(this)
  }
    handleDeletePost(e)
    {
        e.preventDefault()
        const { id } = this.props.post
        this.props.deletePost(id)
    }

    render() {
        const { post, votePostUp, votePostDown } = this.props
        const comments = post.comments.filter((comment) => !comment.deleted)
        return (
            
            <div className="box box-widget collapsed-box">
                <div className="box-header with-border">
                    <div className="user-block">
                        <img className="img-circle" src={imagemDefault} alt="User Image" />
                        <span className="username"><a href="#">{post.author} - {post.title}</a></span>
                        <span className="description"></span>
                        <ul className="list-inline">
                        <li><i className="fa fa-share margin-r-5"></i> Shared publicly - <Moment>{post.timestamp}</Moment></li>
                        <li className="pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-comments-o margin-r-5"></i> {`Comments (${post.commentCount})`}
                        </button>
                        </li>
                    </ul>
                    </div>

                    <div className="box-tools">
                        <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="edit">
                            <i className="fa fa-wrench"></i></button>
                        <button type="button" className="btn btn-box-tool" onClick={this.handleDeletePost} data-widget="remove" data-toggle="tooltip" title="delete"><i className="fa  fa-trash"></i></button>
                    </div>

                </div>

                <div className="box-body">
                    <p>{post.body}</p>
                    <button type="button" onClick={()=>votePostUp(post)} className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                    <button type="button" onClick={()=>votePostDown(post)} className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-down"></i> Dislike</button>
                    <span className="pull-right text-muted">{`${post.voteScore >= 0? `${post.voteScore} likes`:`${post.voteScore*-1} dislikes`}`}</span>
                </div>
                <If test={comments.length>0}>
                    <div className="box-footer box-comments">                    
                        <CommentList    comments={comments} 
                                        voteCommentUp={this.props.voteCommentUp}
                                        voteCommentDown={this.props.voteCommentDown}
                                        deleteComment={this.props.deleteComment}/>
                    </div>
                </If>

                <CommentForm parentId={post.id} sendNewComment={this.props.sendNewComment}/>

            </div>
        )
    }
}

export default BoxPost