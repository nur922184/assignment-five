function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value; 
    const inputnumbr = parseFloat(inputValue)
    return inputnumbr; 
}
function getTextFeildValueById(id){
    const textValue = document.getElementById(id).innerText; 
    const textNumber= parseFloat(textValue); 
    return textNumber; 
}

function getFinalvalue(id){
    balance.getElementById(id).innerText = balance; 
    return balance; 
}
// ----------------------------------------------------------
// -----------------------------------------------------------------------------

