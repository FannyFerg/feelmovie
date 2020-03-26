import React from "react";

const Suggestion = props => {
	return (
		<div className="suggestion">
			<img src={props.Poster} />
			<p>{props.Title}</p>
		</div>
	);
};
export default Suggestion;