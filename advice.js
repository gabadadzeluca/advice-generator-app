function randomAdvice(){
    // fetch a random advice
    fetch('https://api.adviceslip.com/advice')
    .then(response=>response.json())
    .then(data=>{
        let slip = data.slip; // return a slip object
        displayAdvice(slip);
    });
}
function displayAdvice(slip){
    const adviceNum = document.querySelector('.advice-number');
    const adviceContent = document.querySelector('.advice-content');
    adviceNum.innerHTML = slip.id;
    adviceContent.innerHTML = '"' + slip.advice + '"';
}

// display first advice
randomAdvice();

const dice = document.querySelector('.dice');
dice.addEventListener('click', randomAdvice);