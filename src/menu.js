
import {header, footer} from './homepage';
import EspressoImg from './espresso.png';
import CaffeLatteImg from './cafeLatte.png';
import CappucinoImg from './capp.png';
import AmericanoImg from './americano.png';
import caramelMacchImg from './caramelMacchiato.png';
import irishImg from './irishCoffee.png';

export const prod = {
    Coffee: [
        addProduct(EspressoImg, 'Espresso', 5), 
        addProduct(CaffeLatteImg, 'Caffe Latte', 5),
        addProduct(CappucinoImg, 'Cappucino', 6),
        addProduct(AmericanoImg, 'Americano Coffee', 5),
        addProduct(caramelMacchImg, 'Caramel Macchiato', 7),
        addProduct(irishImg, 'Irish Coffee', 5) 
        ]
}

function addProduct(image, title, price) {
    const productContainer = document.createElement('div');
    productContainer.className = 'productCont'

    const product = document.createElement('div');
    product.className = 'product';

    const productImg = new Image()
    productImg.src = image;
    productImg.classList = 'productImg';

    const message = document.createElement('div');
    const titlePr = document.createElement('p');
    titlePr.textContent = title;
    titlePr.classList = 'productTitle';

    const pricePr = document.createElement('p');
    pricePr.textContent = `${price}$`;
    pricePr.classList = 'productPrice';

    message.append(titlePr, pricePr);
    product.append(productImg, message);
    productContainer.append(product);
    
    return productContainer;

}


export function addOption(title) {
    const li = document.createElement('li');
    const option = document.createElement('div');
    const icon = document.createElement('div');
    icon.classList = 'icon';
    const para = document.createElement('p');
    para.textContent = title;
    if (title.includes(' ')) {
        let s = title.split(' ');
        option.classList = `option ${s[0] + s[1]}`;
    }
    else
        option.classList = `option ${title}`;
    option.append(icon, para);
    li.append(option);

    return li;
}
export default function menuScreen() {
    const menu = document.createElement('div');
    menu.classList = 'menuPage page';

    const selectContainer = document.createElement('div');
    selectContainer.classList = 'selectCont';

    const def = document.createElement('ul');
    def.classList = 'default_option';
    const select = document.createElement('ul');
    select.classList = 'select_ul inactive';
    def.append(addOption('Coffee'));
    select.append(addOption('Coffee'), addOption('Other Beverages'),
    addOption('Dessert'), addOption('Add Ons'));
    selectContainer.append(def, select);

    const mainMenu = document.createElement('div');
    mainMenu.classList = 'mainMenu';


    const products = document.createElement('div');
    products.classList = 'products';  
    
    function changeMenuOption(options) {
        products.innerHTML = '';
        if (prod[options]) 
            prod[options].forEach(opt => {
                products.append(opt);
            })
    }
    
     changeMenuOption("Coffee");
     setTimeout(function() {
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                changeMenuOption(option.textContent);
            })
        })
     }, 0);

     

    mainMenu.append(selectContainer, products);


    menu.append(header('menu'), mainMenu, footer());

    return menu;
}

