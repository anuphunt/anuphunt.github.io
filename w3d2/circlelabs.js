$("#circles").ready(function(){
    $("#circles").click(function(){
        $(".circle").remove();
    });
})

$("#start-button").ready(function(){
    $("#start-button").click(function(){
        const width = $("#width-input").val();
        const growAmount = $("#grow-amount").val();
        const growRate = $("#grow-rate").val();
        const numberCircles = $("#number-circles").val();

        makeCircles(width, parseInt(numberCircles));
        growCircles(parseInt(growAmount), parseInt(growRate));
    });
});

function makeCircles(width, circleCount) {
    let bgColors = ["red", "pink", "orange", "violet", "cyan", "black", "blue"]

    let circles = [];
    for (let i = 0; i < circleCount; i++) {

        //random horizontal position
        let position = generateRandomInteger(100, 800);
        let bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];

        let circle = $("<div>", {
            "class": "circle",
            "css": {
                "left": position + "px",
                "background-color": bgColor
            }
        });
        circles.push(circle);
    };
    $("#circles").append(circles);
}

function growCircles(growAmount, growRate){
     setInterval(function(){
         $(".circle").css("width", function(idx, old){
             return parseInt(old) + growAmount + "px";
         });
         $(".circle").css("height", function(idx, old){
             return parseInt(old) + growAmount + "px";
         });
    }, growRate);
}

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
}

