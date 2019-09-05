import { id } from "postcss-selector-parser";

export function fetchTodaysPicture() {
  return (dispatch) => {
    
    dispatch({ type: 'PICTURE_LOADING'  });
    debugger 
    return fetch('/api/v1/astronomy_pictures/today')
      .then(resp => resp.json())
      .then(picture => dispatch({ type: 'FETCH_TODAYS_PHOTO', picture: picture }))
      .catch(error => console.log(error))
  }
}
