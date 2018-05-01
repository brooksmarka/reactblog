import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action){
  switch (action.type){
    case DELETE_POST
      return _.omit(state, action.payload);

    case FETCH_POST:
      //const post = action.payload.data;
      //const newState = { ...state };
      //newState[post.id] = post;
      //return newState;
      return { ...state, [action.payload.data.id]: action.payload.data };  //this line is same as commented lines above
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id'); //.mapKeys takes an array and the value you want to create as the key
    default:
      return state;
  }
}
