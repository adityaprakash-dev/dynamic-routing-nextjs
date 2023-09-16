'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'


const page = ({params}) => {
  const {id} = params;
  const [user, setuser] = useState(null);

  const getData = async () => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    setuser(data)
  }

  useEffect(() => {
    getData();
  }, [])
  
  return(
    <>
    {user ? 
    
    <>
    <p>{user.name}</p> 
    <p>Email: {user.email}</p>
    </>
    
    : "loading"}
    </>
  )
  
}

export default page
