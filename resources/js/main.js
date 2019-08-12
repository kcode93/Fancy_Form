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

