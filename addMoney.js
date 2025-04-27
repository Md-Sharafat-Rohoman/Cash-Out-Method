document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    //  console.log(typeof amount);
    const convertAmount = parseFloat(amount);

    const pin = document.getElementById('pin').value;
    const convertPin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertMainBalanace = parseFloat(mainBalance);
    console.log(convertMainBalanace);





    if (convertPin === 1234) {
        // console.log('your pin is valid');
        const sum = convertMainBalanace + convertAmount;
        document.getElementById('main-balance').innerText = sum;
    }
    else {
        alert('your needed valid pin');
    }

})