import imageOne from './coffee.jpg';
import imageTwo from './cafe.jpg';
import './styles.css';

export function header() {
    const header = document.createElement('div');
    header.classList = 'header';
    const title = document.createElement('span');
    title.textContent = 'SUNCAFE';
    title.classList = 'title';
    const home = document.createElement('span');
    home.textContent = 'HOME';
    home.classList = 'home normalHeading';
    home.classList.add('cover');
    const menu = document.createElement('span');
    menu.textContent = 'MENU';
    menu.classList = 'menu normalHeading';
    const contact = document.createElement('span');
    contact.textContent = 'CONTACT';
    contact.classList = 'contact normalHeading';

    header.append(title, home, menu, contact);

    return header;
}

export function footer() {
    const footer = document.createElement('div');
    footer.classList = 'footer';

    const footerText = document.createElement('p');
    footerText.classList = 'footerText';
    footerText.textContent = '@deliasoare';

    footer.appendChild(footerText);

    return footer;
}

export default function homePage() {
    const homePage = document.createElement('div');
    homePage.classList = 'homepage';

    const main = document.createElement('div');
    main.classList = 'main';
    let message = document.createElement('p');
    message.innerHTML = "Are you ready to taste the best coffee in town?"
    message.classList = 'message';

    const message2 = document.createElement('p');
    message2.textContent = "It's just a couple clicks away!";
    message2.classList = 'messageTwo';


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
    containerTwo.append(image2, message2);

    main.append(containerOne, containerTwo);


    homePage.append(header(), main, footer());
    return homePage;
}