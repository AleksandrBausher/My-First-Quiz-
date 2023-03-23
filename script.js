//Screens
let mainScreen = document.getElementById("mainScreen");
let questionsScreen = document.getElementById("questionsScreen");

//Buttons
let startQuizButton = document.getElementById("startQuizButton");
let highScoreButton = document.getElementById("highScoreButton");






function getQuestionsScreen(){
    mainScreen.style.display = "none"
    questionsScreen.style.display = "flex"
}




startQuizButton.addEventListener('click', getQuestionsScreen)