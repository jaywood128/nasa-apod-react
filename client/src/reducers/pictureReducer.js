export default function pictureReducer (state = {
  pictures: [], todaysPicture: {}, result: {}
}, action) {
  switch(action.type) {
    case 'PICTURE_LOADING' :
      return (
      //   {...state, 
      //   pictures: [...state.pictures, state.todaysPicture]}
      {...state}
      )
    case 'FETCH_TODAYS_PHOTO' : 
          
      return (
        {...state,
          todaysPicture: action.picture
        }
      )
    case 'ADDING_SEARCHED_PHOTO' : 
    debugger
      return (
        {...state,
          result: action.picture
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
