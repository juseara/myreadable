import React, { Component } from 'react'
import * as _ from 'lodash'

import BoxComment from '../../../commons/widgets/boxComment'


class CommentList extends Component {

    render(){
        console.log("PROPS DASHBOARDLIST == ", this.props)
        const  comments  = _.orderBy(this.props.comments,['timestamp'],['desc']) || []        
        return (
            <div>
                {comments.map(comment =><BoxComment     key={comment.id}
                                                        comment={comment} 
                                                        voteCommentUp={this.props.voteCommentUp}
                                                        voteCommentDown={this.props.voteCommentDown}
                                                        deleteComment={this.props.deleteComment}
                                                        />)}
            </div>
            
            
        )
    }
}

export default CommentList