import React, { Component } from 'react'
import Moment from 'react-moment';
Moment.globalFormat = 'D MMM YYYY';

import CommentList from '../list/commentList'
import imagemDefault from '../img/default_user.png'
class BoxPost extends Component {

    getCommentByPostId()
    {
        return [
            {
                "id": "894tuq4ut84ut8v4t8wun89g",
                "parentId": "8xf0y6ziyjabvozdd253nd",
                "timestamp": 1468166872634,
                "body": "Hi there! I am a COMMENT.",
                "author": "thingtwo",
                "voteScore": 6,
                "deleted": false,
                "parentDeleted": false
            },
            {
                "id": "8tu4bsun805n8un48ve89",
                "parentId": "8xf0y6ziyjabvozdd253nd",
                "timestamp": 1469479767190,
                "body": "Comments. Are. Cool.",
                "author": "thingone",
                "voteScore": -5,
                "deleted": false,
                "parentDeleted": false
            }
        ]
    }
    render() {
        const { post } = this.props
        const comment = this.getCommentByPostId()
        console.log("POTS == ", post)
        console.log("Comment == ", comment)
        return (
            
            <div className="box box-widget collapsed-box">
                <div className="box-header with-border">
                    <div className="user-block">
                        <img className="img-circle" src={imagemDefault} alt="User Image" />
                        <span className="username"><a href="#">{post.author} - {post.title}</a></span>
                        <span className="description">Shared publicly - <Moment>{post.timestamp}</Moment></span>
                    </div>

                    <div className="box-tools">
                        <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Edit this post">
                            <i className="fa fa-wrench"></i></button>
                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-plus"></i>
                        </button>
                        <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa  fa-trash"></i></button>
                    </div>

                </div>

                <div className="box-body">
                    <img className="img-responsive pad" src="https://firebasestorage.googleapis.com/v0/b/chat-teste-9fbfd.appspot.com/o/QueEIsso.jpeg?alt=media&token=5c8c3702-1f8b-4fb3-bdca-ebdbd113f75b" alt="Attachment Image"/>
                    <p>{post.body}</p>
                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-down"></i> Dislike</button>
                    <span className="pull-right text-muted">{`${post.voteScore} likes - ${post.commentCount} comments`}</span>
                </div>

                <div className="box-footer box-comments">                    
                    <CommentList comments={comment} />
                </div>

                <div className="box-footer">
                    <form>
                        <img className="img-responsive img-circle img-sm" src={imagemDefault} alt="Alt Text" />

                        <div className="img-push">
                            <input type="text" className="form-control input-sm" placeholder="Press enter to post comment" />
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default BoxPost