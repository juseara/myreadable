import React, { Component } from 'react'

import Moment from 'react-moment';
Moment.globalFormat = 'D MMM YYYY';

import If from '../operator/if'
import CommentList from '../list/commentList'
import imagemDefault from '../img/default_user.png'
class BoxPost extends Component {
    
   
    render() {
        const { post } = this.props
        debugger
        console.log("POTS == ", post)
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
                    <p>{post.body}</p>
                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-down"></i> Dislike</button>
                    <span className="pull-right text-muted">{`${post.voteScore} likes - ${post.commentCount} comments`}</span>
                </div>
                <If test={post.comments.length>0}>
                    <div className="box-footer box-comments">                    
                        <CommentList comments={post.comments} />
                    </div>
                </If>

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