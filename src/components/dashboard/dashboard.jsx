import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchPosts, votePostUp, votePostDown, voteCommentUp, voteCommentDown } from './dashboradActions'
import Content from '../../commons/template/content'
import PostsList from '../post/postsList'
import ContentHeader from '../../commons/template/contentHeader'

class DashBoard extends Component {

    componentWillMount(){
        this.props.fetchPosts()
    }

    render() {
        const { posts } = this.props
        
        return (
            <div>
                <ContentHeader title='Home' small='Recent Posts' />
                <Content>
                    <PostsList  posts={posts} 
                                    votePostUp={this.props.votePostUp} 
                                    votePostDown={this.props.votePostDown} 
                                    voteCommentUp={this.props.voteCommentUp}
                                    voteCommentDown={this.props.voteCommentDown}/>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({posts: state.dashboard.posts})
const mapDispatchToProps = dispath => bindActionCreators({fetchPosts, votePostUp, votePostDown, voteCommentUp,voteCommentDown},dispath)
export default connect(mapStateToProps,mapDispatchToProps)(DashBoard)