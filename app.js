//first i'm creating some variblaes
//and using document.querySelector to gather my classes from the index.html page
//and setting those classes as the variable value


const innerCircle = document.querySelector('.inner-circle');
const meditationMinutes = document.querySelector('.breath-selection');
const startMeditating = document.querySelector('.start');
const breathInstructions = document.querySelector('.breath-instructions');
const breathsLapsed = document.querySelector('.breaths-left');
let breathsLeft = 5;

//when the user makes their selection for meditation length of time
//the event will fire after it listens for the change event
//then a callback function is added for each time the 
//selection changes

meditationMinutes.addEventListener('change', () => {
    breathsLeft = meditationMinutes.value;
    breathsLapsed.innerText = breathsLeft;
})

//having the circle grow/shrink depending on the time

const growCircle = () => {
    innerCircle.classList.add("circle-grow")
    //use arrow function
    setTimeout(() => {
        innerCircle.classList.remove("circle-grow");
    }, 10000);
};


//event listener for start button

startMeditating.addEventListener('click', () => {
    growCircle();
})



// //event listener for audio
// .startMeditating.addEventListener('click', () => {

// })



//breathing instructions

const breathInstructionsUpdate = () => {
    breathsLeft--;
    breathsLapsed.innerText = breathsLeft;
    breathInstructions.innerText = "Slowly Breathe In"
    setTimeout(() => {
        breathInstructions.innerText = "Hold Breath";
        setTimeout(() => {
            breathInstructions.innerText = "Slowly Breathe Out"
        }, 5000);
    }, 5000);
}


//breathing timing intervals(repeat)
const breathIntervals = () => {
    const animateBreathing = setInterval(() => {
        if (breathsLeft === 0) {
            clearInterval(animateBreathing);
            breathInstructions.innerText="Your breathing session is complete! To begin another session, press the 'Start' button.";
            breathsLeft= meditationMinutes.value;
            breathsLapsed.innerText = breathsLeft;
            return;
        }
        growCircle();
        breathInstructionsUpdate();
    }, 15000)
};

startMeditating.addEventListener("click", () => {
    breathIntervals();
    growCircle();
    breathInstructionsUpdate();
});