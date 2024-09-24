document.getElementById('DonatBTN')
  .addEventListener('click', function (e) {
    e.preventDefault();
    console.log('adding naiow ')
    const currentTextValue = getTextFeildValueById('currentAmount');
    const TotaltextValue = getTextFeildValueById('TotalcurrentBalance');
    const inputValue = getInputFieldValueById('donationInput');

    if (!isNaN(inputValue) && inputValue > 0) {
      const donationAmount = inputValue + currentTextValue;
      document.getElementById('currentAmount').innerText = donationAmount;

      // Check if the user has enough balance
      if (TotaltextValue >= currentTextValue) {
        const discountBalance = TotaltextValue - inputValue;
        document.getElementById('TotalcurrentBalance').innerText = discountBalance;
        alert('Your donation has been successful.');
        const p = document.createElement('p')
        addDonationToHistory(inputValue, 'famine-2024 at Noakhali, Bangladesh');
        document.getElementById('donationInput').value = '';
        // donationHistory.push(TotaltextValue)
      }
      else {
        // If balance is not sufficient, show an alert
        alert('You dont have enough balance');
      }
      return TotaltextValue;  // return TotaltextValue; // Return the current balance without any deduction


    }
    else {
      alert('input is invalid');
      return  // Return the current balance if input is invalid
    }

  })
// --------2nd start-------------
document.getElementById('DonatBTN1').addEventListener('click', function (e) {
  e.preventDefault();
  const currentTextValue = getTextFeildValueById('currentAmount1');
  const TotaltextValue = getTextFeildValueById('TotalcurrentBalance');
  const inputValue = getInputFieldValueById('donationInput1');
  console.log(currentTextValue, TotaltextValue, inputValue)
  if (!isNaN(inputValue) && inputValue > 0) {
    const donationAmount = inputValue + currentTextValue;
    alert('Your donation has been successful.');
    document.getElementById('currentAmount1').innerText = donationAmount;

    // Check if the user has enough balance
    if (TotaltextValue >= currentTextValue) {
      const discountBalance = TotaltextValue - inputValue;
      document.getElementById('TotalcurrentBalance').innerText = discountBalance;
      addDonationToHistory(inputValue, 'famine-2024 at Feni, Bangladesh');
      document.getElementById('YourHistory').appendChild(p);
     
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
    return // Return the current balance if input is invalid
  }
})
// --------2nd end------------
// -------------3rd start------------
document.getElementById('DonatBTN2').addEventListener('click', function (e) {
  e.preventDefault();
  const currentTextValue = getTextFeildValueById('currentAmount2');
  const TotaltextValue = getTextFeildValueById('TotalcurrentBalance');
  const inputValue = getInputFieldValueById('donationInput2');

  if (!isNaN(inputValue) && inputValue > 0) {
    const donationAmount = inputValue + currentTextValue;
    alert('Your donation has been successful.');
    document.getElementById('currentAmount2').innerText = donationAmount;

    // Check if the user has enough balance
    if (TotaltextValue >= currentTextValue) {
      const discountBalance = TotaltextValue - inputValue;
      document.getElementById('TotalcurrentBalance').innerText = discountBalance;
      const p = document.createElement('p')
      addDonationToHistory(inputValue, 'Aid for Injured in the Quota Movement');
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
    return  // Return the current balance if input is invalid
  }

})
// -------------3rd end--------------------
