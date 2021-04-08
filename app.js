// const numberOne = document.getElementById("content14");
// const numberTwo = document.getElementById("content15");
// const numberThree = document.getElementById("content16");
// const numberFour = document.getElementById("content10");
// const numberFive = document.getElementById("content11");
// const numberSix = document.getElementById("content12");
// const numberSeven = document.getElementById("content6");
// const numberEight = document.getElementById("content7");
// const numberNine = document.getElementById("content8");
// const numberZero = document.getElementById("content18");
// const backSpace = document.getElementById("content4");
// const divide = document.getElementById("content5");
// const multiply = document.getElementById("content9");
// const minus = document.getElementById("content13");
// const plus = document.getElementById("content17");

let resultScreen = document.querySelectorAll(".result")[0];//Select the result field
console.log(resultScreen); 
let clearAll = document.getElementsByClassName('clearAll')[0]; // Select the clearAll-button
let equalTo = [];
let allButtons = document.getElementsByClassName("content");
//console.log(allButtons);
let operator = false;

for (var i = 0; i<allButtons.length; i +=1 ){
    if (allButtons[i].innerHTML === "="){
        allButtons[i].addEventListener("click", calculate(i));
    }else if (allButtons[i].innerHTML === "+/-"){
        allButtons[i].addEventListener("click", invert(i));
} else if (allButtons[i].innerHTML === "AC"){
    equalTo = [];
} else {
    allButtons[i].addEventListener("click", addValue(i));
}
}

clearAll.onclick = function(){
    resultScreen.innerHTML = "";
    equalTo = [];
    operator = false;
}

function addValue(i){
    return function(){
        if (allButtons[i].innerHTML === "/"){
            clicked(this);
            useOperator("/");
        } else if(allButtons[i].innerHTML === "X"){
            clicked(this);
            useOperator("*"); 
        } else if(allButtons[i].innerHTML === "+"){
            clicked(this);
            useOperator("+");
        } else if(allButtons[i].innerHTML === "-"){
        clicked(this);
        useOperator("-");
        } else {
        removeClicked();
        if (checkIfNum(equalTo[equalTo.length-1])){
            equalTo = [];
            equalTo.push(allButtons[i].innerHTML);
            operator = true;
        } else {
            equalTo.push(allButtons[i].innerHTML);
        }
        if (operator){
            resultScreen.innerHTML = allButtons[i].innerHTML;
        } else {
            resultScreen.innerHTML += allButtons[i].innerHTML;
        }
        operator = false;
        }
    }; 
}

    function clicked(i){
        removeClicked(i);
        i.classList.add("clicked");
    }

    function removeClicked(i) {
        let elems = document.querySelectorAll(".clicked");
        [].forEach.call(elems, function(el){
            el.classList.remove("clicked");
        });
    }
    function calculate(i) {
        return function() {
            if (equalTo.length == 0) {
                return;
            } else {
                let answer = eval(equalTo.join(""));
                if (answer % 1 === 0) {
                    resultScreen.innerHTML = answer;
                } else {
                    resultScreen.innerHTML = answer.toFixed(4);
                }
                equalTo = [];
                equalTo.push(answer);
                operator = false;
            }
        };
    }

    function invert (i) {
        return function(){
            if (equalTo.length == 0) {
                return;
            } else {
                let number = resultScreen.innerHTML;
                popNumberOfDigits(number);
                let invert = number * -1;
                equalTo.push(invert);
                resultScreen.innerHTML = invert;
            }
        } 
    }

    function useOperator (str) {
        if (!operator) {
            equalTo.push(str);
            operator = true;
        } else {
            equalTo.pop();
            equalTo.push(str);
        }
    }
    
    function checkIfNum(v) {
        if (typeof v == "string") {
            return false;
        } else if (typeof v == "number") {
            return true;
        }
    }

    function popNumberOfDigits(number) {
        let arr = number.split("");
        for (i=0; i< arr.length; i++) {
            equalTo.pop();
        }
    }
































/*numberOne.addEventListener("click", writeScreen1);
function writeScreen1(){
 return screen.push("1");
}
console.log(screen);
numberTwo.addEventListener("click", writeScreen2);
function writeScreen2(){
 screen.textContent += "2";
}
numberThree.addEventListener("click", writeScreen3);
function writeScreen3(){
 screen.textContent += "3";
}
numberFour.addEventListener("click", writeScreen4);
function writeScreen4(){
 screen.textContent += "4";
}
numberFive.addEventListener("click", writeScreen5);
function writeScreen5(){
 screen.textContent += "5";
}
numberSix.addEventListener("click", writeScreen6);
function writeScreen6(){
 screen.textContent += "6";
}
numberSeven.addEventListener("click", writeScreen7);
function writeScreen7(){
 screen.textContent += "7";
}
numberEight.addEventListener("click", writeScreen8);
function writeScreen8(){
 screen.textContent += "8";
}
numberNine.addEventListener("click", writeScreen9);
function writeScreen9(){
 screen.textContent += "9";
}
numberZero.addEventListener("click", writeScreen0);
function writeScreen0(){
 screen.textContent += "0";
}
backSpace.addEventListener("click", writeScreen);
function writeScreen(){
 screen.textContent -= " ";
}*/