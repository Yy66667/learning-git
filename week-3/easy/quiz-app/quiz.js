import {quizData} from "./data.js"

let i = 0;
let ans;

let total = 0;

function display(){

let question = quizData[i].question;
let a = quizData[i].a;
let b = quizData[i].b;
let c = quizData[i].c;
let d = quizData[i].d;
ans = quizData[i].correct;

document.body.innerHTML =`<div class="main">
            <div class="question">${question}</div>
            <div class='options'><div  onclick=choose('a') >
                <input class="a box"type="checkbox">
                 ${a}
            </div>
            <div  onclick=choose('b')>
                <input class="b box" type="checkbox">
                 ${b}
            </div>
            <div onclick=choose('c')>
                <input class="c box" type="checkbox">
                 ${c}
            </div>
            <div  onclick=choose('d')>
                <input class="d box" type="checkbox">
                 ${d}
            </div>
            </div><div class="button-con">
            <button class=submitButton>submit</button></div><div>`;

            document.querySelector('.submitButton').addEventListener('click',submit)
            
            document.addEventListener('keydown', handlekeyDown);
            

}

function handlekeyDown(event){
    if(event.key==="Enter"){submit();}
}

function reset(){ total = 0;
  i=0;
  display();}

function finalDisplay(){

  document.body.innerHTML = `<div class="result">Your score is ${total}/${quizData.length} <div class="resd"><button class="retake">↻</button></div></div>`


document.querySelector(".retake").addEventListener('click',reset)
}

display();


function submit(){

  let answerChecked = document.querySelector(`.${ans}`);

  if(answerChecked.checked){
    total++
  }

  if(i<quizData.length-1){
   i++;
   display();

  }else{finalDisplay()}


}

window.choose =  function(option){
  
  let boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.checked  = false);

  document.querySelector(`.${option}`).checked = true;
}