// step-1: add click event handler with the submit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field 
    // step-3: get the value from the element  
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);

    // step-4: get the current deposit 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    

    const newTotal = newDepositAmmount + previousDepositTotal;
    
    depositTotalElement.innerText = newTotal;
    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBlanceTotal =previousBalanceTotal + newDepositAmmount;
    balanceTotalElement.innerText =currentBlanceTotal;

    depositField.value = '';

    
})