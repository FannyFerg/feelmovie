import React, { Component } from "react";
import axios from "axios";
import Suggestion from "./Suggestion.js";


class Search extends Component {
	state = {
		query: "",
		results: []
	};
	getInfo = () => {
		axios
			.get(`http://localhost:5000/search`)
			.then(response => response.data)
			.then(data => {
				console.log("data", data);
				this.setState({ results: data });
			})
			.catch(err => err => console.log(err));
	};
	handleInputChange = event => {
		this.setState(
			{
				query: event.target.value
			},
			() => {
				if (this.state.query.length > 1) {
					this.getInfo();
				}
				else{

					this.setState({results:[]})
				}
			}
		);
	};
	render() {
		return (
			<div className='search'>

			<div>
			<p> Partagez un film sur votre mur </p>
			</div>

				<form>
					<input
						placeholder="Film recherché..."
						onChange={event => this.handleInputChange(event)}
					/>
				</form>
				{this.state.results
					.filter(movie => movie.Title.includes(this.state.query))
					.map(movieItem => {
						return (
							<Suggestion
								key={movieItem._id}
								Title={movieItem.Title}
								Poster={movieItem.Poster}
							/>
						);
					})}
			</div>
		);
	}
}
export default Search;


