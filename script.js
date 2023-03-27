//Screens
let mainScreen = document.getElementById("mainScreen");
let questionsScreen = document.getElementById("questionsScreen");
let quizFinishedScreen = document.getElementById("quizFinishedScreen");
let highScoresScreen = document.getElementById("highScoresScreen");
let topBar = document.getElementById("topBar");
let optionWrapper = document.getElementById("optionWrapper");

//Buttons
let startQuizButton = document.getElementById("startQuizButton");
let highScoreButton = document.getElementById("highScoreButton");
let initialsSubmitButton = document.getElementById("initialsSubmitButton");
let goBackButton = document.getElementById("goBackButton");
let clearHighScoreButton = document.getElementById("clearHighScoreButton");

// options
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

//Elements
let question = document.getElementById("question");
let timerElement = document.getElementById("timer");
let line = document.getElementById("line");
let checker = document.getElementById("checker");

let questionsList = [
  {
    question:
      "Which of the following is the correct syntax to print a page using JavaScript?",
    options: [
      "window.print();",
      "browser.print();",
      "navigator.print();",
      "document.print();",
    ],
    answer: "window.print();",
  },
  {
    question: "Which built-in method returns the length of the string?",
    options: ["length()", "size()", "index()", "none of the above"],
    answer: "length()",
  },
  {
    question:
      "Which built-in method returns the string representation of the number's value?",
    options: ["toValue()", "toNumber()", "toString()", "none of the above"],
    answer: "toString()",
  },
  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript?",
    options: ["stringify()", "parse()", "convert()", "all of the above"],
    answer: "stringify()",
  },
  {
    question:
      "Which of the following function of String object combines the text of two strings and returns a new string?",
    options: ["add()", "merge()", "concat()", "append()"],
    answer: "concat()",
  },
];

//variables
var timer;
var start = 60;
var score = 0;

function getQuestionsScreen() {
  startTimer();
  mainScreen.style.display = "none";
  questionsScreen.style.display = "flex";
}

function startTimer() {
  function maketimerWork() {
    var end = 0;
    start--;
    timerElement.textContent = start.toString();

    if (start <= end) {
      window.clearInterval(theTimer);

      getQuizFinishedScreen();
    }
  }

  theTimer = window.setInterval(maketimerWork, 1000);
  console.log("timer starts");
}

var i = 1;
function getAnswer(event) {
  line.className = "";
  var userSelection = event.target.textContent;
  if (questionsList[i - 1].options.includes(userSelection)) {
    line.className = "line";
    if (userSelection == questionsList[i - 1].answer) {
      checker.textContent = "Correct";
    } else {
      start = start - 5;
      checker.textContent = "Wrong";
    }
    if (i < questionsList.length) {
      optionWrapper.innerHTML = "";
      question.textContent = questionsList[i].question;
      questionsList[i].options.forEach((optionText) => {
        let option = document.createElement("div");
        option.className = "option";
        option.textContent = optionText;
        optionWrapper.appendChild(option);
      });

      i++;
      questionsScreen.appendChild(line);
      questionsScreen.appendChild(checker);
    }

    if (i == questionsList.length) {
      getQuizFinishedScreen()
      quizFinishedScreen.appendChild(line)
      quizFinishedScreen.appendChild(checker)
    }
  }
}

function getHighScoresScreen() {
  mainScreen.style.display = "none";
  quizFinishedScreen.style.display = "none";
  questionsScreen.style.display = "none";
  topBar.style.display = "none";
  highScoresScreen.style.display = "flex";

}

function getQuizFinishedScreen() {
  mainScreen.style.display = "none";
  quizFinishedScreen.style.display = "flex";
  questionsScreen.style.display = "none";
  topBar.style.display = "none";
  highScoresScreen.style.display = "none";
}

function reload() {
  location.reload();
}

startQuizButton.addEventListener("click", getQuestionsScreen);
initialsSubmitButton.addEventListener("click", getHighScoresScreen);
highScoreButton.addEventListener("click", getHighScoresScreen);
goBackButton.addEventListener("click", reload);
optionWrapper.addEventListener("click", getAnswer);