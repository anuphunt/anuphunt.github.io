$(document).ready(function(){

    let lost = false;
    let gameStarted = false;

    $(".boundary").on('mouseover', lose);
    $("#maze").on('mouseleave', lose);
    $("#start").on('click', reset);
    $("#end").on('mouseover', endGame);

    function reset(){
        gameStarted = true;
        lost = false;
        $(".boundary").removeClass("youlose");
        $("#status").text("Move cursor across white path until you reach \"E\". ");
    }

    function lose(){
        if(gameStarted){
            $(".boundary").addClass("youlose");
            lost = true;
        }
    }

    function endGame() {
        if (gameStarted) {
            if (!lost) {
                $("#status").text("You win! :]");
            } else {
                $("#status").text("You lose! :[");
            }
        }
    }
});


