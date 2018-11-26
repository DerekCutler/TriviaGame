// STARTING GLOBAL VARIABLES

//Starting Time
let timer = 13;

// Starting Stats
let correct = 0;
let incorrect = 0;


let interval;





// CALL FUNCTIONS


//  SHOULD countdown from the start timer (13)
function countdown() {
    timer--;
    $("#timerDisplay").html("<h3>Time left: " + timer + "</h3>");
    if (timer === 0) {
        alert("I think it's time for second breakfast!");
        // resetTimer();
    }    
}




// ONCE LOADED FUNCTIONS
$(document).ready(function() {

// SHOULD display the countdown 
countdown();

$("#correct").html("<h3>Nailed it: " + "TBD" + "<H3>");
$("#incorrect").html("<h3>Wrong: " + "TBD" + "<H3>");


}







 

// On Click Events



    // <!-- Default unchecked --> Radio HTM Example
    // <div class="radio">
    //     <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios">
    //     <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
    // </div>





// ** FIN **