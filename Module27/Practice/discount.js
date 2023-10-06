document.getElementById('btn-apply').addEventListener('click',function(){
    const price = document.getElementById('price-field');
    const priceString = price.innerText;
    const payPrice = parseFloat(priceString);
    
    const discount = percentage(payPrice,30);
    
    const afterDiscount = payPrice - discount;

    const payPlease = document.getElementById('pay-field');

    payPlease.innerText = afterDiscount;
})