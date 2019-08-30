export default function commentsReducer (state = {
  pictures: []
}, action) {
  switch(action.type) {
    case 'ADD_COMMENT' : 
              return state 
  default: 
    return state;
  }

}


