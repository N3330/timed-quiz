var startQuiz = document.querySelector('#start-btn');
var timerEl = document.querySelector('#countdown');
var index = 0
var timeLeft = 60;
startQuiz.addEventListener('click', function () {
    document.querySelector('#start').setAttribute("class", "hide");
    document.querySelector('#quiz').removeAttribute("class");
    buildQuiz();
    
});
var questions = [
    {
        text: "What is the first language you learn in UNCC Bootcamp",
        choices: ["HTML", "CSS", "Python", "JavaScript"],
        answer: "JavaScript"
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
  
    var timer = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft + ' seconds remaining.';
  
      if(timeLeft === 0) {
        clearInterval(timer);
        endGame();
      }
      
    },1000);
  }

function endGame() {
    showQuestions.textContent = "Finished!";
    timeLeft = 0;
    answer.textContent = ""


}


function buildQuiz() {
    if (index === questions.length) {
        console.log('endGame');

        return;

    }
    countdown();
    var showQuestions = document.querySelector('#title');
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
                index++
                buildQuiz();
            } else  { answerBox.textContent = "Wrong answer!";
            timeLeft -= 10; 
            console.log(timeLeft);
            index++
            buildQuiz();
        }
        }
        answerBox.appendChild(button);
    })
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
}