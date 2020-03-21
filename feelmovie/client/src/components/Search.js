import React, { Component } from 'react'
import axios from 'axios';
import Suggestion from './Suggestion.js';

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`http://localhost:5000/movies`)
    .then(response => response.data)
    .then(data =>{console.log('data',data);
    this.setState({movies: data})
  })
    .catch(err => err => console.log(err))
  }


  handleInputChange = () => {
    this.setState({
      query: this.search.value
    },() => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    }
  )
  }
 
  render() {
    return (
      <form>
        <input
          placeholder="Film recherché..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
         <Suggestion results={this.state.results} />
      </form>
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