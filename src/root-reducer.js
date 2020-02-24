import { combineReducers } from 'redux';
import { showPosts } from './components/home/reducer';

export const rootReducer = combineReducers(
  {showPosts}
)

