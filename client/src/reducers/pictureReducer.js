export default function pictureReducer (state = {
  pictures: []
}, action) {
  switch(action.type) {
    case 'FETCH_TODAYS_PICTURE' : 
      return state.pictures 
  
  default: 
    return state;
  }

}