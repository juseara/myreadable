import React, { Component } from 'react'

import Moment from 'react-moment';
Moment.globalFormat = 'D MMM YYYY';

import If from '../operator/if'
import imagemDefault from '../img/default_user.png'
import { timingSafeEqual } from 'crypto';

class BoxComment extends Component {
    constructor(props) {
        super(props)
        this.state = { modeRead: true, body: '' }

        this.handleDeleteComment = this.handleDeleteComment.bind(this)
        this.handleChangeMode = this.handleChangeMode.bind(this)
        this.handleChangeBody = this.handleChangeBody.bind(this)
        this.handleKeyEnter = this.handleKeyEnter.bind(this)
    }

    handleDeleteComment(e) {
        e.preventDefault()
        const { id, parentId } = this.props.comment
        this.props.deleteComment(id, parentId)
    }

    handleChangeMode(e) {
        e.preventDefault()
        this.setState({ modeRead: !this.state.modeRead })
        this.setState({body:this.props.comment.body})
    }

    handleChangeBody(e){
        e.preventDefault()
        const value = e.target.value
        this.setState({body:value})
    }


    handleKeyEnter(e){
        e.preventDefault()
        if(e.key === 'Enter'){
            if(!this.state.body)
            {
                return
            }

            const newComment = {...this.props.comment,body:this.state.body}            
            this.props.editComment(newComment)
            this.setState({modeRead:!this.state.modeRead})
        }
    }

    render() {
        const { comment, voteCommentUp, voteCommentDown } = this.props
        return (
            <div className="box-comment">
                    <If test={this.state.modeRead}>
                <img className="img-circle img-sm" src={imagemDefault} alt="User Image" />
                <div className="comment-text">
                        <span className="username">{comment.author}
                            <span className="text-muted pull-right">
                                <button type="button" onClick={this.handleChangeMode} className="btn btn-box-tool" data-toggle="tooltip" title="edit"><i className="fa fa-wrench"></i></button>
                                <button type="button" onClick={this.handleDeleteComment} className="btn btn-box-tool" data-toggle="tooltip" title="delete"><i className="fa  fa-trash"></i></button>
                                <Moment>{comment.timestamp}</Moment>
                            </span>
                        </span>
                        {comment.body} <br />
                        <button type="button" onClick={() => voteCommentUp(comment)} className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                        <button type="button" onClick={() => voteCommentDown(comment)} className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-down"></i> Dislike</button>
                        <span className="pull-right text-muted">{`${comment.voteScore >= 0 ? `${comment.voteScore} likes` : `${comment.voteScore * -1} dislikes`}  `}</span>
                        </div>
                    </If>
                    <If test={!this.state.modeRead}>
                        <div className="form-group">
                            <label>Body</label>
                            <input value={this.state.body} onChange={this.handleChangeBody} onKeyUp={this.handleKeyEnter} className='form-control input-sm input-post-edit' type="text" />
                            <button type="button" onClick={this.handleChangeMode} className="btn btn-default btn-xs button-cancel-post-edit">Cancel</button>
                        </div>
                    </If>
                
            </div>
        )
    }
}

export default BoxComment