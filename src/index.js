import './styles.css';
import homePage from './homepage';
import menuPage from './menu';

const output = document.querySelector('#content');




function loadPage(page) {
    output.innerHTML = '';
    if (page === 'home')
        output.appendChild(homePage());
    else if (page === 'menu')
        output.appendChild(menuPage());
    else
        output.appendChild(contactPage());
}

document.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.home'))
        loadPage('home');
    else if (e.target === document.querySelector('.menu'))
        loadPage('menu');
    else if (e.target === document.querySelector('.contact'))
        loadPage('contact');
})
window.onload = function() {

    output.appendChild(homePage('home'));
    
}