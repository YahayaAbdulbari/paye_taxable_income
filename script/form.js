'use strict';

var inputbox = document.querySelectorAll('.inputbox');
var inputerrorBox = document.querySelectorAll('.inputerror');
var inputerror = document.querySelectorAll('.error');

var username = document.getElementById('fullname');
var email = document.getElementById('email');
var password = document.getElementById('password');
var Referalcode = document.getElementById('referalcode');
var password_visibility = document.getElementById('password-visibility');

username.addEventListener('input', () =>{
    var myErrorMessage = "username is too short add few more character !!!";
    var currentValue = username.value;
    if(currentValue.length < 4){
        invalidInput(username, 0, myErrorMessage);
    }
    if(currentValue.length > 4){
        validInput(username, 0);
    }

});

password.addEventListener('input', () =>{
    var myErrorMessage = "password less than 10 characters not allow !!!";
    var currentValue = password.value;
    if(currentValue.length < 9){
        invalidInput(password, 2, myErrorMessage);
    }
    if(currentValue.length > 9){
        validInput(password, 2);
    }

});

// referal code
Referalcode.addEventListener('input', () =>{
    var myErrorMessage = "Referal code must be 6 character !!!";
    var currentValue = Referalcode.value;
    if(currentValue.length < 5){
        invalidInput(Referalcode, 3, myErrorMessage);
    }
    if(currentValue.length > 5){
        validInput(Referalcode, 3);
    }

});

var couter = 0;
password_visibility.addEventListener('click', () =>{
    couter++;
    if(couter % 2 !== 0){
        passwordIsvisible();
    }
    if(couter % 2 == 0){
        passwordIsNotvisible();
    }
})

function validInput (inputName, errorIndex){
    inputName.style.color='#00ff00';
    inputName.style.borderBottom='1px solid #00ff00';
    inputerrorBox[errorIndex].style.display='none';
}

function invalidInput (inputName, errorIndex, errorMessage){
    inputName.style.color='red';
    inputName.style.borderBottom='1px solid red';
    inputerrorBox[errorIndex].style.display='block';
    inputerror[errorIndex].textContent=`${errorMessage}`;
}

function passwordIsvisible(){
    password.type='text';
}

function passwordIsNotvisible(){
    password.type='password';
}