import React from 'react';
import json from '../movies.json';

class Addmovie extends React.Component {
  state ={
    movies: json,
    chart:[]
  }
  
  handleQuery = (ev) => {
    this.setState({
      query: ev.target.value
    })
  }

  addToChart = (newItem) => {
    const chartCopy = [...this.state.chart];

    //
    // 1. search the presence of already present newItem
    //    - if found: splice it, make a copy, add qty to previous one, push it
    //    - otherwise, push it
    //

    const itemIndex = this.state.chart.findIndex(item => item.id === newItem.id)
    if (itemIndex >= 0) {
      chartCopy.splice(itemIndex, 1);
      const itemCopy = {...this.state.chart[itemIndex]}
      itemCopy.qty += newItem.qty;
      chartCopy.push(itemCopy);
    } else {
      chartCopy.push(newItem)
    }

    this.setState({
      chart: chartCopy
    })
  }


  render() {
    let movies = this.state.movies;
    const query = this.state.query;

    if (query) {
      movies = movies.filter(movie => movie.name.includes(query))
    }
    return (

      <div className='addmovies'>
       <h2>Liste</h2>

        <ul>
        {this.state.chart.map(item => {
          const movie = movies.find(movie => movie.id === item.id)
          return (
            <li key={item.id}>
              {movie.Poster} 
              {movie.Title} 
            </li>
          )
        })}
        </ul>
    </div>
    )
  }}

  export default Addmovie; 
