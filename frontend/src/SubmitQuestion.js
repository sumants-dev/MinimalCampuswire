import React, { useState, useEffect } from 'react'
import SubmitQuestionModal from './SubmitQuestionModal'
const SubmitQuestion = (props) => {
  const { isLogin } = props

  if (!isLogin) {
    return (
      <>
        <div className='box has-background-primary-light has-text-primary has-text-centered'>
          Please Login to submit questions
        </div>
      </>
    )
  } else {
    return (
      <>
        <SubmitQuestionModal/>
      </>
    )
  }
}

export default SubmitQuestion
