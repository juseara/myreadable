import React, { Component } from 'react'
import * as UUID from "node-uuid"

import imagemDefault from '../../../commons/img/default_user.png'
class CommentForm extends Component {
    constructor(props){
        super(props)
        this.state = { author: '', body: '' }

        this.onSendComment = this.onSendComment.bind(this)
        this.keyHandler = this.keyHandler.bind(this)
        
        this.handleChangeAuthor = this.handleChangeAuthor.bind(this)
        this.handleChangeBody = this.handleChangeBody.bind(this)
    }

    keyHandler(e)
    {
        if(e.key === 'Enter'){
            if(!this.state.body)
            {
                return
            }

            
            this.onSendComment()
        }
    }

    onSendComment()
    {
        const { author, body } = this.state;
        const  newComment = {
            author:author ||'Anonymous',
            body:body,
            id: UUID.v4(),
            timestamp: Date.now(),
            parentId: this.props.parentId,
            voteScore: 1
          }

        this.props.sendNewComment(newComment)
        this.setState({author:'',body:''})
    }

    handleChangeAuthor(e)
    {
        this.setState({author:e.target.value})
    }

    handleChangeBody(e)
    {
        this.setState({body:e.target.value})
    }

    render() {
        const { parentId } = this.props
        return (
            <div className="box-footer" >
                <form role='form' onKeyUp={this.keyHandler}>
                    <img className="img-responsive img-circle img-sm" src={imagemDefault} alt="Alt Text" />

                    <div className="img-push">
                        <input type="text" required value={this.state.author} onChange={this.handleChangeAuthor} className="form-control input-sm input-comment input-author-comment" name='author' component='input' placeholder="Author name" />
                    </div>
                    <div className="img-push">
                        <input  required value={this.state.body} onChange={this.handleChangeBody} type="text" className="form-control input-sm input-comment"  name='body' component='input' placeholder="Press enter to post comment" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentForm