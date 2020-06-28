
function setup(){
    let biggerDecorationButton = document.getElementById("bigdecbutton");
    let blingCheckbox = document.getElementById("bling");
    blingCheckbox.onchange = onBlingChanged;
    biggerDecorationButton.onclick = onButtonClicked;
}

function onButtonClicked(){
    setInterval(makeTextBigger, 500);
}
function makeTextBigger(){
    let fontSizeComp = window.getComputedStyle(document.getElementById("txtarea")).fontSize;
    let currentLength = parseInt(fontSizeComp);
    document.getElementById("txtarea").style.fontSize = 2 + currentLength + "pt";
}

function onBlingChanged()
{
    let blingCheckbox = document.getElementById("bling");
    let txtArea = document.getElementById("txtarea");

    if(blingCheckbox.checked){
        txtArea.style.fontWeight = "bold";
        txtArea.style.color = "green";
        txtArea.style.textDecoration = "underline";
        document.body.className = "blingChecked";
    }
    else{
        txtArea.style.fontWeight = "normal";
        txtArea.style.color = "black";
        txtArea.style.textDecoration = "none";
        document.body.className = "";
    }
}

window.onload = setup;
