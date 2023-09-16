import React from 'react'

//params is a special type of props, that is automatcally passed by next for dynamic routing
const page = ({params}) => {
  const {id} = params;
  return (
    <div>Hello {id}</div>
  )
}

export default page
