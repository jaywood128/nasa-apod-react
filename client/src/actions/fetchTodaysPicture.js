export function fetchTodaysPicture() {
  return (dispatch) => {
    
    dispatch({ type: 'PICTURE_LOADING'  });
    debugger
    return fetch('/api/v1/astronomy_picture/1', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      } 
    .then(response => response.json())
      .then(picture => dispatch({ type: 'FETCH_TODAYS_PHOTO', picture }))
  });
}
}