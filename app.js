
// get choose item set the value
function getProductPrice(setId,price){
    const setInput = document.getElementById(setId);
    setInput.innerText = price

    priceCalculator();
}

//get the input data

function getId(id){
    const inputField    = document.getElementById(id);
    const inputText     = inputField.innerText;
    const inputValue    = parseFloat(inputText);

    return inputValue;
}

// price Calculator
function priceCalculator(){
   const bestPrice = getId('bestPrice');
   const memoryCost = getId('memoryCost');
   const storageCost = getId('storageCost');
   const deliveryCharge = getId('deliveryCharge');
   const totalPrice = bestPrice + memoryCost + storageCost + deliveryCharge;
   updateTotalCost(totalPrice);

} 

// Total price update
function updateTotalCost(totalCost){
    document.getElementById('totalPrice').innerText = totalCost;
    document.getElementById('totallMainPrice').innerText = totalCost;
}

// event listener
//memory
document.getElementById('memory8GB').addEventListener('click',function(){
    const memory8GB = 0;
    getProductPrice('memoryCost',memory8GB);
});
document.getElementById('memory16GB').addEventListener('click',function(){
    const memory16GB = 180;
    getProductPrice('memoryCost',memory16GB);
});
//storage
document.getElementById('storage256GB').addEventListener('click',function(){
    const storage256GB = 0;
    getProductPrice('storageCost',storage256GB);
});
document.getElementById('storage512GB').addEventListener('click',function(){
    const storage512GB = 100;
    getProductPrice('storageCost',storage512GB);
});
document.getElementById('storage1TB').addEventListener('click',function(){
    const storage1TB = 180;
    getProductPrice('storageCost',storage1TB);
});
//Delivery Option
document.getElementById('deliveryCostFree').addEventListener('click',function(){
    const deliveryCostFree = 0;
    getProductPrice('deliveryCharge',deliveryCostFree);
});
document.getElementById('deliveryCost20').addEventListener('click',function(){
    const deliveryCost20 = 20;
    getProductPrice('deliveryCharge',deliveryCost20);
});


//promo Code Submit
document.getElementById('promoCodeSubmit').addEventListener('click',function(){

    const addPromoCode      = "stevekaku";

    const promoCode         = document.getElementById('promoCode');
    const promoCodeValue    = promoCode.value;

    const grandField        = document.getElementById('totalPrice');
    const grandValue        = parseFloat(grandField.innerText);
    
    if(addPromoCode == promoCodeValue){
        const countTotal  = (grandValue / 10) * 2;
        const grandTotal = grandValue - countTotal;
        document.getElementById('totalPrice').innerText = grandTotal;
        document.getElementById('totallMainPrice').innerText = grandTotal;
    }
    
    promoCode.value = "";

});


