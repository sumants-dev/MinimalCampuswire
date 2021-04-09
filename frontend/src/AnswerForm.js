import React, { useState, useEffect} from 'react'
import axios from 'axios'

const AnswerForm = props => {
  const { id } = props
  const [answer, setAnswer] = useState('')

  const submitAnswer = () => {
    axios.post('api/questions/answer', { id, answer })
      .then(res => {
        setAnswer('')
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }
  return(
    <>
      <div>
        <textarea className="textarea" placeholder="Place your answer here" value = {answer} onChange = {(e) => setAnswer(e.target.value)}></textarea>    
        <button onClick = {(e) => {submitAnswer()}} className="button is-primary">Submit</button>
      </div>
  </>

  )
}

export default AnswerForm
