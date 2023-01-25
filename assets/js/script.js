
let startButton = document.getElementById("startBtn");
let questionContainerEl = document.getElementById("questionCard");
let questionEl = document.getElementById("question");
let answerBtnsEl = document.getElementById("answerBtns");
var currentQuestion = 0;
let score = 0;
let currentScoreEl = document.getElementById('currentScoreSpan');
let endGameEl = document.querySelector('.endGame');
let viewScoresButton = document.getElementById('scoreViewer');
let submitScoreButton = document.getElementById('scoreSaver');
let firstContainerEl = document.querySelector('.container');
let formEl = document.querySelector('.input-group');
let playAgainBtnEl = document.getElementById('playAgainButton');
let orderedListEL = document.getElementById('highScoreList');
let endScoreEl = document.getElementById('endScoreSpan');
let dingEl = document.getElementById('correctAudio')
let corkEl = document.getElementById('corkAudio')
let songEl = document.getElementById('song')
let timeLeft = 185;



// let scoreGroup =[{
//   name:
//   score:
// }]





//Start Game button function
startButton.addEventListener("click", startGame)

function startGame(){
  startButton.classList.add("hide")
  questionContainerEl.classList.remove("hide")
  displayQuestion(currentQuestion)
  songEl.volume = 0.6;
  songEl.play()
  corkEl.play()
  let downloadTimer = setInterval(function(){
    if(timeLeft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Finished!";
      endGame();
    } else {
      document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
    }
    timeLeft -= 1;
    }, 1000);
}


//Function for choosing an answer
let chosenAnswer = document.getElementById("btn1","btn2","btn3","btn4")
console.log(chosenAnswer)

function chooseAnswer(event){
  console.log(event.target)
  let correctAnswer = questions[currentQuestion].correctAnswer
  if(event.target.textContent == correctAnswer) {
    console.log("correct!")
    score+=50
    currentScoreEl.textContent=score
    //play ding
    dingEl.play()
  }
  else {
    console.log("wrong!")
    corkEl.play()
  }
  currentQuestion++
    if(currentQuestion >= questions.length) {
      endGame();
    }
    else {
      displayQuestion(currentQuestion)
    }
}

//Show questions
function displayQuestion(i){
  document.getElementById("question").textContent = questions[i].question
  document.getElementById("btn1").textContent = questions[i].answers[0]
  document.getElementById("btn2").textContent = questions[i].answers[1]
  document.getElementById("btn3").textContent = questions[i].answers[2]
  document.getElementById("btn4").textContent = questions[i].answers[3]
}



//View High Scores function
viewScoresButton.addEventListener("click", viewScores)

function viewScores(){
  endGame()
}




// Game Timer
// let downloadTimer = setInterval(function(){
// if(timeLeft <= 0){
//   clearInterval(downloadTimer);
//   document.getElementById("countdown").innerHTML = "Finished!";
//   endGame();
// } else {
//   document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
// }
// timeLeft -= 1;
// }, 1000);


//End Game Function
function endGame() {
  document.querySelector(".start").style.display="none"
  document.querySelector('#questionCard').classList.add('hide')
  questionContainerEl.classList.add('hide')
  console.log(questionContainerEl)
  firstContainerEl.classList.add('hide')
  endGameEl.classList.remove('hide')
  timeLeft = 0;
  endScoreEl.textContent=score
  console.log("GAME OVER")
}

//Play again function

playAgainBtnEl.addEventListener('click', playAgain)

function playAgain () {
  console.log(questionContainerEl)
  // questionContainerEl.classList.remove("hide")
  document.getElementById("countdown").innerHTML = timeLeft
  timeLeft = 185;
  firstContainerEl.classList.remove('hide')
  endGameEl.classList.add('hide')
  currentQuestion = 0
  currentScoreEl.textContent = 0;
  startGame()
  songEl.currentTime = 0
}

//Save high scores
submitScoreButton.addEventListener('click', submittedScore)

function submittedScore() {
  corkEl.play()
  let scoreName = document.getElementById('nameInput').value;
  localStorage.setItem(scoreName, currentScoreEl.textContent)


  
}

//Display Score List in OL



//New container for viewing scores
// --> Pause time in screen while viewing
// --> Go back to game function/button




//rotate submit form
submitScoreButton.addEventListener('mouseup', rotateForm)

function rotateForm() {
  formEl.style.transform = 'rotate(28deg)';
  formEl.style.transitionDelay = '0.45s';
  formEl.style.marginRight = '25%';
  formEl.style.transitionDuration = '1.2s'
  formEl.style.marginTop = '5%';
}






// Question #1
var questions = [{ 
  question: "Insert question here (?)", 
  answers: ["1", "2", "3", "4"],
  correctAnswer: "4",
},
//Question 2
{ 
  question: "Insert question two (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 3
{ 
  question: "Insert question three (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 4
{ 
  question: "Insert question four (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 5
{ 
  question: "Insert question five (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 6
{ 
  question: "Insert question six (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 7
{ 
  question: "Insert question seven (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 8
{ 
  question: "Insert question eight (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 9
{ 
  question: "Insert question nine (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 10
{ 
  question: "Insert question ten (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 11
{ 
  question: "Insert question eleven (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 12
{ 
  question: "Insert question 12 (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 13
{ 
  question: "Insert question 13 (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 14
{ 
  question: "Insert question 14 (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 15
{ 
  question: "Insert question 15 (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 16
{ 
  question: "Insert question 16 (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 17
{ 
  question: "Insert question 17 (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 18
{ 
  question: "Insert question 18 (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 19
{ 
  question: "Insert question 19 (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 20
{ 
  question: "Insert question 20 (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 21
{ 
  question: "Insert question 21 (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 22
{ 
  question: "Insert question 22 (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 23
{ 
  question: "Insert question 23 (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 24
{ 
  question: "Insert question 24 (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},
//Question 25
{ 
  question: "Insert question 25 (?)", 
  answers: ["a", "b", "c", "d"],
  correctAnswer: "b",
},]
