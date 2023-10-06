// step-1: add click event handler with the submit button 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field 
    // step-3: get the value from the element  
    const withdrawtField = document.getElementById('withdraw-field');
    const newwithdrawAmmountString = withdrawtField.value;
    const newwithdrawAmmount = parseFloat(newwithdrawAmmountString);
    
    // step-4: get the current deposit 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotalElement.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);

    const currentWithdrawTotal = newwithdrawAmmount + previouswithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBlanceTotal =previousBalanceTotal - newwithdrawAmmount;
    balanceTotalElement.innerText =currentBlanceTotal;


    withdrawtField.value = '';
    
})