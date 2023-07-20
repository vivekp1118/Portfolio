const answers = [
    "INFJ",
    "PEOPLE",
    "Enigmatic",
    "STOIC",
    "renaissance person",
    "Sponteaneous",
    "solitary",
  ];
export const checkAns = (answersToCheck) => {
    console.log(answersToCheck);
    let totalCorrectAnswer = 0;
    answers.forEach((answer, index) => {
      const lowerCaseAnswer = answer.toLowerCase();
      const lowerCaseAnswerToCheck = answersToCheck[index+1].toLowerCase();
      console.log(lowerCaseAnswer, lowerCaseAnswerToCheck); 
      if(lowerCaseAnswer === lowerCaseAnswerToCheck) totalCorrectAnswer++;
      
    })
    return totalCorrectAnswer;
}

