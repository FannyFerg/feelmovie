import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Movielist extends Component {
  state = {
    movies: [],
  }
  componentDidMount() {
    axios.get('http://localhost:5000/movies')
      .then(response => response.data)
      .then(data =>{console.log('data',data);
      this.setState({movies: data})
    })
      .catch(err => err => console.log(err))
  }
  render(){
    return (
      <div className="Movielist">
      <h1>SUGGESTIONS</h1>
<ul>
          {this.state.movies.map(movie => (
            <li key={movie._id}>
              <img src={movie.Poster} alt="" />
              <div>
                <strong><Link to={`/movies/${movie._id}`}>{movie.Title}</Link></strong>
              </div>
            </li>
          ))}
        </ul>
     </div>
    )}}

    export default Movielist;
