import React, { Component } from 'react'

import Moment from 'react-moment';
Moment.globalFormat = 'D MMM YYYY';

import If from '../operator/if'
import CommentList from '../../components/post/comment/commentList'
import CommentForm from '../../components/post/comment/commentForm'

import imagemDefault from '../img/default_user.png'
import { timingSafeEqual } from 'crypto';
class BoxPost extends Component {
    constructor(props) {
        super(props)

        this.state = { modeRead: true,title:'',body:'' }
        this.handleDeletePost = this.handleDeletePost.bind(this)
        this.handleChangeMode = this.handleChangeMode.bind(this)
        this.handlerChangeTitle = this.handlerChangeTitle.bind(this)
        this.handlerChangeBody = this.handlerChangeBody.bind(this)
        this.handlePostUpdate = this.handlePostUpdate.bind(this)

    }
    handleDeletePost(e) {
        e.preventDefault()
        const { id } = this.props.post
        this.props.deletePost(id)
    }

    handleChangeMode(e) {
        e.preventDefault()
        this.setState({ modeRead: !this.state.modeRead })
        this.setState({title:this.props.post.title})
        this.setState({body:this.props.post.body})
    }

    handlerChangeTitle(e)
    {
        e.preventDefault()
        const value = e.target.value;
        this.setState({title:value})

    }

    handlerChangeBody(e)
    {
        e.preventDefault()
        const value = e.target.value;
        this.setState({body:value})

    }

    handlePostUpdate(e)
    {
        e.preventDefault()
        const newPost = {...this.props.post,title:this.state.title,body:this.state.body}
        this.props.editPost(newPost)
        this.setState({modeRead:!this.state.modeRead})
    }

    render() {
        const { post, votePostUp, votePostDown } = this.props
        const comments = post.comments.filter((comment) => !comment.deleted)
        return (

            <div className="box box-widget collapsed-box">
                <div className="box-header with-border">
                    <div className="user-block">

                        <If test={this.state.modeRead}>
                            <img className="img-circle" src={imagemDefault} alt="User Image" />
                            <span className="username">
                                <a href="#">{post.author} - {post.title}</a>
                            </span>
                            <span className="description"></span>
                            <ul className="list-inline">
                                <li><i className="fa fa-share margin-r-5"></i> Shared publicly - <Moment>{post.timestamp}</Moment></li>
                            </ul>
                            <div className=''>
                                <p>{post.body}</p>
                                <button type="button" onClick={() => votePostUp(post)} className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                                <button type="button" onClick={() => votePostDown(post)} className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-down"></i> Dislike</button>
                                <span className="pull-right text-muted">{`${post.voteScore >= 0 ? `${post.voteScore} likes` : `${post.voteScore * -1} dislikes`}`}</span>
                            </div>
                            <div className="pull-right text-muted">
                                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-comments-o margin-r-5"></i> {`Comments (${post.commentCount})`}</button>
                            </div>
                        </If>

                        <If test={!this.state.modeRead}>
                            <div className="form-group">
                                <label>Title</label>
                                <input value={this.state.title} onChange={this.handlerChangeTitle} className='form-control input-sm input-post-edit' type="text" />
                            </div>
                            <div className="form-group">
                                <label>Body</label>
                                <input value={this.state.body} onChange={this.handlerChangeBody} className='form-control input-sm input-post-edit' type="text" />
                                <button type="button" onClick={this.handleChangeMode} className="btn btn-default btn-xs button-cancel-post-edit">Cancel</button>
                                <button type="button" onClick={this.handlePostUpdate} className="btn btn-default btn-xs button-cancel-post-edit">Publish</button>
                            </div>
                        </If>




                    </div>
                    <If test={this.state.modeRead}>
                        <div className="box-tools">
                            <button type="button" onClick={this.handleChangeMode} className="btn btn-box-tool" data-toggle="tooltip" title="edit">
                                <i className="fa fa-wrench"></i></button>
                            <button type="button" className="btn btn-box-tool" onClick={this.handleDeletePost} data-widget="remove" data-toggle="tooltip" title="delete"><i className="fa  fa-trash"></i></button>
                        </div>
                    </If>

                </div>
                <If test={comments.length > 0}>
                    <div className="box-footer box-comments">
                        <CommentList comments={comments}
                            voteCommentUp={this.props.voteCommentUp}
                            voteCommentDown={this.props.voteCommentDown}
                            deleteComment={this.props.deleteComment}
                            editComment={this.props.editComment} />
                    </div>
                </If>

                <CommentForm parentId={post.id} sendNewComment={this.props.sendNewComment} />

            </div>
        )
    }
}

export default BoxPost