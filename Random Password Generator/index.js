// RANDOM PASSWORD GENERATOR

const passwordLength = document.getElementById("passwordLength");
const includeLowercase = document.getElementById("lowerCase");
const includeUppercase = document.getElementById("upperCase");
const includeNumbers = document.getElementById("number");
const includeSymbols = document.getElementById("symbol");
const result = document.getElementById("password");
let length;

function generatePassword(){

    length = Number(passwordLength.value);

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase.checked ? lowercaseChars : "";
    allowedChars += includeUppercase.checked ? uppercaseChars : "";
    allowedChars += includeNumbers.checked ? numberChars : "";
    allowedChars += includeSymbols.checked ? symbolChars : "";

    if(length <= 0){
        result.textContent = "Password length must be at least 1";
    }
    else if(allowedChars.length === 0){
        result.textContent = "At least 1 set of character needs to be selected";
    }
    else{
        for(let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
            result.textContent = password;
        }
    }
}                               