import { VOTE_UP_POST } from '../../utils/types'
import { votePost } from '../../utils/api'


export function votePostUp(post){
    debugger
    votePost(post.id,'upVote')
    return {
        type: VOTE_UP_POST,
        payload:post.id
    }
}