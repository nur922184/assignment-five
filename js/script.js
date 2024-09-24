
document.getElementById('DonatBTN').addEventListener('click', function(e){
  e.preventDefault();
  const currentTextValue = getTextFeildValueById('currentAmount');
  const TotaltextValue = getTextFeildValueById('TotalcurrentBalance');
  const inputValue = getInputFieldValueById('donationInput');
  
  if (!isNaN(inputValue) ) {
    const donationAmount = inputValue + currentTextValue;
    document.getElementById('currentAmount').innerText= donationAmount; 

    // Check if the user has enough balance
    if (TotaltextValue >= currentTextValue) {
      const discountBalance= TotaltextValue- inputValue; 
      alert('Your donation has been successful.');
      document.getElementById('TotalcurrentBalance').innerText= discountBalance; 
      document.getElementById('donationInput').value = '';
       
      // const div = document.createElement('div');
      // div.innerHTML= `
      // <h3>Donate for Flood at Noakhali, Bangladesh </h3>
      // <p> ${currentTextValue} taka donation. Your Total balance ${TotaltextValue}
      // `
      // document.getElementById('Your-history').appendChild(div);
        // Deduct the donation amount from the balance and return the new balance
        // const extbalance =getFinalvalue('TotalcurrentBalance');
      // document.getFinalvalue('TotalcurrentBalance');
    } 
    else {
        // If balance is not sufficient, show an alert
        alert('You dont have enough balance');
        // return TotaltextValue; // Return the current balance without any deduction
    }
    return TotaltextValue;
    
} 
else {
    alert('input is invalid');
  }
  return TotaltextValue; // Return the current balance if input is invalid

})
// --------2nd start-------------
document.getElementById('DonatBTN1').addEventListener('click', function(e){
  e.preventDefault();
  const currentTextValue = getTextFeildValueById('currentAmount1');
  const TotaltextValue = getTextFeildValueById('TotalcurrentBalance');
  const inputValue = getInputFieldValueById('donationInput1');
  console.log(currentTextValue, TotaltextValue, inputValue)
  if (!isNaN(inputValue) ) {
    const donationAmount = inputValue + currentTextValue;
    alert('Your donation has been successful.');
    document.getElementById('currentAmount1').innerText= donationAmount; 

    // Check if the user has enough balance
    if (TotaltextValue >= currentTextValue) {
      const discountBalance= TotaltextValue- inputValue; 
      document.getElementById('TotalcurrentBalance').innerText= discountBalance; 
      document.getElementById('donationInput1').value = '';

    } 
    else {
        // If balance is not sufficient, show an alert
        alert('You dont have enough balance');
        // return TotaltextValue; // Return the current balance without any deduction
    }
    return TotaltextValue;
    
} 
else {
    alert('input is invalid');
  }
  return TotaltextValue; // Return the current balance if input is invalid

})
// --------2nd end------------
// -------------3rd start------------
document.getElementById('DonatBTN2').addEventListener('click', function(e){
  e.preventDefault();
  const currentTextValue = getTextFeildValueById('currentAmount2');
  const TotaltextValue = getTextFeildValueById('TotalcurrentBalance');
  const inputValue = getInputFieldValueById('donationInput2');
  console.log(
  currentTextValue , TotaltextValue, inputValue
  );
  if (!isNaN(inputValue) ) {
    const donationAmount = inputValue + currentTextValue;
    alert('Your donation has been successful.');
    document.getElementById('currentAmount2').innerText= donationAmount; 

    // Check if the user has enough balance
    if (TotaltextValue >= currentTextValue) {
      const discountBalance= TotaltextValue- inputValue; 
      document.getElementById('TotalcurrentBalance').innerText= discountBalance; 
      document.getElementById('donationInput2').value = '';
      
    } 
    else {
        // If balance is not sufficient, show an alert
        alert('You dont have enough balance');
        // return TotaltextValue; // Return the current balance without any deduction
    }
    return TotaltextValue;
} 
else {
    alert('input is invalid');
  }
  return TotaltextValue; // Return the current balance if input is invalid

})
// -------------3rd end--------------------
