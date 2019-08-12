//questions array
const questions = [
    {question: 'Enter Your First Name'},
    {question: 'Enter Your Last Name'},
    {question: 'Enter Your Email', pattern: /^\S+@\S+\.\S+$/ },
    {question: 'Create A Password', type: 'password'}
];

//transition times
const shakeTime = 100; //shake transition time
const switchTime = 200; //Transition between questions

//init Position of questions
let position = 0;

//init DOM Elements
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progressBar = document.querySelector('#progress-bar');

/************** EVENTS **************/

//Get Questions on DOM Load
document.addEventListener('DOMContentLoaded', getQuestion);

//Next Button Click
nextBtn.addEventListener('click', validate);

//inputField enter event
inputField.addEventListener('keyup', submitOnEnter);


/******************** FUNCTIONS *****************/

//gets question from array and add it to Markup
function getQuestion(){
    inputLabel.innerHTML = questions[position].question;
    //get Current Type
    inputField.type = questions[position].type || 'text';
    //get current answer
    inputField.value = questions[position].answer || '';
    //focus on element
    inputField.focus();

    //set progress bar width
    progressBar.style.width = (position * 100) / questions.length + '%';

    //add User Icon or Back Arrow Dynamically
    prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-user';

    showQuestion();
}

//displays Question to user
function showQuestion(){
    inputGroup.style.opacity = 1;
    inputProgress.style.transition = '';
    inputProgress.style.width = '100%';
}

//hides question from user
function hideQuestion(){
    inputGroup.style.opacity = 0;
    inputLabel.style.marginLeft = 0;
    inputProgress.style.width = 0;
    inputProgress.style.transition = 'none';
    inputGroup.style.border = null;
}

//transform to create shake motion
function transform(x, y){
    formBox.style.transform = `translate(${x}px, ${y}px)`;
}

//submits question on enter press
function submitOnEnter(e){
    if(e.keyCode == 13){
        validate();
    }
}

//validates fields
function validate(){
    if(!inputField.value.match(questions[position].pattern || /.+/)){
        inputFail();
    }else{
        inputPass();
    }
}


//Field input fail
function inputFail(){
    formBox.className = 'error';
    //repeat shake motion
    for(let i = 0; i < 6; i++){
        setTimeout(transform, shakeTime * i, ((i % 2) *2 - 1) * 20, 0);
        setTimeout(transform, shakeTime *6, 0 , 0);
        inputField.focus();
    }

}

//Field input passed
function inputPass(){
    formBox.className = '';
    setTimeout(transform, shakeTime * 0, 0, 10);
    setTimeout(transform, shakeTime * 1, 0, 10);

    //store Answer in array
    questions[position].answer = inputField.value;

    //increment position 
    position++;

    if(questions[position]){
        //show question
        hideQuestion();
        getQuestion();
    }else{
        //remove questions
        hideQuestion();
        formBox.className = 'close';
        progressBar.style.width = '100%';
        formComplete();
    }
}

//all fields completed
function formComplete(){
    const h1 = document.createElement('h1');
    h1.classList.add('end');
    h1.appendChild(document.createTextNode('Thanks ${questions[0].answer} You are registered and will get an email shortly'));
    setTimeout(() => {
        formBox.parentElement.appendChild(h1);
        setTimeout(() => h1.style.opacity = 1, 50);
    }, 1000);
    
}

