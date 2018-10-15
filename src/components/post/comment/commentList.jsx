import React, { Component } from 'react'
import * as _ from 'lodash'

import BoxComment from '../../../commons/widgets/boxComment'

const CommentList = ({ comments, voteCommentUp, voteCommentDown, deleteComment, editComment }) => {
    comments = _.orderBy(comments, ['timestamp'], ['asc']) || []
    return (
        <div>
            {comments.map(comment => <BoxComment key={comment.id}
                comment={comment}
                voteCommentUp={voteCommentUp}
                voteCommentDown={voteCommentDown}
                deleteComment={deleteComment}
                editComment={editComment}
            />)}
        </div>)
}

export default CommentList