import {header, footer} from './homepage';

export default function contactPage() {
    const contactPage = document.createElement('div');
    contactPage.classList = 'contactpage page';

    const main = document.createElement('div');
    main.classList = 'mainContact';

    const container = document.createElement('div');
    container.classList = 'contactContainer';

    main.append(container);
    contactPage.append(header('contact'), main,  footer());

    return contactPage;
}