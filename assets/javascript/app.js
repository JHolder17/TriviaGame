//globals
var question;
var answers
var answer;
var correct = 0;
var pos = 0;

//array of questions & answers
var questions = [
    ["Which Hip-Hop artist has the most Grammys?", "A", "B", "C", "D", "ans1"],
    ["Whose debut album released in 2004?", "A", "B", "C", "D", "ans1"]
];

//display questions
function displayQuestions() {
    //linking q&a's from array to vars & displaying
    question = questions[pos][0];
    ans1 = questions[pos][1];
    ans2 = questions[pos][2];
    ans3 = questions[pos][3];
    ans4 = questions[pos][4];
    $(".question").html(question)
    $(".ans1").html(ans1);
    $(".ans2").html(ans2);
    $(".ans3").html(ans3);
    $(".ans4").html(ans4);
}

function checkAnswer() {
    //making an array from all the possible answers
    answers = document.getElementById("answers");
    //linking answer to the chosen answer
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].click) {
            answer = answers[i].class;
        }
    }
    //checking if user answer if correct and increasing # correct
    if (answer === questions[pos][5]) {
        correct++;
    }
    //moving on to next question
    pos++;
    displayQuestions();
}

displayQuestions();