const MyQuestions = [
  {
    question: "What is my name?",
    a: "Josmar",
    b: "Jose",
    c: "Juan",
    d: "Santiago",
    correct: "1",
  },
  {
    question: "What is my prefer  programming language?",
    a: "JavaScript",
    b: "Php",
    c: "C#",
    d: "Phyton",
    correct: "1",
  },
  {
    question: "Where am i from?",
    a: "Argentina",
    b: "Colombia",
    c: "Venezuela",
    d: "Chile",
    correct: "3",
  },
  {
    question: "What do i like more?",
    a: "Study",
    b: "Play Games",
    c: "Sleep",
    d: "Eat",
    correct: "2",
  },
];

const quizzEl = document.getElementById('quizz');
const questionEl = document.getElementById('question');
const answersEls = document.querySelectorAll('.answers');
const one_text = document.getElementById('one_text');
const two_text = document.getElementById('two_text');
const three_text = document.getElementById('three_text');
const four_text = document.getElementById('four_text');
const changeEl = document.getElementById('change');

let currentQuestion = 0;
let score = 0;
//call every time i call submit
loadQuizz()

function loadQuizz() {
  deselectedAnswer();
  //My current question in a variable
const currentQuestionData = MyQuestions[currentQuestion];

//edit my question and answers
questionEl.innerText = currentQuestionData.question;
one_text.innerText = currentQuestionData.a;
two_text.innerText = currentQuestionData.b;
three_text.innerText = currentQuestionData.c;
four_text.innerText = currentQuestionData.d;
 
  
}

function getSelected() {


let answer = undefined;
answersEls.forEach((answerEl) => {
  if (answerEl.checked) {
    answer =  answerEl.id;
  }
})
return answer;
}
function deselectedAnswer() {
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answerEl.checked = false;
    }
  })
}

changeEl.addEventListener('click', () => {

  const answer = getSelected();
  console.log(answer);
  if (answer) {
          if (answer === MyQuestions[currentQuestion].correct) {
        score++;
      }
    currentQuestion++;
      if (currentQuestion < MyQuestions.length) {
    //change every time ^
    loadQuizz();
   
  } else {
    //show results
    quizzEl.innerHTML = `<h3>Your scored is ${score}/${MyQuestions.length}</h3>`
  }
  }


})