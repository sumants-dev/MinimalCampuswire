import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post'
import SubmitQuestion from './SubmitQuestion'
import Navbar from './Navbar'
const Homepage = () => {
  const [postData, setPostData] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [currIdx, setCurrIdx] = useState(0)

  useEffect(() => {
    const intervalID = setInterval(async () => {
      const { data } = await axios.get('/api/questions')
      const loginStatus = await axios.get('/account/loggedUser')
      setLoggedIn(loginStatus.data !== '' && loginStatus.data !== null)
      setPostData(data)
    }, 2000)
    return () => clearInterval(intervalID)
  }, [])

  const listOfQuest = postData.map((item, idx) => {
    return (
      <>
        <div className='box' onClick={(e) =>{setCurrIdx(idx)}} key={idx}>
          {item.questionText}
        </div>
      </>
    )
  })

  return (
    <>
      <Navbar isLogin={loggedIn} />
      <div className='columns'>
        <div className='column'>
          <SubmitQuestion isLogin={loggedIn} />
          {listOfQuest}
        </div>
        <div className='column is-three-fifths is-size-2'>
           <Post currQuestion = {postData[currIdx]} isLogin = {loggedIn}></Post>
        </div>
      </div>
    </>
  )
}

export default Homepage
