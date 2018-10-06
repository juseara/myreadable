import React, { Component } from 'react'

import BoxComment from '../../commons/widgets/boxComment'


class CommentList extends Component {

    render(){
        console.log("PROPS DASHBOARDLIST == ", this.props)
        const  comments  = this.props.comments || []
        return (
            <div>
                {comments.map(comment =><BoxComment     key={comment.id}
                                                        comment={comment} 
                                                        voteCommentUp={this.props.voteCommentUp}
                                                        voteCommentDown={this.props.voteCommentDown}
                                                        />)}
            </div>
            
            
        )
    }
}

export default CommentList