import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [newQuestion, setNewQuestion] = useState(null)

  function handleFormSubmit(newQues) {
    setNewQuestion(newQues)
    setPage('List')
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onHandleSubmit={handleFormSubmit} /> : <QuestionList onSubmittedQuestion={newQuestion} />}
    </main>
  );
}

export default App;
