export function fetchAddAstronomyPictureToFavorites(date) {
  debugger
  // return (dispatch, date) => {
  //   dispatch({ type: 'FAVORITE_LOADING'  });
    debugger 
    return fetch(`/api/v1/add_picture_to_favorite/*${date}`)
      .then(resp => resp.json())
      .then(picture => console.log(picture))
      .catch(error => console.log(error))
  }
// }