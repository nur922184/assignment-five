const BtnColor= document.getElementById('BTN-Donate'); 
const BtnColor2= document.getElementById('BTN-history'); 
BtnColor.onclick=function(){
  localStorage.setItem('buttonColor', 'green')
  window.location.href = './index.html';
  BtnColor.style.backgroundColor = 'LightPink'; 
  // BtnColor2.style.backgroundColor = '';
};
BtnColor2.onclick=function(){
  window.location.href = './history.html';
  BtnColor2.style.backgroundColor = 'LightPink'; 
  // BtnColor.style.backgroundColor = '';
};