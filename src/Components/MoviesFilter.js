import React, { useState } from 'react';
import MovieCard from './MovieCard';
import mov from './MovieList';


function strip(title) {
  return title.replace(/^(a|an|the)\s/i, "");
}

function MoviesFilter () {
  const [value, setValue] = useState("Sort")
    const [movies, setMovies] = useState(mov,[])
    const handleSubmit= (e) => {
      
      
          switch (value) {
            case "High rating":
                setMovies({
                  movies: movies.sort((a, b) => (b.rate > a.rate ? 1 : -1))
                });
                break;
            case "Low rating":
              setMovies({
                movies: movies.sort((a, b) => (a.rate > b.rate ? 1 : -1))
              });
              break;
            case "A-Z":
              setMovies({
                movies: movies.sort(
                  (a, b) => (strip(a.title) > strip(b.title) ? 1 : -1)
                )
              });
              break;
            default:
              setMovies({
                movies: movies
              })
              break;
            
          }
          
          e.preventDefault();
      
      };   
    return (
      <div>
            <header>
                <div className="container">
                    <div className="inner-content">
                        <div className="nav-links">
                        <form onSubmit={handleSubmit}>
                                <select  value={value} onChange={e => setValue(e.target.value)}>
                                    <option value="Sort">Sort</option>
                                    <option value="Low rating">Low rating</option>
                                    <option value="High rating">High rating</option>
                                    <option value="A-Z">A-Z</option>
                                 </select>
                            <input type="submit" value="Filter" />
                            </form>
                        </div>
                    </div>
                </div>
             </header>
        <section>
          {mov.map(m => <MovieCard movie={m} />)}
        </section>
      </div>
    );
    }
  
  export default MoviesFilter;