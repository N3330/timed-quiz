var startQuiz = document.querySelector('#start-btn');
var timerEl = document.querySelector('#countdown');
var endQuiz = document.querySelector('#end');
var highScore = document.querySelector('#highscores');
var index = 0
var timeLeft = 60;
var state = 'start';
var start = document.querySelector('#start');
var quiz = document.querySelector('#quiz');
var end = document.querySelector('#end');
var restart = document.querySelector('#restart');
var timer;
var showQuestions;
var answer;
var highScoresArray = JSON.parse(localStorage.getItem("highscores")) || [];
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
        end.classList.remove("hide")
        quiz.classList.add("hide")
        timerEl.textContent = "";
        var submit = document.querySelector("#end-btn")
        submit.onclick = function () {
            var score = {time: timeLeft, initials: document.getElementById("initials").value}
            highScoresArray.push(score)
            localStorage.setItem("highscores", JSON.stringify(highScoresArray))
            // displayHighScores()
            end.classList.add("hide")
        highScore.classList.remove("hide")
        restart.classList.remove("hide")
        var items = JSON.parse(localStorage.getItem("highscores")) || [];
        for (var i = 0; i < items.length; i++) {
            var dlEl = document.createElement('dl');
            var dtEl = document.createElement('dt');
            var ddEl = document.createElement('dd');
            dlEl.appendChild(dtEl);
            dlEl.appendChild(ddEl);
            dlEl.style.display = "inline"
            dtEl.textContent = items[i].initials;
            ddEl.textContent = items[i].time;
            document.getElementById('highscores').appendChild(dlEl);
        }
        restart.addEventListener('click', function () {
            location.reload()
            console.log('clicked me')
        } )
        
    }
    
    
    
}


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




// submit.addEventListener("click", function(event) {
//     event.preventDefault();
//     state = "highscores";

// })
startQuiz.addEventListener('click', function () {
    quiz.classList.remove("hide")
    start.classList.add("hide")
    countdown();
    buildQuiz();
    
});

// do a sort over highscores array and display them on the page.