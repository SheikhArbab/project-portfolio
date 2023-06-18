


const menu = document.querySelector('#menu');
const list = document.querySelector('.list');

menu.addEventListener('click', () => {
    const isMenuOpen = menu.innerHTML === 'close';

    menu.innerHTML = isMenuOpen ? 'menu' : 'close';
    list.style.display = isMenuOpen ? 'none' : 'block';
});



