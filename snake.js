// the snake game logic

// the main function
$(document).ready(function(){

    var gameBanner = $('#gameBanner');

    gameBanner.on('click', function() {
        console.log("I clicked a thing");
        gameBanner.hide();
    });

});