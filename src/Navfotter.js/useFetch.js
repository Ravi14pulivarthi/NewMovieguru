import React, { useState,useEffect } from 'react'

function useFetch(url) {
  const[data,setdata]=useState([])
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdata(data.data));
  },[]);

  return (data);
}

export default useFetch