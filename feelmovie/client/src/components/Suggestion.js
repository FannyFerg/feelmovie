import React from 'react'

const Suggestion = (props) => {
  // const options = props.results.map(r => (
  //   <li key={r.id}>
  //     {r.Title}
  //   </li>
  // ))
  return <ul>{props.results}</ul>
}

export default Suggestion