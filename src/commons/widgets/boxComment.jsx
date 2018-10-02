import React, { Component } from 'react'

import Moment from 'react-moment';
Moment.globalFormat = 'D MMM YYYY';


import imagemDefault from '../img/default_user.png'

class BoxComment extends Component {

    render() {
        const { comment } = this.props
        return (
            <div className="box-comment">
                <img className="img-circle img-sm" src={imagemDefault} alt="User Image" />
                <div className="comment-text">
                    <span className="username">{comment.author}
                        <span className="text-muted pull-right"><Moment>{comment.timestamp}</Moment></span>
                    </span>
                    {comment.body} <br/>
                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-down"></i> Dislike</button>
                    <span className="pull-right text-muted">{`${comment.voteScore} likes `}</span>
                </div>
            </div>
        )
    }
}

export default BoxComment