import {header, footer} from './homepage';

export default function contactPage() {
    const contactPage = document.createElement('div');
    contactPage.classList = 'contactpage page';

    const main = document.createElement('div');
    main.classList = 'mainContact';

    const container = document.createElement('div');
    container.classList = 'contactContainer';

    const location = document.createElement('div');
    location.innerHTML = '<p class="heading">Location</p> 17 SunStreet <br> 1234 The Milky Way';

    const hours = document.createElement('div');
    hours.innerHTML = '<p class="heading"> Hours</p> 7am- 10pm Monday to Friday <br> 9am - 9pm Saturday <br> Closed Sunday';

    const contact = document.createElement('div');
    contact.innerHTML = '<p class="heading">Contact</p> 1234-555-678 <br> sunCafe@yahoo.com';

    container.append(location, hours, contact);
    main.append(container);
    contactPage.append(header('contact'), main,  footer());

    return contactPage;
}