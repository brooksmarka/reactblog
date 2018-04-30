import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action){
  switch (action.type){
    case FETCH_POST:
      
      return { ...state, [action.payload.data.id]: action.payload.data };  //this line is same as commented lines above
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id'); //.mapKeys takes an array and the value you want to create as the key
    default:
      return state;
  }
}
