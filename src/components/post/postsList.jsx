import React, { Component } from 'react'
import * as _ from 'lodash'

import BoxPost from '../../commons/widgets/boxPost'
import Grid from '../../commons/layout/grid'

const PostsList = ({filter, posts, votePostUp, voteCommentUp, votePostDown,
    voteCommentDown, sendNewComment, deletePost, deleteComment, editPost,
    editComment,order }) =>{

    posts = _.orderBy(posts, [order], ['desc'])

    if (filter) {
        posts = posts.filter(post => post.category === filter)
    }

    return (
        <Grid>
            {posts.map(post => {
                return <BoxPost key={post.id}
                    post={post}
                    votePostUp={votePostUp}
                    votePostDown={votePostDown}
                    voteCommentUp={voteCommentUp}
                    voteCommentDown={voteCommentDown}
                    sendNewComment={sendNewComment}
                    deletePost={deletePost}
                    deleteComment={deleteComment} 
                    editPost={editPost}
                    editComment={editComment} />
            }).filter((post) => !post.deleted)}
        </Grid>
    )
}

export default PostsList