import React, { Component } from 'react'
import axios from 'axios';

class Moviedetails extends Component {
  state = {
    movie:{}
  }

  componentDidMount() {
  
    

    axios.get(`http://localhost:5000/movies/${this.props.match.params.id}`)
    .then(response => response.data)
    .then(data =>{console.log('data',data);
    this.setState({movie: data})
  })
    .catch(err => err => console.log(err))

  }
  render(){
    const movie = this.state.movie;
    console.log(this.props)
    return (
      
<div className="detailsm">

<img src={movie.Poster} alt="" />
   <div>
   <h1>{movie.Title}</h1>
   <h2>Director: {movie.Director}</h2>
   </div>

    <section>
    <p>Resum: {movie.Plot}</p>
    <p>Duration : {movie.Runtime}</p>
    <p>Awards : {movie.Awards}</p>
    </section>
</div>
    
    )}}

    export default Moviedetails;