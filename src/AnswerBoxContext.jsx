import React, { createContext, useState, useEffect } from "react";

const AnswerBoxContext = createContext();
function AnswerBoxProvider({ children }) {
  
  const obj = { id: null, answer: "", isOpened: false, findMode: false };
  
  const localData = localStorage.getItem("localQuizData");
  let localQuizArray = [];
  if (localData) {
      localQuizArray = (JSON.parse(localData));
   }
  const [answerBoxOpen, setAnswerBoxOpen] = useState(obj);
  const [quizData, setQuizData] = useState(localQuizArray || {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
  });

  useEffect(() => {
    localStorage.setItem("localQuizData", JSON.stringify(quizData));
  }, [quizData]);

  const handleQuizData = (e) => {
    const { name, value } = e.target;
    setQuizData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleAnswerBox = (id) => {
    setAnswerBoxOpen((item) => ({ ...item, id: id, isOpened: !item.isOpened }));
  };

  const toggleFindMode = () => {
    setAnswerBoxOpen((item) => ({ ...item, findMode: !item.findMode }));
  };

  return (
    <AnswerBoxContext.Provider
      value={{
        answerBoxOpen,
        toggleAnswerBox,
        toggleFindMode,
        handleQuizData,
        quizData,
      }}
    >
      {children}
    </AnswerBoxContext.Provider>
  );
}

export { AnswerBoxContext, AnswerBoxProvider };
