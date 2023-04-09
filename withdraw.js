document.getElementById('btn-withdraw').addEventListener('click',withdraw);


function withdraw(){


const withdraw = document.getElementById('Withdraw-field');
const withdrawAmountString=withdraw.value;
const withdrawAmount = parseFloat(withdrawAmountString);


const withdrawTotalElement=document.getElementById('withdraw-total');
const previousWithdrawTotalString=withdrawTotalElement.innerText;
const previousWithdraw = parseFloat(previousWithdrawTotalString);

const currentWithdrawTotal=previousWithdraw+withdrawAmount;

withdrawTotalElement.innerText=currentWithdrawTotal;



const balanceTotalElement=document.getElementById('balance-total')

const previousBalanceToString=balanceTotalElement.innerText;
const previousBalance = parseFloat(previousBalanceToString);

const balanceTotal=previousBalance-withdrawAmount;

balanceTotalElement.innerText= balanceTotal;


}