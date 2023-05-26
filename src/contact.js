import {header, footer} from './homepage';

export default function contactPage() {
    const contactPage = document.createElement('div');
    contactPage.classList = 'contactpage page';

    contactPage.append(header('contact'), footer());

    return contactPage;
}