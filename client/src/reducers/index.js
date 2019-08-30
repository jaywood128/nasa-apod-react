import  pictureReducer  from './pictureReducer'
import commentsReducer from './commentsReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  pictures: pictureReducer,
  comments: commentsReducer
});

export default rootReducer