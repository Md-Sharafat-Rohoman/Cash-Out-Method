document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();
    const pin= document.getElementById('cashOutPin') .value;
    const convertedPin =parseInt(pin) ;
    // console.log(convertedPin)

    const amount =document.getElementById('cashOut-amount').value;
    const convertedAmount = parseInt(amount);
    // console.log(convertedAmount)

    const mainBalance = document.getElementById('main-balance').innerText;
    // console.log(mainBalance)
    const convertedMainBalance = parseFloat(mainBalance);
    if(convertedPin === 1234){
        const sum = convertedMainBalance - convertedAmount;
        document.getElementById('main-balance').innerText = sum;
    }
    else{
        alert('enter valid pin')
    }


})