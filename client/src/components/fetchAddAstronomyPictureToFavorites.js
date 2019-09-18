export function fetchAddAstronomyPictureToFavorites(date) {
  
  // return (dispatch, date) => {
  //   dispatch({ type: 'FAVORITE_LOADING'  });
    debugger 
    return fetch(`/api/v1/add_picture_to_favorites/${date}`)
      .then(resp => resp.json())
      .then(picture => console.log(picture))
      .catch(error => console.log(error))
  }
// }