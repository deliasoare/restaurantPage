import './styles.css';
import HomePage from './homepage.js'

function changeCover(headings) {
    headings.forEach(heading => {
        heading.addEventListener('click', () => {
            headings.forEach(heading2 => {
                if (heading === heading2)
                    heading2.classList.add('cover');
                else
                    heading2.classList.remove('cover');
            })
        })
    })
}


document.addEventListener('DOMContentLoaded', () => {
    const output = document.querySelector('#content')
    output.appendChild(HomePage());
    
    const headings = document.querySelectorAll('.normalHeading');

    changeCover(headings);
})
