// function addDonation() {
//             // Get the current donation amount
//             const currentAmount = parseFloat(document.getElementById('currentAmount').innerText);

//             // Get the donation amount from the input field
//            const donationAmount = parseFloat(document.getElementById('donationInput').value);

//            const mainBalance = parseFloat (document.getElementById('Total-account-balance').innerText);

//             // Check if the donation amount is valid (not NaN or less than 0)
//             if (!isNaN(donationAmount) && donationAmount > 0 ) {
//                 // Add the donation to the current amount
//                 const newAmount = currentAmount + donationAmount;
//                 // Update the displayed amount
//                 document.getElementById('currentAmount').innerText = newAmount.toFixed(2)

//                 // Clear the input field after donation
//                 document.getElementById('donationInput').value = '';
//             } else {
//                 alert('Please enter a valid donation amount.');
//             }
//         }
// -----------------------------------------------------------------------------------
// main.js

// Example current balance (set the user's current balance here)
const currentBalance = 5500; // User's balance

// Function to handle the donation button click event
function handleDonation() {
    // Get the donation amount from the input field
    const donationAmount = parseFloat(document.getElementById('donationInput').value);

    // Call the addDonation function to check and deduct the amount if balance is sufficient
    let newBalance = addDonation(currentBalance, donationAmount);

    // If the balance is sufficient and the donation is made, update the current balance
    if (newBalance !== currentBalance){
        currentBalance = newBalance;
        document.getElementById('Total-account-balance').innerText = currentBalance.toFixed(2);
    }

    // Clear the input field after donation
    document.getElementById('donationInput').value = '';
}
