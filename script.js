const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operation]');
const equals = document.querySelector('[data-equals]');
const clear = document.querySelector('[data-clear]');
const del = document.querySelector('[data-delete]');

var operator1='', operator2=''
var operand='', result=''
function numberAdd(number){
    if(number=='.' && document.querySelector('[data-current]').innerHTML.includes('.')) return
    document.querySelector('[data-current]').innerHTML+=number
}
function checkOperators(simbol){
    if(operator1==''){operator1=document.querySelector('[data-current]').innerHTML}
    if(operator2==''){document.querySelector('[data-current]').innerHTML=''}
    operand=simbol
}
function compute(){
    if(operator2==''){operator2 = document.querySelector('[data-current]').innerHTML}
    switch(operand){
        case '÷':
            result = operator1 / operator2
        break;
        case '+':
            result = parseFloat(operator1) + parseFloat(operator2)
        break;
        case '-':
            result = operator1 - operator2
        break;
        case '*':
            result = operator1 * operator2
        break;
        default:
            return
        break;
    }
    document.querySelector('[data-current]').innerHTML=result
}
function changeVariables(){
    operator1=result, operator2='', result=''
}
function allClear(){
    document.querySelector('[data-current]').innerHTML='', operator1='',  operator2='', result='', operand=''
}
function deleteOne(){
    document.querySelector('[data-current]').innerHTML=document.querySelector('[data-current]').innerHTML.slice(0,-1)
}
console.log(numberButtons)
numberButtons.forEach(button => {
    button.addEventListener('click', () => {numberAdd(button.innerText)})
})
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {checkOperators(button.innerText)})
})
equals.addEventListener('click',()=>{
    compute()
    changeVariables()
})
clear.addEventListener('click',()=>{allClear()})
del.addEventListener('click',()=>{deleteOne()})