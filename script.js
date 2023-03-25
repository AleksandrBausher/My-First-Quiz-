//Screens
let mainScreen = document.getElementById("mainScreen");
let questionsScreen = document.getElementById("questionsScreen");
let quizFinishedScreen = document.getElementById("quizFinishedScreen");
let highScoresScreen = document.getElementById("highScoresScreen");
let topBar = document.getElementById("topBar");

//Buttons
let startQuizButton = document.getElementById("startQuizButton");
let highScoreButton = document.getElementById("highScoreButton");
let initialsSubmitButton = document.getElementById("initialsSubmitButton");
  
function getQuestionsScreen(){
    mainScreen.style.display = "none"
    questionsScreen.style.display = "flex"
}
function gethighScoresScreen(){
    quizFinishedScreen.style.display = "none"
    topBar.style.display = "none"
    highScoresScreen.style.display = "flex"
}




startQuizButton.addEventListener('click', getQuestionsScreen)
initialsSubmitButton.addEventListener('click', gethighScoresScreen)