outputQuiz=document.querySelector('#output-quiz');
quizInput=document.querySelector('.quiz-input');
userForm=document.querySelector('#user-form');

const correctAnswers = ["90°", "right angled"]; 

quizInput.addEventListener('click',calculateScore)

function calculateScore() {
    let score=0;
    let index=0; 
    const data = new FormData(userForm);
    for(let value of data.values()) {
        if(value === correctAnswers[index]) {
            score=score+1;
        }
        index=index+1;
    }
    outputQuiz.textContent=`your score is ${score}`; 
    console.log(score)
  
}
