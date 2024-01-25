const switchButton = document.querySelector('.switch')
theme = 0

switchButton.addEventListener('click', ()=>{
  if(theme === 0){
    document.documentElement.style.setProperty('--text-color','#ffff')
    document.documentElement.style.setProperty('--background','black')
    switchButton.innerText = "Light Mode" 
    theme++
  }else{
    document.documentElement.style.setProperty('--text-color','#4A5568')
    document.documentElement.style.setProperty('--background','#ffff')
    switchButton.innerText = "Dark Mode"
    theme--
  }
})