const menu = document.querySelector('.Menu');
const hdlist = document.querySelector('.hd-list');

menu.addEventListener('click',() =>{
    menu.classList.toggle('ativo');
    hdlist.classList.toggle('open');
})