const rollBTN = document.getElementById("roll");
const resetBTN = document.getElementById("reset");
const lab1 = document.getElementById("label1");
const lab2 = document.getElementById("label2");
const lab3 = document.getElementById("label3");
const min =  1;
const max = 6;
let randomNum1,randomNum2,randomNum3;

roll.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max)+ min;
    randomNum2 = Math.floor(Math.random() * max)+ min;
    randomNum3 = Math.floor(Math.random() * max)+ min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2; 
    label3.textContent = randomNum3;
}

resetBTN.onclick = function(){
    label1.textContent = 0;
    label2.textContent = 0; 
    label3.textContent = 0;
}


















