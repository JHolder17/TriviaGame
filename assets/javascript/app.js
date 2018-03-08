//globals
var correct = 0;
var incorrect = 0;
var notAnswered = 0;

//array of questions & answers
var answers = ["a", "d", "c", "b", "c", "a", "b", "d", "d", "b"];

//game timer
function timer() {
    var time = 10;
    var timer = setInterval(function () {
        $(".time").html("You have " + time + " seconds remaining.")
        time--;
        if (time <= 0) {
            results();
            cancel();
        }
    }, 1000);
    function cancel() {
        clearInterval(timer);
    }
}



function results() {

    //Get all the users answers & check if its right or wrong
    var ans1 = $("input[type='radio'][name='q1']:checked").val();
    if (ans1 === answers[0]) {
        //increase correct by 1
        correct++;
    } else {
        incorrect++;
    }
    var ans2 = $("input[type='radio'][name='q2']:checked").val();
    if (ans2 === answers[1]) {
        //increase correct by 1
        correct++;
    } else {
        incorrect++;
    }
    var ans3 = $("input[type='radio'][name='q3']:checked").val();
    if (ans3 === answers[2]) {
        //increase correct by 1
        correct++;
    } else {
        incorrect++;
    }
    var ans4 = $("input[type='radio'][name='q4']:checked").val();
    if (ans4 === answers[3]) {
        //increase correct by 1
        correct++;
    } else {
        incorrect++;
    }
    var ans5 = $("input[type='radio'][name='q5']:checked").val();
    if (ans5 === answers[4]) {
        //increase correct by 1
        correct++;
    } else {
        incorrect++;
    }
    var ans6 = $("input[type='radio'][name='q6']:checked").val();
    if (ans6 === answers[5]) {
        //increase correct by 1
        correct++;
    } else {
        incorrect++;
    }
    var ans7 = $("input[type='radio'][name='q7']:checked").val();
    if (ans7 === answers[6]) {
        //increase correct by 1
        correct++;
    } else {
        incorrect++;
    }
    var ans8 = $("input[type='radio'][name='q8']:checked").val();
    if (ans8 === answers[7]) {
        //increase correct by 1
        correct++;
    } else {
        incorrect++;
    }
    var ans9 = $("input[type='radio'][name='q9']:checked").val();
    if (ans9 === answers[8]) {
        //increase correct by 1
        correct++;
    } else {
        incorrect++;
    }
    var ans10 = $("input[type='radio'][name='q10']:checked").val();
    if (ans10 === answers[9]) {
        //increase correct by 1
        correct++;
    } else {
        incorrect++;
    }

    //dispay results page
    $("#StartScreen").hide();
    $("#GameScreen").hide();
    $("#ResultsScreen").show();

    //display results 
    $("#finished").html("All Done!")
    $("#correct").html("You got " + correct + " right.")
    $("#incorrect").html("You got " + incorrect + " wrong.")
}

//game buttons
$(document).ready(function () {
    $("#GameScreen").hide();
    $("#ResultsScreen").hide();
    $("#StartButton").click(function () {
        $("#StartScreen").hide();
        timer();
        $("#GameScreen").show();
        $("#ResultsScreen").hide();
    })
    $("#SubmitButton").click(function () {
        results();
    })
});

