//this is the main page.js
'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Page = () => {
  const [users, setusers] = useState([]);
  
  const getData = async () =>{
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
      setusers(data);
  }


  const renderData = (data) => {
    return(
      <ul>
        {data.map((e) => (
          <li>{e.name} --- <a href={`/${e.id}`}>explore</a></li>

        ))}
      </ul>
    )
  }

  
  return (
    <div className='p-5'>
      
      <button 
      onClick={getData}
      className='bg-slate-950 text-white px-6 py-2 rounded-lg'
      >Get Data</button>
      
      <div className='mt-5 text-black'>
        {users.length > 0 ? renderData(users) : "Data not fetched yet"} 
      </div>
    </div>
  )
}

export default Page


