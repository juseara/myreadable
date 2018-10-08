import { reset as resetForm } from 'redux-form'
import * as UUID from "node-uuid"

import {    FETCH_POSTS, 
            VOTE_UP_POST, 
            VOTE_DOWN_POST,
            VOTE_UP_COMMENT, 
            VOTE_DOWN_COMMENT, 
            ADD_NEW_POST,
            GO_TO_DASHBOARD,
            DELETE_POST,
            DELETE_COMMENT } from '../../utils/types'

import { getPosts, getComments, votePost, voteComment, addPost, addComment, removePost, removeComment } from '../../utils/api'

export function  fetchPosts(){
    return dispatch => {
        new Promise(resolve=>{
            getPosts()
            .then(posts=>{
                resolve(posts.map(post=> {
                    return getComments(post.id).then(comments => {return {...post,comments:comments}})
                }))
                
            })
        })
        .then(allPromise =>{
             Promise.all(allPromise).then(result=>{
                dispatch( {
                    type: FETCH_POSTS,
                    payload: result
                })
            })
        })
    }
    
}

export function votePostUp(post){
    votePost(post.id,'upVote')
    return {
        type: VOTE_UP_POST,
        payload:post.id
    }
}

export function votePostDown(post){    
    votePost(post.id,'downVote')
    return{
        type: VOTE_DOWN_POST,
        payload:post.id
    }
}

export function voteCommentUp(comment){
    voteComment(comment.id,'upVote')
    return {
        type: VOTE_UP_COMMENT,
        payload:comment
    }
}

export function voteCommentDown(comment){
    voteComment(comment.id,'downVote')
    return {
        type: VOTE_DOWN_COMMENT,
        payload:comment
    }
}

export function sendNewPost(values){

   
    
    return dispath =>{
        console.log("NEW POST == ", values)
        const {title, author, body, category} = values
        let newPost = {
            id: UUID.v4(),
            timestamp: Date.now(),
            category,
            title,
            author,
            body
          }
        addPost(newPost)
        dispath(resetForm('postForm'))
        dispath(goToDashboard(true))
    }
    
}

export function addNewPost(post){
    return {
        type: ADD_NEW_POST,
        payload: {...post, commentCount: 0,voteScore: 1}
    }    
}

export function sendNewComment(comment){
    return dispatch =>{
        addComment(comment).then(_=>{
            dispatch(fetchPosts())
        })
    }
}

export function goToDashboard(value){
    return {
        type: GO_TO_DASHBOARD,
        payload:value
    }
}

export function deletePost(id){
    removePost(id)
    return{
        type: DELETE_POST,
        payload:id
    }
}

export function deleteComment (id, parentId) {
    removeComment(id)
    return {
      type: DELETE_COMMENT,
      payload:{ id, parentId }
    }
  }