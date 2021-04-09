import React, { useState } from 'react'
import axios from 'axios'

const SubmitQuestionModal = () => {
  const [isActive, setIsActive] = useState(false)
  const [questionText, setQuestionText] = useState('')

  const submit = async () => {
    let author = await axios.get('/account/loggedUser')
    author = author.data
    axios.post('/api/questions/add', { questionText, author })
      .then(res => {
        setIsActive(false)
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }

  if (isActive) {
    return (
      <>
        <div className="box has-background-primary-light has-text-centered">
          <button className="button is-primary is-outlined">Submit Question</button>
        </div>
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title"> New Question </p>
              <button className="delete" aria-label="close" onClick={(e) => {setIsActive(false)}}></button>
            </header>
            <section className="modal-card-body">
              <div className="card">
                <textarea className="textarea" value = {questionText} onChange = {(e) => {setQuestionText(e.target.value)}}>
                </textarea>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick = {(e) => (submit())}> Add </button>
              <button className="button" onClick = {(e) => {setIsActive(false)}}>Cancel</button>
            </footer>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="box has-background-primary-light has-text-centered">
        <button className="button is-fullwidth is-primary is-outlined" onClick={(e) => setIsActive(true)}>Submit Question</button>
      </div>
    </>
  )
}

export default SubmitQuestionModal
