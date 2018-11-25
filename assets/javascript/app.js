// Start With Variables

var sec = 21




// Functions

var timer = setInterval(function() { 
    $('#time').text(sec--);
    if (sec === 0) {
       $('#time').fadeOut('fast');
       alert("It looks like you ran out of time!")
     //   clearInterval(timer);
    } 
 }, 1000);



// On Click Events


    // Show in the HTMLs
    $("#time").html("<h1>How much time do I have left: " + timer + "</h2>");

$("input[type="radio"]:checked")



    // <!-- Default unchecked --> Radio HTM Example
    // <div class="radio">
    //     <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios">
    //     <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
    // </div>





// ** FIN **