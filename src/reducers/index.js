import { combineReducers } from 'redux'
import githubReducer from './github'

const reducer = combineReducers({
  github: githubReducer,
});

export default reducer