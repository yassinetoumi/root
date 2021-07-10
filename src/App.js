import React from 'react';
import { BrowserRouter as Router ,Link, Route } from 'react-router-dom';
import MoviesFilter from './Components/MoviesFilter';
import About from './Components/AboutMovie';
class App extends React.Component {
  
  render() {  
 
    return (
      <div>
        <nav className="navbar navbar-light">
        <Router>
            <li><Link to="/home">Home</Link></li>
 
           <Route path ="/home" component={MoviesFilter} exact/>
      
           <Route path="/home/:id" component={About}/>
           </Router>
           </nav>
      </div>
    );
  }
}

export default App;