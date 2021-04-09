import React, { useState, useEffect} from 'react'
import AnswerForm from './AnswerForm'

const Post = props => {
  const { currQuestion, isLogin } = props

  const answerForm = () => {
    if (isLogin) {
      return(
        <>
          <AnswerForm id = {currQuestion._id}/>
        </>
      )
    } else {
      return(
      <>
      </>
    )}
  }

  const post = () => {
    if (currQuestion !== undefined) {
      return (<>
        <div className='card'>
          <div className='card-header'>
            <div className='card-header-title'>
              Q: {currQuestion.questionText}
            </div>
          </div>
          <div className='card-content'>
            <div className='content'>
              Author: {currQuestion.author} <br></br>
              <p> {currQuestion.answer} </p> <br></br>
              { answerForm() }
            </div>
          </div>
        </div>
      </>)
    } else {
      return(
        <>
        </>
      )
    }
  }

  return (
    <>
      {post()}
    </>
  )
}

export default Post
