import React from 'react'

const page = ({params}) => {
  const {id} = params;
  return (
    <div>Hello {id}</div>
  )
}

export default page
