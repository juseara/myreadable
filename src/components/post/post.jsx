import React, { Component } from 'react'
import Content from '../../commons/template/content'
import ContentHeader from '../../commons/template/contentHeader'
const $ = require('jquery');

class Post extends Component {

    componentDidMount(){
     
    }
    render() {
        return (
            <div>
                <ContentHeader title='New' small='Post' />
                <Content>

                    <div className="box box-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">Compose a new posting</h3>
                        </div>

                        <div className="box-body">
                            <div className="form-group">
                                <input className="form-control" placeholder="Title" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Author" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Author" />
                            </div>
                            <div className="form-group">
                                <textarea id="compose-textarea" placeholder="body" className="form-control" defaultValue="" style={{height: 100}}>

                                </textarea>
                            </div>
                            
                        </div>

                        <div className="box-footer">
                            <div className="pull-right">
                                <button type="submit" className="btn btn-primary"><i className="fa fa-envelope-o"></i> Publish</button>
                            </div>
                        </div>

                    </div>
                </Content>
                
            </div>
        )
    }
}

export default Post