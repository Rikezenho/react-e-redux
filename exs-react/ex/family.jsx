import React from 'react'

export default props => (
  <div>
    <h1>Família {props.lastName}</h1>
    {/* {one child component only} */}
    {/* { React.cloneElement(props.children, {...props}) } */}

    {/* {multiple children components} */}
    { React.Children.map(props.children, child => React.cloneElement(child, {...props})) }
  </div>
)