import React from 'react';
import Picture from './Picture'
const AstronomyPictures = ({ pictures }) => (pictures.map(((picture, index) => <Picture picture ={picture} key={index} /> ))) 


 export default AstronomyPictures


