import React, { Component } from 'react'


import BoxPost from '../widgets/boxPost'
import Grid from '../layout/grid'


class DashBoardList extends Component {

    render(){
        console.log("PROPS DASHBOARDLIST == ", this.props)
        const posts = this.props.posts
        return (
            <Grid>
                {posts.map(post =>{
                    return <BoxPost key={post.id} post={post} votePostUp={this.props.votePostUp}/>
            })}
            </Grid>
            
        )
    }
}

export default DashBoardList