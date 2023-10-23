let total = 0;

function handleOnClick(target) {
  const selectedItemContainer = document.getElementById("ordered-items");
  const itemName = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerText =`${itemName}`;
  
  selectedItemContainer.appendChild(li);
  const price = target.childNodes[3].childNodes[5].innerText;
  total = parseInt(total) + parseInt(price);
  document.getElementById("total").innerText = total;
  if (total > 0) {
    document.getElementById("make-purchase-btn").disabled = false;
  }
  if (total > 200){
    document.getElementById("btn-apply").disabled = false;
  }
}


document.getElementById('btn-apply').addEventListener('click',function(){
  
  const cupponlField = document.getElementById('cuppon-code');
  const cuppon = cupponlField.value;
  console.log(cuppon);

  if(cuppon == 'SELL200'){
      const total = document.getElementById('total').innerText;
      const payPrice = parseFloat(total);
      const discount = percentage(payPrice,20);
      const discountfield = document.getElementById('discount-field')
      discountfield.innerText = discount;
      const afterDiscount = payPrice - discount;
      const payPlease = document.getElementById('after-discount');
  
      payPlease.innerText = afterDiscount;

  }
})
// const modeldiv = document.getElementById('my_modal_8')
// document.getElementById('make-purchase-btn').addEventListener('click',function(){
//   modeldiv.innerHTML = `
  
//   <div class="lg:w-[600px] lg:h-[500px] modal-box flex flex-col items-center justify-center">
//       <img src="/images/congo.png" alt="">
//       <h3 class="font-bold text-4xl mt-6">Congratulations</h3>
//       <p class="py-4">You Have Purchased The Product</p>
//       <div class="modal-action mt-12">
//           <a href="index.html">
//               <button
//                   class="ml-5 w-40 h-10 text-white btn btn-error bg-[#E527B2] hover:bg-[#da26aa] text-xl font-semibold">Go
//                   Home
//               </button>
//           </a>
//       </div>
//   </div>

//   `
//   modeldiv.appendChild(modeldiv);
// })
