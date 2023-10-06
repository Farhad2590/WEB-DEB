document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField =document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);

    depositField.value ='';

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newTotal = newDepositAmmount + previousDepositTotal;
    
    depositTotalElement.innerText = newTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBlanceTotal =previousBalanceTotal + newDepositAmmount;
    balanceTotalElement.innerText =currentBlanceTotal;
})