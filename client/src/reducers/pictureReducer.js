export default function pictureReducer (state = {
  pictures: []
}, action) {
  switch(action.type) {
    case 'FETCH_TODAYS_PHOTO' : 
     
      return (
        {...state,
          pictures: [
            ...state.pictures,
            action.picture
          ]
      }
      )
  default: 
    return state;
  }

}
