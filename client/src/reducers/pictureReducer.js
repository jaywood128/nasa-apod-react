export default function pictureReducer (state = {
  pictures: [], todaysPicture: {}
}, action) {
  switch(action.type) {
    case 'PICTURE_LOADING' : 
      return (
        {...state, 
        pictures: [...state.pictures, state.todaysPicture]}
      )
    case 'FETCH_TODAYS_PHOTO' : 
     
      return (
        {...state,
          todaysPicture: action.picture
        }
      )
      debugger
    case 'FETCH_LAST_THIRTY_DAYS' : 
   
      return (
        {...state,
        pictures: [
          ...state.pictures,
          action.pictures
        ]
        }
    )
  default: 
    return state;
  }

}
