import React, { Component } from 'react'

import Moment from 'react-moment';
Moment.globalFormat = 'D MMM YYYY';


import imagemDefault from '../img/default_user.png'

class BoxComment extends Component {
    constructor(props){
        super(props)
        this.handleDeleteComment = this.handleDeleteComment.bind(this)
    }

    handleDeleteComment(e){
        e.preventDefault()
        const {id, parentId } = this.props.comment
        this.props.deleteComment(id, parentId)
    }
    
    render() {
        const { comment, voteCommentUp, voteCommentDown } = this.props
        return (
            <div className="box-comment">
                <img className="img-circle img-sm" src={imagemDefault} alt="User Image" />
                <div className="comment-text">
                    <span className="username">{comment.author}
                        <span className="text-muted pull-right">
                            <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="edit"><i className="fa fa-wrench"></i></button>
                            <button type="button" onClick={this.handleDeleteComment} className="btn btn-box-tool" data-toggle="tooltip" title="delete"><i className="fa  fa-trash"></i></button>
                            <Moment>{comment.timestamp}</Moment>
                        </span>
                    </span>
                    <div className="box-tools">
                        
                        
                    </div>
                    {comment.body} <br/>
                    <button type="button" onClick={() => voteCommentUp(comment)} className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                    <button type="button" onClick={() => voteCommentDown(comment)} className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-down"></i> Dislike</button>
                    <span className="pull-right text-muted">{`${comment.voteScore >= 0? `${comment.voteScore} likes`:`${comment.voteScore*-1} dislikes`}  `}</span>
                </div>
            </div>
        )
    }
}

export default BoxComment