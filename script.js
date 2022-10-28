let firstNumber = null
let secondNumber = null
let operator = null
let shouldResetScreen = false

const numberButtons = document.querySelectorAll('.number')
const display = document.querySelector('.displayText')
const operatorButtons = document.querySelectorAll('.operation')
const equalKey = document.querySelector('.equal')
const clearButton = document.querySelector('.clear')
const decimalButton = document.querySelector('.decimal')
const backButton = document.querySelector('.back')

equalKey.addEventListener('click', () => evaluate())
clearButton.addEventListener('click', () => clearAll())
decimalButton.addEventListener('click', () => addDecimal())
backButton.addEventListener('click', () => back())

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.innerText))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.innerText))
)

function addDecimal(){
    if (!(display.textContent.includes('.'))){
        appendNumber(".")
    }
}

function back(){
    if (display.textContent.length > 0){
        display.textContent = display.textContent.slice(0, -1)
    }
}

function clearAll(){
    firstNumber = null
    secondNumber = null
    operator = null
    display.textContent = ""
}

function setOperation(newOperator){
    if (display.textContent == ".")
    {
        return
    }
    if(operator!== null ){
        evaluate()
    }
    if(operator == null ){
        firstNumber = display.textContent
    }
    operator = newOperator
    clearDisplay()
}

function clearDisplay(){
    display.textContent = ""
}

function appendNumber(number) {
    display.textContent += number
}

function roundNumber(num) {
    return Math.round(num * 100) / 100;
}

//add
function add( x, y) {
    return x + y
}

//subtract
function subtract( x, y) {
    return x - y
}


//multiply
function multiply( x, y) {
    return x * y
}

//divide
function divide ( x, y) {
    return x / y
}
 
function evaluate() {
    if (display.textContent == ".")
    {
        return
    }
    if(display.textContent == 0){
        alert("Dont break Math")
        clearAll()
        return
    }
    secondNumber = display.textContent
    display.textContent = roundNumber(operate(firstNumber, secondNumber, operator))
    firstNumber = roundNumber(operate(firstNumber, secondNumber, operator))
    operator = null
    console.log(firstNumber)
    console.log(secondNumber)
    console.log(operator)
  }


//operate (takes 2 variables and a function and calls one of the functions above) 
function operate( x, y, operation){
    x = Number(x)
    y = Number(y)
    switch (operation){
        case '+' :
            return add(x, y)
        case '-' :
            return subtract(x, y)
        case '*' :
            return multiply(x, y)
        case '/' :
            return divide(x, y)
        default:
            return null
    }
}


