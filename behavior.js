const theme = document.querySelector('.btn-theme');
const tchange = document.querySelector('.theme-change')
const btnimg = document.querySelector('.btn-theme>button img')
theme.addEventListener('click', function () {
  tchange.style.opacity = '1'

})
theme.addEventListener('blur', function () {
  tchange.style.opacity = '0'

})
// 日间切换
const light = document.querySelector('.theme-change>li:nth-child(2)>button')
//夜间切换
const night = document.querySelector('.theme-change>li:nth-child(3)>button')
// 文字内容一的颜色
const Regional = document.querySelector('.Regional')
const Ra1 = document.querySelectorAll('.Regional-text>div ul li a')
//  文字内容二的颜色
const Ra2 = document.querySelectorAll('.Regional .text a')
const lis = document.querySelectorAll('.Regional .text>ul>li:nth-child(odd)')
//链接区域
const third = document.querySelector('.third-link')
const toper = third.children
const link = document.querySelector('.link')
const linkas = document.querySelectorAll('.link .link-container>ul li a')
//版权区域
const bolink = document.querySelector('.bottom-link')
const bolinkas = document.querySelectorAll('.btn-container a')
const bolinkspan = document.querySelectorAll('.btn-container .copyright span')


light.addEventListener('click', function () {
  Regional.style.backgroundColor = "#fff";
  Regional.style.color = '#000'
  link.style.backgroundColor = '#fff'
  bolink.style.backgroundColor = '#fff'
  toper[0].style.color = '#000'
  toper[1].style.color = '#000'
  for (let i = 0; i < Ra1.length; i++) {
    Ra1[i].style.color = '#000'
  }
  for (let i = 0; i < Ra2.length; i++) {
    Ra2[i].style.color = '#000'
  }
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = '#f9f9fb'

  }
  for (let i = 0; i < linkas.length; i++) {
    linkas[i].style.color = '#4e4e4e'
  }
  for (let i = 0; i < bolinkas.length; i++) {
    bolinkas[i].style.color = '#4e4e4e'
  }
  for (let i = 0; i < bolinkspan.length; i++) {
    bolinkspan[i].style.color = '#4e4e4e'
  }

})
night.addEventListener('click', function () {
  Regional.style.backgroundColor = "#000";
  Regional.style.color = '#fff'
  link.style.backgroundColor = '#000'
  bolink.style.backgroundColor = '#000'
  toper[0].style.color = '#fff'
  toper[1].style.color = '#fff'
  for (let i = 0; i < Ra1.length; i++) {
    Ra1[i].style.color = '#fff'
  }
  for (let i = 0; i < Ra2.length; i++) {
    Ra2[i].style.color = '#fff'
  }
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = '#4e4e4e'

  }
  for (let i = 0; i < linkas.length; i++) {
    linkas[i].style.color = '#f9f9fb'
  }
  for (let i = 0; i < bolinkas.length; i++) {
    bolinkas[i].style.color = '#f9f9fb'
  }
  for (let i = 0; i < bolinkspan.length; i++) {
    bolinkspan[i].style.color = '#f9f9fb'
  }

})






console.log(toper);
