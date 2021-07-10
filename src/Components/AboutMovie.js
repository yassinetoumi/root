import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import details from './MovieList';
function About(){
    const params=useParams();
    const [onemovie,setonemovie]=useState(null) 
    useEffect(function(){
       let movie=details.find(mov=>mov.id==params.id)
       setonemovie(movie)
    },[])
    return (
        onemovie&&
    <div>
         <h1>{onemovie.description}</h1>
         <iframe width="560" height="315" src={onemovie.trailer}
         title="YouTube video player" frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
    </div>
    );
} 
export default About;