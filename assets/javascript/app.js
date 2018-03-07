//globals
var question;
var answers;
var answer;
var score = 0;
var pos = 0;
var time = 10;

//array of questions & answers
var questions = [
    ["Which Hip-Hop artist has the most Grammys?", "Jay-Z", "Drake", "Kendrick Lamar", "Lil Wayne", "A"],
    ["What was the name of Destiny's Child's first album?", "Destiny Fullfilled", "Survivor", "Bills, Bills, Bills", "Destiny's Child", "D"],
    ["Whose debut album 'The College Drop Out' released in 2004?", "50 Cent", "Eminem ", "Kanye West", "A Tribe Called Quest", "C"],
    ["What is Trey Songz given name?", "Tyreese Nelson", "Tremaine Neverson", "Tyler Songz", "Trayvon Song", "B"],
    ["This artist reased a compilation album titled 'Trilogy' in 2012.", "SZA", "Frank Ocean", "The Weeknd", "FKA Twigs", "C"],
    ["What Michael Jackson album is the all time best-selling album ever?", "Thriller", "Bad", "Off the Wall", "Dangerous", "A"],
    ["Which two rappers had the worst beef in Hip Hop history?", "N.W.A vs. Ice Cube", "Biggie Smalls vs. Tupac", "Drake vs. Meek Mill", "Jay Z vs. Nas", "B"],
    ["Who was the first female artist to debut on the Billboard album chart at number one?", "Mariah Carey", "Beyonce", "Madonna", "Whitney Houston", "D"],
    ["Which Hip-Hop artist recently gave away $996,631.90 in his music video for his single 'God's Plan'?", "DJ Khalid", "Kendric Lamer", "Skizzy Mars", "Drake", "D"],
    ["Which artist created the album for the movie 'Black Panter'?", "Future", "Ab-Soul", "Kendric Lamar", "Anderson.Paak", "C"]
];

function timer() {
    var time = 10;
    var timer = setInterval(function () {
        $(".time").html(time)
        time--;
        if (time <= 0)
            clearInterval(timer);
    }, 1000);
}

//display questions
function displayQuestions() {

    timer();

    //linking q&a's from array to vars & displaying
    question = questions[pos][0];
    ans1 = questions[pos][1];
    ans2 = questions[pos][2];
    ans3 = questions[pos][3];
    ans4 = questions[pos][4];
    $(".question").html(question)
    $("#ans1").html(ans1);
    $("#ans2").html(ans2);
    $("#ans3").html(ans3);
    $("#ans4").html(ans4);
    //display quiz progress
    $(".progress").html("Question " + (pos + 1) + " of " + questions.length);
}

function checkAnswer() {
    //created an array of each possible choice
    answers = document.getElementsByName("answers");
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].clicked) {
            //assigning user choice to answer var
            answer = answers[i].value;
        }
    }
    //if answer is correct add to score
    if (answer === questions[pos][5]) {
        score++;
        //move on to next question
        pos++;
        displayQuestions();
        //reset time to 10 sec

    }
    // if answer is wrong move on to next question
    else {
        pos++;
        displayQuestions();
        //rest time to 10 sec

    }
}

function nextQuestion() {
    //move on to next 
    pos++;
    displayQuestions();
}
setInterval(nextQuestion, 10000);


displayQuestions();
