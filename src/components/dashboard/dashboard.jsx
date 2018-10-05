import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchPosts } from './dashboradActions'
import Content from '../../commons/template/content'
import DashBoardList from '../../commons/list/dashboardList'
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
                    <DashBoardList posts={posts} />
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({posts: state.dashboard.posts})
const mapDispatchToProps = dispath => bindActionCreators({fetchPosts},dispath)
export default connect(mapStateToProps,mapDispatchToProps)(DashBoard)