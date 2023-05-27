import './styles.css';
import homePage from './homepage';
import menuPage from './menu';
import contactPage from './contact';
import {addOption} from './menu';
import Favicon from './favicon.png';
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
    const options = document.querySelectorAll('.option');
    let def = document.querySelector('.default_option');
    let select = document.querySelector('.select_ul');
    def.innerHTML = '';
    def.append(addOption(option.querySelector('p').textContent));
    select.classList = 'select_ul inactive';
}
document.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.home') || e.target === document.querySelector('.title')) {
        loadPage('home');
        currentPage = 'home';
    }
    else if (e.target === document.querySelector('.menu') || e.target === document.querySelector('.menuButton')) {
        loadPage('menu');
        currentPage = 'menu';
    }
    else if (e.target === document.querySelector('.contact')) {
        loadPage('contact');
        currentPage = 'contact';
    }

    if (currentPage === "menu") {
        let def = document.querySelector('.default_option');
        let select = document.querySelector('.select_ul');
        let options = select.querySelectorAll('.option');
        
        if (e.target === def || e.target === def.children[0] || e.target === def.children[0].children[0] || e.target === def.children[0].children[0].children[0] || e.target === def.children[0].children[0].children[1])
            if (document.query=select.classList.value === 'select_ul inactive')
                select.classList = 'select_ul active';
            else
                select.classList = 'select_ul inactive';
        else 
            select.classList = 'select_ul inactive';


        options.forEach(option => {
            if (e.target === option || e.target === option.children[0] || e.target === option.children[1]) 
                changeMenu(option);
        })
    }
})

window.onload = function() {
    let link = document.createElement('link');
    link.type = 'image/x-icon';
    link.href = Favicon;
    link.rel = 'icon';
    let head = document.querySelector('head');
    head.append(link);

    output.appendChild(homePage('home'));
    
}