
import {header, footer} from './homepage';
import EspressoImg from './espresso.png';
import CaffeLatteImg from './cafeLatte.png';
import CappucinoImg from './capp.png';
import AmericanoImg from './americano.png';
import caramelMacchImg from './caramelMacchiato.png';
import irishImg from './irishCoffee.png';



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
export default function menuScreen() {
    const menu = document.createElement('div');
    menu.classList = 'menuPage page';

    const mainMenu = document.createElement('div');
    mainMenu.classList = 'mainMenu';


    const products = document.createElement('div');
    products.classList = 'products';    

    products.append(addProduct(EspressoImg, 'Espresso', 5), 
    addProduct(CaffeLatteImg, 'Caffe Latte', 5),
    addProduct(CappucinoImg, 'Cappucino', 6),
    addProduct(AmericanoImg, 'Americano Coffee', 5),
    addProduct(caramelMacchImg, 'Caramel Macchiato', 7),
    addProduct(irishImg, 'Irish Coffee', 5));


    mainMenu.append(products);


    menu.append(header('menu'), mainMenu, footer());

    return menu;
}
