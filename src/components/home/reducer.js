import {
  POST_FETCHED} from '../../constants'

const initialState = {
  posts: []
}
export const showPosts = (state = initialState, action) => {
  switch(action.type){
      case POST_FETCHED:
        return { ...state, posts: action.payload.posts }
      default:
        return state;
  }
}