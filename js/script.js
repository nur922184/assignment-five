// Donation button click handlers
document.getElementById('DonatBTN').addEventListener('click', function(e) {
  e.preventDefault();
  
  const inputValue = getInputFieldValueById('donationInput');
  const currentTextValue = getTextFeildValueById('currentAmount');
  const totalTextValue = getTextFeildValueById('TotalcurrentBalance');
  
  if (!isNaN(inputValue) && inputValue > 0 && totalTextValue >= inputValue) {
      const newDonationAmount = currentTextValue + inputValue;
      document.getElementById('currentAmount').innerText = newDonationAmount;
      const newBalance = totalTextValue - inputValue;
      document.getElementById('TotalcurrentBalance').innerText = newBalance;
      
      addDonationToHistory(inputValue, 'Donate for Flood at famine-2024 at Noakhali, Bangladesh');
      
      document.getElementById('donationInput').value = '';
      
      alert('Your donation has been successful.');
  } else {
      alert('Invalid input or insufficient balance');
  }
});
// --------2nd start-------------
document.getElementById('DonatBTN1').addEventListener('click', function(e) {
  e.preventDefault();

  const inputValue = getInputFieldValueById('donationInput1');
  const currentTextValue = getTextFeildValueById('currentAmount1');
  const totalTextValue = getTextFeildValueById('TotalcurrentBalance');

  if (!isNaN(inputValue) && inputValue > 0 && totalTextValue >= inputValue) {
      const newDonationAmount = currentTextValue + inputValue;
      document.getElementById('currentAmount1').innerText = newDonationAmount;
      const newBalance = totalTextValue - inputValue;
      document.getElementById('TotalcurrentBalance').innerText = newBalance;

      addDonationToHistory(inputValue, 'Donate for Flood at Flood Relief in Feni, Bangladesh');

      document.getElementById('donationInput1').value = '';
      alert('Your donation has been successful.');
  } else {
      alert('Invalid input or insufficient balance');
  }
});
// --------2nd end------------
// -------------3rd start------------
document.getElementById('DonatBTN2').addEventListener('click', function(e) {
  e.preventDefault();

  const inputValue = getInputFieldValueById('donationInput2');
  const currentTextValue = getTextFeildValueById('currentAmount2');
  const totalTextValue = getTextFeildValueById('TotalcurrentBalance');

  if (!isNaN(inputValue) && inputValue > 0 && totalTextValue >= inputValue) {
      const newDonationAmount = currentTextValue + inputValue;
      document.getElementById('currentAmount2').innerText = newDonationAmount;
      const newBalance = totalTextValue - inputValue;
      document.getElementById('TotalcurrentBalance').innerText = newBalance;

      addDonationToHistory(inputValue, 'Aid for Injured in the Quota Movement, Bangladesh');

      document.getElementById('donationInput2').value = '';
      alert('Your donation has been successful.');
  } else {
      alert('Invalid input or insufficient balance');
  }
});
// -------------3rd end--------------------
