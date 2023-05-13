import './styles.css';
import imageOne from './coffee.jpg'
import imageTwo from './cafe.jpg'

function homePage() {
    const homePage = document.createElement('div');
    homePage.classList = 'homepage';

    const header = document.createElement('div');
    header.classList = 'header';
    const title = document.createElement('span');
    title.textContent = 'SUNCAFE';
    title.classList = 'title';
    const home = document.createElement('span');
    home.textContent = 'HOME';
    home.classList = 'home normalHeading';
    const menu = document.createElement('span');
    menu.textContent = 'MENU';
    menu.classList = 'menu normalHeading';
    const contact = document.createElement('span');
    contact.textContent = 'CONTACT';
    contact.classList = 'contact normalHeading';

    header.append(title, home, menu, contact);

    const main = document.createElement('div');
    main.classList = 'main';
    let message = document.createElement('p');
    message.innerHTML = "Are you ready to taste the best coffee in town? <p> It's just a couple clicks away! </p>"
    message.classList = 'message';

    const containerOne = document.createElement('div');
    containerOne.classList = 'containerOne';
    const image1 = new Image();
    image1.src = imageOne;
    image1.classList = 'imageOne';

    containerOne.append(message, image1);

    const containerTwo = document.createElement('div');
    containerTwo.classList = 'containerTwo';
    const image2 = new Image();
    image2.src = imageTwo;
    image2.classList = 'imageTwo';
    containerTwo.appendChild(image2);

    main.append(containerOne, containerTwo);

    homePage.append(header, main);
    return homePage;
}

const output = document.querySelector('#content')
output.appendChild(homePage());