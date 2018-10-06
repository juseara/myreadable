import React, { Component } from 'react'


import BoxPost from '../../commons/widgets/boxPost'
import Grid from '../../commons/layout/grid'


class PostsList extends Component {

    render(){
        console.log("PROPS DASHBOARDLIST == ", this.props)
        const posts = this.props.posts
        return (
            <Grid>
                {posts.map(post =>{
                    return <BoxPost     key={post.id} 
                                        post={post} 
                                        votePostUp={this.props.votePostUp} 
                                        votePostDown={this.props.votePostDown} 
                                        voteCommentUp={this.props.voteCommentUp}
                                        voteCommentDown={this.props.voteCommentDown}/>
            })}
            </Grid>
            
        )
    }
}

export default PostsList