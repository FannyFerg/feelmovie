import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Nav from './Nav/Nav.js'

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
    const {id} = this.props;
    return (
      
      
<div className="detailsm">
 <Nav/>

 <h1>{movie.Title}</h1>

 <div className='propsmovie'>

    <div className='imgmovie'>
   <img src={movie.Poster} alt="" />
   </div>



    <section className='section'>
    <p>Résumé: {movie.Plot}</p>
    <p>Durée : {movie.Runtime}</p>
    <p>Awards : {movie.Awards}</p>
    </section>

    
    
  </div>
  <div className='retour'>
  <Link className="btn" to="/movies"> Retour</Link>
  </div>
  <div className="control">
 

          <button className="button is-info">
            +
          </button>
          <p>Ajouter à ma liste</p>
  </div>
  <div className='a'>OOOOOOO</div>
</div>
    
    )}}

    export default Moviedetails;