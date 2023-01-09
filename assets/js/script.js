



var questions = [{ 
    question: "Insert question here (?)", 
    answers: ["1", "2", "3", "4"],
    correctAnswer: "4",
}]
var currentQuestion = 0
function displayQuestion(i){
    document.getElementById("question").textContent = questions[i].question
    document.getElementById("btn1").textContent = questions[i].answers[0]
    document.getElementById("btn2Correct").textContent = questions[i].answers[1]
    document.getElementById("btn3").textContent = questions[i].answers[2]
    document.getElementById("btn4").textContent = questions[i].answers[3]
}


//Game Timer
var timeLeft = 120;
var downloadTimer = setInterval(function(){
  if(timeLeft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished!";
  } else {
    document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
  }
  timeLeft -= 1;
}, 1000);


//View High Scores function
function viewScores(){
    
}

function doSomething(){
    console.log('something')
}

document.querySelector('.answerGrid').addEventListener('click', doSomething)


//Start Game button function
function startGame(){
    displayQuestion(currentQuestion)
}

//Function for choosing an answer
function chooseAnswer(){

}

startGame()