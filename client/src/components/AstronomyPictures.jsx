import React from 'react';

const AstronomyPictures = ({ pictures }) => (pictures.map(Picture))

const Picture = ({id, date, explanation, hdurl, media_type, title, url}) => {
  return (
  <div className="picture">
    <h3> id: {id} </h3> 
    <h3> date: {date} </h3> 
    <p> Explanation: {explanation} </p> 
    <h3> hdurl: {hdurl}</h3>
    <h3> media_type: {media_type} </h3>
    <h1> title: {title} </h1> 
    <img src={ url } />
  </div> 
  )
}


 export default AstronomyPictures


