// alert('sharafat rohoman is a big developer')

document.getElementById('login-btn').addEventListener('click', function (event) { 
    // alert('he is a good student')
    // console.log('login form updated')
    // console.log(event)
    event.preventDefault();

    const accountNumber = document.getElementById('Account-number').value;
    const pin = document.getElementById('pin').value;
    const convertPin = parseInt(pin);

    if(accountNumber.length === 11){
        // console.log(accountNumber);
        if(convertPin === 1234){
            window.location.href = './main.html'
        }
        else{
            alert('currect to pin number')
        }
    }
    else{
        alert('Need Your valid Number')
    }



    // console.log(pin,accountNumber)



})

