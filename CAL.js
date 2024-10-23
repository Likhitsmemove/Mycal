const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equais]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');

const currentScreenTextElement = document.querySelector('[data-operand-current]');
const previousScreenTextElement = document.querySelector('[data-operand-previous]');

class Calculator {
    constutor(currentScreenTextElement, previousScreenTextElement){
        this.currentScreenTextElement = currentScreenTextElement;
        this.previousScreenTextElement = previousScreenTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = null;
    }

delete(){
    this.currentOperand = this.currentOperand.tostring().slice(0,-1);
}

appendNumber(number){
    if (number === '.'&& this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.tostring() + number.tostring();
}

flushOperator() {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
        this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
}

compute() {
    let computation;
    const previous = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(previous) || isNaN(current)) return;
    switch(this.operation) {
        case "+":
          computation = previous + current;
        break;
        case "-":
          computation = previous - current;
        break;
        case "x":
          computation = previous * current;
        break;
        case "÷":
          computation = previous / current;
        break;

        default:
         return;
    }
    this.currentOperand = computation;
    this.previousOperand = "";
    this.operation = underfined;
}

updateDisplay() {
    this.currentScreenTextElement.innerText = this.currentOperand;
    if (this.operation != null) {
        this.previousScreenTextElement.innerText =`${this.previousOperand} $(this.operation)`;
    }
}
}

const Calculator = new Calculator( 
    currentScreenTextElement,
    previousScreenTextElement
);

numberButtons.forEach((button) => {
    button.addEventListener("click" , () => {
        Calculator.appendNumber(button.innerText);
        Calculator.updateDisplay();
    })
});

operationButtons.forEach((button) => {
    button.addEventListener("click", () =>{
        Calculator.flushOperator(button.innerText);
        Calculator.updateDisplay();
    });
})

equalsButton.addEventListener("click", () =>{
    Calculator.computation();
    Calculator.updateDisplay();
});

allClearButton.addEventListener("click", () => {
    Calculator.clear();
    Calculator.updateDisplay();
})

deleteButton.addEventListener("click", () => {
    Calculator.delete();
    Calculator.updateDisplay();
})



