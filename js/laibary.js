document.getElementById('BTN-Donate').addEventListener('click', function(){
    showSectionById('DonatinalSection');
  })
  document.getElementById('BTN-history').addEventListener('click', function(){
    showSectionById('HistorySection');
  })

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
function showSectionById(id){
    document.getElementById('DonatinalSection').classList.add('hidden'); 
    document.getElementById('HistorySection').classList.add('hidden'); 
    
    // show the section with the privides the id
    document.getElementById(id).classList.remove('hidden')
}

function getFormattedDate() {
    const now = new Date();
    return now.toLocaleString("en-BD", { timeZone: "Asia/Dhaka" });
  }
  function addDonationToHistory(amount, cause) {
    const historySection = document.getElementById('YourHistory');
    
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('border', 'rounded-lg', 'p-4', 'mb-4');
  
    const title = document.createElement('p');
    title.classList.add('font-bold', 'text-lg');
    title.innerText = `${amount} Taka is Donated for ${cause}`;
  
    const date = document.createElement('p');
    date.classList.add('text-sm', 'text-gray-500');
    date.innerText = `Date: ${getFormattedDate()}`;
  
    entryDiv.appendChild(title);
    entryDiv.appendChild(date);
    historySection.appendChild(entryDiv);
  }