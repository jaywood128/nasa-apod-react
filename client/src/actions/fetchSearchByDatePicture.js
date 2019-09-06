export function fetchSearchByDatePicture (date) {
  debugger 
  return (dispatch) => {
    dispatch({type: "SEARCH_LOADING"})

    return fetch('/api/v1/search')
      .then(response => response.json)
      .then( picture => dispatch({type: 'ADDING_SEARCHED_PHOTO', picture: picture}))
      .catch( error => console.log(error))
  }
}