var questions = [{ 
    question: "Which is number four", 
    answers: ["1", "2", "3", "4"],
    correctAnswer: "4",
}]
var currentQuestion = 0
function displayQuestion(i){
    document.getElementById("question").textContent = questions[i].question
    document.getElementById("answer1").textContent = questions[i].answers[0]
    document.getElementById("answer2").textContent = questions[i].answers[1]
    document.getElementById("answer3").textContent = questions[i].answers[2]
    document.getElementById("answer4").textContent = questions[i].answers[3]
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

document.querySelector('.container').addEventListener('click', doSomething)


//Start Game button function
function startGame(){
    displayQuestion(currentQuestion)
}

//Function for choosing an answer
function chooseAnswer(){

}

startGame()