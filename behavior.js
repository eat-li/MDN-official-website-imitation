const theme = document.querySelector('.btn-theme');
const tchange = document.querySelector('.theme-change')
const btnimg = document.querySelector('.btn-theme>button img')
theme.addEventListener('click', function () {
  tchange.style.opacity = '1'

})
theme.addEventListener('blur', function () {
  tchange.style.opacity = '0'

})
console.log();
