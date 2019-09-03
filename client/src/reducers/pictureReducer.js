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
