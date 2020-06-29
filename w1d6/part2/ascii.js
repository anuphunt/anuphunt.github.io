
window.onload = onPageLoad;

let txtArea;
let startButton;
let stopButton;
let animationType;
let fontSize;
let turboCheckbox;
let animationFrames = [];
let frameCount = 0;
let animationInterval;
let animationSpeed = 250;

let animationRunning = false;

const FONTSIZES = [];
FONTSIZES["Tiny"] = "7pt";
FONTSIZES["Small"] = "10pt";
FONTSIZES["Medium"] = "12pt";
FONTSIZES["Large"] = "16pt";
FONTSIZES["Extra Large"] = "24pt";
FONTSIZES["XXL"] = "32pt";


function onStopButtonClicked() {
    stopButton.disabled = true;
    startButton.disabled = false;
    animationType.disabled = false;
    fontSize.disabled = false;
    animationRunning = false;

    clearInterval(animationInterval);
    txtArea.value = ANIMATIONS[animationType.value];
}

function onPageLoad(){
    txtArea = document.getElementById("text-area");
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    animationType = document.getElementById("animation");
    fontSize = document.getElementById("fontsize");
    turboCheckbox = document.getElementById("turbo");

    startButton.onclick = onStartButtonClicked;
    stopButton.onclick= onStopButtonClicked;
    animationType.onchange = onAnimationTypeChanged;
    fontSize.onchange = onFontSizeChanged;
    turboCheckbox.onchange = onTurboCheckboxChanged;
}

function onStartButtonClicked(){
    animationFrames = txtArea.value.split("=====\n");
    startButton.disabled = true;
    stopButton.disabled = false;
    animationType.disabled = true;
    fontSize.disabled = true;

    animationRunning = true;

    animationInterval = setInterval(animate, animationSpeed);
}

function animate(){
    if(animationFrames.length <= frameCount){
        frameCount = 0;
    }
    txtArea.value  = animationFrames[frameCount];
    frameCount++;
}

function onAnimationTypeChanged(){
    animationType = document.getElementById("animation");
    txtArea.value = ANIMATIONS[animationType.value];
}

function onFontSizeChanged(){
    fontSize = document.getElementById("fontsize");
    txtArea.style.fontSize = FONTSIZES[fontSize.value];
}

function onTurboCheckboxChanged(){
    clearInterval(animationInterval);


    if(turboCheckbox.checked){
        animationSpeed = 50;
        if(animationRunning){
            clearInterval(animationInterval);
            animationInterval = setInterval(animate, animationSpeed);
        }
    }
    else {
        animationSpeed = 250;
        if(animationRunning){
            clearInterval(animationInterval);
            animationInterval = setInterval(animate, animationSpeed);
        }
    }
}

