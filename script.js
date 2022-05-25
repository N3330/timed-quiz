var startQuiz = document.querySelector('#start-btn');
var index = 0
startQuiz.addEventListener('click', function () {
    document.querySelector('#start').setAttribute("class", "hide");
    document.querySelector('#quiz').removeAttribute("class");
    buildQuiz();
});
var questions = [
    {
        text: "Question 1",
        choices: ["A", "B", "C", "D", "E", "F"],
        answer: "A"
    }, {
        text: "Question 2",
        choices: ["A", "B", "C", "D", "E", "F"],
        answer: "A"
    }, {
        text: "Question 3",
        choices: ["A", "B", "C", "D", "E", "F"],
        answer: "A"
    }, {
        text: "Question 4",
        choices: ["A", "B", "C", "D", "E", "F"],
        answer: "A"
    }, {
        text: "Question 5",
        choices: ["A", "B", "C", "D", "E", "F"],
        answer: "A"
    }, {
        text: "Question 6",
        choices: ["A", "B", "C", "D", "E", "F"],
        answer: "A"
    }
];
function buildQuiz() {
    var showQuestions = document.querySelector('#title');
    showQuestions.textContent = questions[index].text;
    var answerBox = document.querySelector('#answers');
    console.log(answerBox);
    answerBox.innerHTML = ""; 
    questions[index].choices.forEach(function(choice) {
     console.log(choice);
     var button = document.createElement('button');
     button.textContent = choice;
     button.setAttribute('value', choice)
     button.onclick = function () {
         index++
         if (index === questions.length) {
             console.log('endGame');
         }
        buildQuiz();
     }
     answerBox.appendChild(button);    
    })
    //load the questions
    //append answer buttons 
    //add a click to the answer buttons 
    //when clicked find out if right or wrong 
    //reload function 
}