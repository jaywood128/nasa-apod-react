import { id } from "postcss-selector-parser";

export function fetchPicture(date) {
  return (dispatch) => {
    
    dispatch({ type: 'PICTURE_LOADING'  });
   
    return fetch(`/api/v1/astronomy_pictures/${date}`)
      .then(resp => resp.json())
      .then(picture => dispatch({ type: 'FETCH_TODAYS_PHOTO', picture: picture }))
      .catch(error => console.log(error))
  }
}
