import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {
  const [question, setQuestion] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(res => res.json())
      .then(data => setQuestion(data))
  }, [])
  function handleDelete(deletedQuestion) {
    const newList = question.filter(ques => ques.id !== deletedQuestion.id)
    setQuestion(newList)
  }

  function handleChange(updatedQuestion) {
    const newItems = question.map(ques =>
      ques !== updatedQuestion ? ques : updatedQuestion)
    setQuestion(newItems)

  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{question ? question.map((ques) => <QuestionItem key={ques.id} question={ques} onHandleDelete={handleDelete} onHandleChange={handleChange} />) : <p>Loading...</p>}</ul>
    </section>
  );
}

export default QuestionList;
