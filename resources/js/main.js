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

//events
document.addEventListener('DOMContentLoaded', getQuestion);

//functions

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

function showQuestion(){
    inputGroup.style.opacity = 1;
    inputProgress.style.transition = '';
    inputProgress.style.width = '100%';
}
