
const styleGreen= "style =  background-color:rgb(0,255,0)";
 
const   styleRed= "style =  background-color:rgb(255,0,0)";


const styleBlack= "style =  background-color:rgb(0,0,0)";
 

const styleYellow= "style =  background-color:rgb(255,255,0)";
 

const styleBlue= "style =  background-color:rgb(0,0,255)";


function display(r,g,b){
document.body.innerHTML = `
    <div class="bgc" style="
        background-color:rgb(${r},${g},${b});
        
    "> <div class="coei">
        <div class="color-pallet">
            <div ${styleRed} class="red"></div>
            <div ${styleBlue} class="blue"></div>
            <div ${styleGreen} class="green"></div>
            <div ${styleYellow} class="yellow"></div>
            <div ${styleBlack } class="black"></div>
         </div>
         <div class="custom">
            <div>custom color (0-255)</div>
            <input  class="r-input">
            <input class="g-input">
            <input class="b-input">
            <div class='change-button'>change</div>
        </div>
         </div>
    </div>
 `;

 document.querySelector('.green').addEventListener("click",green);


 document.querySelector('.yellow').addEventListener("click",yellow);


 document.querySelector('.blue').addEventListener("click",blue);


 document.querySelector('.black').addEventListener("click",black);


 document.querySelector('.red').addEventListener("click",red);


document.querySelector('.change-button').addEventListener("click",change);

document.addEventListener('keydown',handler)


}

display(255,255,255);

function handler(event){
    if(event.key==="Enter"){
        change();
    }else if(event.key==="r"){
        red();
    }else if(event.key==="g"){
        green();
    }else if(event.key==="b"){
        blue();
    }else if(event.key==="y"){
        yellow();
    }else if(event.key==="d"){
        black();
    }
}

function red(){
  display(255,0,0);
  console.log(styleRed)
}



function green(){
    display(0,255,0);
    console.log(styleGreen)
}


function yellow(){
    display(255,255,0);
    console.log(styleYellow)
}


function black(){
    display(0,0,0);
    console.log(styleBlack)
}


function blue(){
    display(0,0,255);
    console.log(styleBlue) 
}

function change(){
    let inputR = document.querySelector('.r-input').value;
    let inputG = document.querySelector('.g-input').value;
    let inputB = document.querySelector('.b-input').value;
    const selected = `style =  background-color:rgb(${inputR},${inputG},${inputB})`;

    display(inputR,inputG,inputB)
    console.log(selected)
}
