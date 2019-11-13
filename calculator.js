document.addEventListener('DOMContentLoaded', pageLoaded);
document.addEventListener('DOMContentLoaded', functions);
var equate = []
function detect(event) {
    var answerBox = document.getElementById("answer-box");
    answerBox.innerHTML += event.target.innerHTML;
    //var test = parseInt(answerBox.innerHTML, 10)

}
function pageLoaded() {
    var answerBox = document.getElementById("answer-box");
    const number = document.querySelectorAll(".number");
    numberArray = Array.from(number);
    for (let i = 0; i < numberArray.length; i++) {
        box = numberArray[i];
        box.addEventListener("click", detect);
    }
}
function functions() {
    var answerBox = document.getElementById("answer-box");
    const boxes = document.querySelectorAll("#back, .c-box, .orange-boxes");
    boxesArray = Array.from(boxes);
    for (let i = 0; i < boxesArray.length; i++) {
        box = boxesArray[i];
        box.addEventListener("click", action);
    }
}
function action(event) {
    var answerBox = document.getElementById("answer-box");
    const item = event.target.innerHTML
    var innerBox = answerBox.innerHTML
    switch(item) {
        case "C":
            answerBox.innerHTML =  " "
            equate = []
            break
        case "←":
            answerBox.innerHTML = innerBox.substring(0,innerBox.length-1)
            break
        case "=":
            calculate();
            equals()
            break
        default:
            calculate()
            answerBox.innerHTML = ""
            break
    }    

    
}
function calculate() {
    var answerBox = document.getElementById("answer-box");
    
    equate.push(answerBox.innerHTML, event.target.innerHTML)
    console.log(equate)
}   
function equals() {
    var answerBox = document.getElementById("answer-box");
    var numArray = []
    var oppArray = []
    var opperands = ["+", "-", "=", "×", "÷"]
    for(i=0; i<equate.length; i++) {
        var value = equate[i]
        if(Number.isInteger(parseInt(value))) {
            numArray.push(value)
        } else if(opperands.includes(value)) {
            oppArray.push(value)
        }
    }
    for(i=0; i<oppArray.length; i++) {
        let left = parseInt(numArray.shift())
        let right = parseInt(numArray.shift())
        let result
        switch(oppArray[i]) {
            case "+":
                result = left + right
                numArray.unshift(result)
                break
            case "-":
                result = left - right
                numArray.unshift(result)
                break
            case "=":
                answerBox.innerHTML = left
                equate = []
                break
            case "×":
                result = left * right
                numArray.unshift(result)
                break
            case "÷":
                result = left / right
                numArray.unshift(result)
                break

            
        }
    }
}