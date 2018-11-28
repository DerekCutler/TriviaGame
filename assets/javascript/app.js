// START GLOBAL VARIABLES

//Starting Time
let time =21;

// Starting Stats
let correct = 0;
let incorrect = 3;

// END GLOBAL VARIABLES


// START CALL FUNCTIONS

//  countdown from the start timer (21)
function countdown() {
    timer = setInterval(function () {
        $("#timerDisplay").html("<h3>Time left: " + time + "</h3>");
        time--;

        if (time === -1) {
            clearInterval(timer);
            $("#timerDisplay").html("<h3>Game over, man.</h3>");
            $("#correctDisplay").html("<h3>Game over!<H3>");
            $("#incorrectDisplay").html("<h3>Want to grab second breakfast?<H3>");
            document.getElementById("submit").disabled = true;
        }
    }, 1000);
}

// Stops the timer
function myStopFunction() {
    clearInterval(timer);
}

// END CALL FUNCTIONS


// START ONCE LOADED FUNCTIONS
$(document).ready(function () {
    countdown();
});
// END ONCE LOADED FUNCTIONS


// START ONCLICK EVENTS
$("#submit").on("click", function () {
    myStopFunction();
    $("#submit").unbind();
    // stopInterval(timer);
    if (document.getElementById("q1-2").checked == true) {
        correct++; 
        incorrect--;
    } 
    if (document.getElementById("q2-3").checked == true) {
        correct++; 
        incorrect--;
    } 
    if (document.getElementById("q3-3").checked == true) {
        correct++; 
        incorrect--;
    } 

    // displayWinLoss();
    $("#correctDisplay").html("<h3>Nailed it: " + correct + "<H3>");
    $("#incorrectDisplay").html("<h3>Wrong: " + incorrect + "<H3>");
});


// END ONCLICK EVENTS


// ** FIN **