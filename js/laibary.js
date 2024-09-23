// function getInputFieldValueById(id){
//     const inputValue = document.getElementById(id).value; 
//     return inputValue; 
// }
// function getTextFeildValueById(id){
//     const textValue = document.getElementById(id).innerText; 
//     const textNumber= parseFloat(textValue); 
//     return textNumber; 
// }
// ----------------------------------------------------------
// function addDonation(currentAmount, donationAmount) {
//     // Validate the donation amount
//     if (!isNaN(donationAmount) && donationAmount > 0) {
//         // Return the updated amount
//         return currentAmount + donationAmount;
//     } else {
//         alert('Please enter a valid donation amount.');
//         return currentAmount; // Return the current amount if input is invalid
//     }
// }
// -----------------------------------------------------------------------------

// donation.js

// Function to add donation amount to the current amount
function addDonation(currentBalance, donationAmount) {
    // Validate the donation amount
    if (!isNaN(donationAmount) && donationAmount > 0) {
        // Check if the user has enough balance
        if (currentBalance >= donationAmount) {
            // Deduct the donation amount from the balance and return the new balance
            return currentBalance - donationAmount;
        } else {
            // If balance is not sufficient, show an alert
            alert('You dont have enough balance');
            return currentBalance; // Return the current balance without any deduction
        }
    } else {
        alert('Please enter the correct donation amount.');
        return currentBalance; // Return the current balance if input is invalid
    }
}
