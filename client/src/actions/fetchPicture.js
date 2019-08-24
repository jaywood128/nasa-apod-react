export function fetchPicture() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_PICTURE_REQUEST' });
    return fetch('/api/v1/astronomy_pictures', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      } 
    });
  }
}