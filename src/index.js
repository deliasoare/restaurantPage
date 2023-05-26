import './styles.css';
import homePage from './homepage';
import menuPage from './menu';
import {addOption} from './menu';

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

function onMenuLoad() {
    let def = document.querySelector('.default_option');
    let select = document.querySelector('.select_ul');
    let options = select.querySelectorAll('.option');
    
        def.addEventListener('click', function() {
            if (select.classList.value === 'select_ul inactive')
                select.classList = 'select_ul active';
            else
                select.classList = 'select_ul inactive';
            })
            
            options.forEach(option => {
                option.addEventListener('click', function() {
                    changeMenu(option);
                })
            })
    }

function changeMenu(option) {
    const options = document.querySelectorAll('.option');
    let def = document.querySelector('.default_option');
    let select = document.querySelector('.select_ul');
    def.innerHTML = '';
    select.innerHTML = '';
    def.append(addOption(option.classList[1]))
    options.forEach(opt => {
        if (opt !== option) {
            select.append(addOption(opt.classList[1]));
        }
    })
}
document.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.home')) {
        loadPage('home');
        currentPage = 'home';
    }
    else if (e.target === document.querySelector('.menu') || e.target === document.querySelector('.menuButton')) {
        loadPage('menu');
        currentPage = 'menu';
        onMenuLoad();
    }
    else if (e.target === document.querySelector('.contact')) {
        loadPage('contact');
        currentPage = 'contact';
    }
})

window.onload = function() {

    output.appendChild(homePage('home'));

    
}