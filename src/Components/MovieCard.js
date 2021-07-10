import React from 'react';
import { BrowserRouter as Router ,Link } from 'react-router-dom';

class MovieCard extends React.Component {
    constructor(props) {
      super(props);
      }
      
    render() {
      const { title, description, rate, posterURL,id} = this.props.movie;
     
  
      return (
        <div className="info">
        <figure>
          <img src={posterURL} />
        
            <h4>{title}</h4>
            <h4>{description.join(' ')}</h4>
            <h4>{rate}</h4>
            <Router><Link to={`/home/${id}`} className="seemore"> <button  >Watch the trailer</button> </Link></Router>
               

            </figure>
           
       
        </div>
      );
    }
  }
  export default MovieCard;