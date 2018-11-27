// START GLOBAL VARIABLES

//Starting Time
let time = 21;

// Starting Stats
let correct = 0;
let incorrect = 0;

// END GLOBAL VARIABLES



// START CALL FUNCTIONS

//  countdown from the start timer (21)
function countdown() {
    timer = setInterval(function () {
        $("#timerDisplay").html("<h3>Time left: " + time + "</h3>");
        time--;

        if (time === -1) {
            clearInterval(timer);
            $("#timerDisplay").html("<h3>Want to grab second breakfast?</h3>");
        }
    }, 1000);
}

// ** NEEDS HELP should dislpay the wins & losses in the htmlz**
function displayWinLoss() {
    if (time >= -2) {
        $("#correct").html("<h3>Nailed it: " + correct + "<H3>");
        $("#incorrect").html("<h3>Wrong: " + incorrect + "<H3>");
    }
}
// END CALL FUNCTIONS



// START ONCE LOADED FUNCTIONS
$(document).ready(function () {
    countdown();
    displayWinLoss();

}
);
// END ONCE LOADED FUNCTIONS



// START ONCLICK EVENTS

// ** Needs help.  on click Submit should record q1, q2, q3 and adjust the correct and incorrect.


// END ONCLICK EVENTS



    // <!-- Default unchecked --> Radio HTM Example
    // <div class="radio">
    //     <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios">
    //     <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
    // </div>





// ** FIN **