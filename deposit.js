

//step-1 add event listener to the deposit
document.getElementById('btn-deposit').addEventListener('click',deposit);



function deposit(){


const depositField= document.getElementById('deposit-field');
const depositAmountsString=depositField.value;
const depositAmount=parseFloat(depositAmountsString)


const depositTotalElement = document.getElementById('deposit-total');
const previousDepositString=depositTotalElement.innerText;
const previousDeposit=parseFloat(previousDepositString);

const currentDeposit=previousDeposit+depositAmount
depositTotalElement.innerText=currentDeposit;

const balanceTotalElement=document.getElementById('balance-total');
const previousBalanceString=balanceTotalElement.innerText;
const previousBalance=parseFloat(previousBalanceString);
const previousBalanceTotal=parseFloat(previousBalanceString);

const currentBalance = previousBalance+depositAmount;
balanceTotalElement.innerText=currentBalance





}