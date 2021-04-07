import React, { useState, useEffect} from 'react'
import axios from 'axios'

const Homepage = () => {
  const [postData, setPostData] = useState([])
  useEffect(async () => {
    const { data } = await axios.get('/api/questions')
    console.log(data)
    setPostData(data)
  }, [])

  return (
    <>
      <div className='columns'>
        <div className='column'>
          <h1 className='is-size-2'> Q1 </h1> <br></br>
          <h1> Q1 </h1> <br></br>
        </div>
        <div className='column is-four-fifths is-size-2'>
          <h1> Hello </h1>
        </div>
      </div>
    </>
  )
}

export default Homepage
