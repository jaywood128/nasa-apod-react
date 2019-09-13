export function fetchLastThirtyDays() {
  return (dispatch) => {
    
    dispatch({ type: 'PICTURE_LOADING'  });
    debugger 
    return fetch('/api/v1/load')
      .then(resp => resp.json())
      .then(pictures => dispatch({ type: 'FETCH_LAST_THIRTY_DAYS', pictures }))
      .catch(error => console.log(error))
  }
}