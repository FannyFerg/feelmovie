import React, { Component } from 'react'
import axios from 'axios';
import Suggestion from './Suggestion.js';

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`http://localhost:5000/search`)
      .then(response => response.data)
      .then(data => {
        console.log('data',data);
        this.setState({ results: data });
  })
    .catch(err => err => console.log(err))
  }


  handleInputChange = (event) => {
    this.setState({
        query: event.target.value
      }, () => {
        if (this.state.query && this.state.query.length > 1) {
          this.getInfo()
        } 
      }
    )
  }

  // searchFilterMovie(movie) {
  //   return movie.Title
  //     .toLowerCase()
  //     .includes(this.state.handleInputChange.toLowerCase());
  // }

  render() {
    return (
      <div>
      <form>
        <input
          placeholder="Film recherché..."
          onChange={event => this.handleInputChange(event)}
        />
         {/* <Suggestion results={this.state.results} /> */}
      </form>
      {this.state.results
        .filter(this.searchFilterMovie.bind(this))
        .map(movie => {
          return (
            <Suggestion
              key={movie._id}
              name={movie.Title}
            
            />
          );
         })}</div>
    )
  }
 }
 
 export default Search


// class Publication extends Component {
//   state={
//     recherche:'',
//     movies: [],
//   }


//   componentDidMount() {
//     axios.get('http://localhost:5000/movies')
//       .then(response => response.data)
//       .then(data =>{console.log('data',data);
//       this.setState({movies: data})
//     })
//       .catch(err => err => console.log(err))

//   }
//   handleChange = (event)=>{
//     this.setState({recherche:event.target.value});
//   }

//   render(){
//    () =>{

//       var movies = this.props.items;
//       var recherche = this.state.recherche.trim().toLowerCase();

//       if(recherche.length > 0){
//         movies = movies.filter(function(movie){
//           return movie.name.toLowerCase().match( recherche );
//         });
//       }
//     }

//     return (
//       <div className='Search'>
//         <input type="text" value={this.state.recherche} onChange={this.handleChange} placeholder="Search!" />
//         <ul>
//           { movies.map(function(movie){ return <li key={movie._id}>{movie.Title} </li> }) }
//         </ul>
//       </div>
//     )
//   }}

//   export default Publication;