import React, { Component } from 'react'

import BoxComment from '../widgets/boxComment'


class CommentList extends Component {

    render(){
        console.log("PROPS DASHBOARDLIST == ", this.props)
        const { comments } = this.props
        return (
            <div>
                {comments.map(comment =><BoxComment key={comment.id} comment={comment}/>)}
            </div>
            
            
        )
    }
}

export default CommentList