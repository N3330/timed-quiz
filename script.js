var startQuiz = document.querySelector('#start-btn');
var timerEl = document.querySelector('#countdown');
var endQuiz = document.querySelector('#end');
var highScore = document.querySelector('#highscores');
var index = 0
var timeLeft = 60;
var state = 'start';
var start = document.querySelector('#start');
var quiz = document.querySelector('#quiz');
var timer;
var showQuestions;
var answer;

var questions = [
    {
        text: "What is the first language you learn in UNCC Bootcamp",
        choices: ["HTML", "CSS", "Python", "JavaScript"],
        answer: "HTML"
    }, {
        text: "When was JavaScript released?",
        choices: ["2005", "1987", "1995", "2011",],
        answer: "1995"
    }, {
        text: "What is the keyword for varialble",
        choices: ["var", "const", "let", "All of the above",],
        answer: "All of the above"
    }, {
        text: "What does API stand for?",
        choices: ["Application programming interface", "all program internet", "Apple Products inc", "All of the above"],
        answer: "Application programming interface"
    }
];

function scoreSaver() {

}

function switchState() {
    if (state === "quiz") {
        endQuiz.style.display = "none";
        start.style.display = "none";
        quiz.style.display = "block";
    }
    if (state === "start") {
        start.style.display = "block";
        endQuiz.style.display = "none";
        quiz.style.display = "none";

    }
    if (state === "highscores") {
        start.style.display = "none";
        endQuiz.style.display = "none";
        highScore.style.display = "block";
    }
}

function countdown() {

     timer = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft + ' seconds remaining.';

        if (timeLeft === 0) {
            clearInterval(timer);
            endGame();
        }

    }, 1000);
}

function endGame() {
    showQuestions.textContent = "Finished!";
    // timeLeft = 0;
    timerEl.textContent = "";
    //answer.textContent = ""
    // create input and button finishe


}

// function displayHighScores() {
//     var items = JSON.parse(localStorage.getItem("highscores")) || [];
//     for (var i = 0; i < items.length; i++) {
//         var dlEl = document.createElement('dl');
//         var dtEl = document.createElement('dt');
//         var ddEl = document.createElement('dd');
//         dlEl.appendChild(dtEl);
//         dlEl.appendChild(ddEl);
//         dtEl.textContent = items[i].initials;
//         ddEl.textContent = items[i].score;
//         document.getElementById('highscores').appendChild(dlEl);
//     }
// }
// time left and initials values inside function
// build object where the keys are the same initials on the left score on the right 
// console.log time left and initials values inside function 
//initials = button triggered by user  

function buildQuiz() {
    showQuestions = document.querySelector('#title');
    showQuestions.textContent = questions[index].text;
    var answerBox = document.querySelector('#answers');
    console.log(answerBox);
    answerBox.innerHTML = "";
    questions[index].choices.forEach(function (choice) {
        var button = document.createElement('button');
        button.textContent = choice;
        button.setAttribute('value', choice)
        button.onclick = function () {
            var selectedAnswer = this.value;
            console.log(selectedAnswer);
            if (selectedAnswer == questions[index].answer) {
                answerBox.textContent = "Correct answer!";
                
            }
            else { 
                answerBox.textContent = "Wrong answer!"; 
                timeLeft -= 10; 
            }
            // console.log(timeLeft);
            index++
            setTimeout(function () {
                answerBox.textContent = "";
            }, 750);
            if (index === questions.length) {
                clearInterval(timer);
                endGame();
            } else {
                setTimeout(buildQuiz, 750);
                
            }
        }
        answerBox.appendChild(button);
    })
}
//load the questions
//append answer buttons 
//add a click to the answer buttons 
//when clicked find out if right or wrong 
//reload function 
// create timer
// time left turned into score 
// high scores to local storage 
//timer displayed on the page 
//subtract time for wrong answers


function init() {
    switchState();
}

init();


startQuiz.addEventListener('click', function () {
    state = 'quiz';
    switchState();
    countdown();
    buildQuiz();
    
});