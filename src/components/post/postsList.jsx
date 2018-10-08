import React, { Component } from 'react'

import * as _ from 'lodash'
import queryString from 'query-string'

import BoxPost from '../../commons/widgets/boxPost'
import Grid from '../../commons/layout/grid'


class PostsList extends Component {

    render() {
        const { filter } = this.props

        let posts = _.orderBy(this.props.posts, [this.props.order], ['desc'])

        if (filter) {
            const values = queryString.parse(filter)
            posts = posts.filter(post => post.category === values.category)
        }


        return (
            
            <Grid>
                
                {posts.map(post => {
                    return <BoxPost key={post.id}
                        post={post}
                        votePostUp={this.props.votePostUp}
                        votePostDown={this.props.votePostDown}
                        voteCommentUp={this.props.voteCommentUp}
                        voteCommentDown={this.props.voteCommentDown}
                        sendNewComment={this.props.sendNewComment} />
                }).filter((post) => !post.deleted)}
            </Grid>

        )
    }
}

export default PostsList