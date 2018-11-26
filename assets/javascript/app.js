// STARTING GLOBAL VARIABLES

//Starting Time
let time = 13;

// Starting Stats
let correct = 0;
let incorrect = 0;


let interval;





// CALL FUNCTIONS


//  countdown from the start timer (13)


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

function displayWinLoss() {
    if (time >= -2) {
        $("#correct").html("<h3>Nailed it: " + correct + "<H3>");
        $("#incorrect").html("<h3>Wrong: " + incorrect + "<H3>");
    }
}


// ONCE LOADED FUNCTIONS
$(document).ready(function () {
    countdown();
    displayWinLoss();


}
);








// On Click Events



    // <!-- Default unchecked --> Radio HTM Example
    // <div class="radio">
    //     <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios">
    //     <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
    // </div>





// ** FIN **