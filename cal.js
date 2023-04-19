let btn = document.getElementById("btnCalculate");
let result = document.getElementById("result");
let num1error = document.getElementById("num1error")
let num2error = document.getElementById("num2error")
let operatorError = document.getElementById("operatorError")
let finalResult;
let num1status , num2status, operatorStatus = false;

num1error.style.display = "none";
num2error.style.display = "none";
operatorError.style.display = "none";

const checkValidation = (num1 , num2 , operator) =>{
    if(num1.value == "" || num1.value == null || num1.value == undefined) {
        num1error.style.display = "block";
        num1status = true;
    }else {
        num1error.style.display = "none";
        num1status = false;
    }

    if(num2.value == "" || num2.value == null || num2.value == undefined) {
        num2error.style.display = "block";
        num2status = true;
    }else {
        num2error.style.display = "none";
        num2status = false;
    }

    if(operator.value == "empty") {
        operatorError.style.display = "block";
        operatorStatus = true;
    }else {
        operatorError.style.display = "none";
        operatorStatus = false;
    }

}


btn.addEventListener("click", ()=>{

    let num1 = document.getElementById("numOne");
    let num2 = document.getElementById("numTwo");
    let operator = document.getElementById("operator");

    checkValidation(num1 , num2 , operator)
    
    if(!num1status && !num2status && !operatorStatus){
        num1 = parseInt(num1.value);
        num2 = parseInt(num2.value);

        switch (operator.value) {
            case "add":
                finalResult = num1 + num2
                break;
            case "minus":
                finalResult = num1 - num2
                break;   
            case "multiply":
                finalResult = num1 * num2
                break;
            case "division":
                finalResult = num1 / num2
                break;        
            default:
                break;
        }

        result.innerHTML  = finalResult;
    }
});

