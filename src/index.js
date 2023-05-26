import './styles.css';
import homePage from './homepage';
import menuPage from './menu';

const output = document.querySelector('#content');

let currentPage = 'home';

function loadPage(page) {
    output.innerHTML = '';
    if (page === 'home')
        output.appendChild(homePage());
    else if (page === 'menu')
        output.appendChild(menuPage());
    else
        output.appendChild(contactPage());
}
function changeMenu(option) {
    
}
document.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.home')) {
        loadPage('home');
        currentPage = 'home';
    }
    else if (e.target === document.querySelector('.menu') || e.target === document.querySelector('.menuButton')) {
        loadPage('menu');
        currentPage = 'menu'
    }
    else if (e.target === document.querySelector('.contact')) {
        loadPage('contact');
        currentPage = 'contact';
    }
    else if (currentPage === 'menu') {
        let def = document.querySelector('.default_option');
        let select = document.querySelector('.select_ul');
        let options = select.querySelector('.option');
        
        if (e.target === def || e.target === def.children[0].children[0]) {
            if (select.classList.value === 'select_ul inactive')
                select.classList = 'select_ul active';
            else
                select.classList = 'select_ul inactive';
        }
        options.forEach(option => {
            if (e.target === option)
                changeMenu(option);
        })
    }
})
window.onload = function() {

    output.appendChild(homePage('home'));
    
}