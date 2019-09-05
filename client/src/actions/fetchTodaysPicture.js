export function fetchTodaysPicture() {
  return (dispatch) => {
    
    dispatch({ type: 'PICTURE_LOADING'  });
   
    return fetch('/api/v1/astronomy_pictures/today')
      .then(resp => resp.json())
      .then(picture => dispatch({ type: 'FETCH_TODAYS_PHOTO', picture }))
      .catch(error => console.log(error))
  }
}