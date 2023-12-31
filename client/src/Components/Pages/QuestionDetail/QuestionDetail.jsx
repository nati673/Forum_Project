import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AnswerQuestion from "../../Pages/AnsQ/AnsQ";
import Answer from "../../Pages/Answer/Answer";
import "./QuestionDetail.css";

function QuestionDetail() {
  let params = useParams();
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);
  const questionByPostId = async () => {
    try {
      const question = await axios.get(
        `http://localhost:4000/api/question/${params.id}`
      );
      setQuestion(question.data.data);
    } catch (err) {
      console.log("problem", err);
    }
  };
  const answersByQuestionId = async () => {
    try {
      const answersRes = await axios.get(
        `http://localhost:4000/api/answer/${question?.question_id}`
      );
      setAnswers(answersRes.data.data);
    } catch (err) {
      console.log("problem", err);
    }
  };
  useEffect(() => {
    questionByPostId();
    answersByQuestionId();
  }, [question?.question_id]);

  return (
    <div className="form">
      <div className="container">
        <div className="form_question">
          <div>
            <h3>Question</h3>
            <h5>{question?.question}</h5>
            <p>{question?.question_description}</p>
          </div>
          <hr />
          <div>{answers.length > 0 && <h3>Answer From The Community</h3>}</div>
          {answers.map((answer) => (
            <div key={answer.answer_id}>
              <Answer answer={answer.answer} userName={answer.user_name} />
            </div>
          ))}

          <AnswerQuestion questionId={question?.question_id} />
         
        </div>
   
      </div>
    </div>
  );
}

export default QuestionDetail;
