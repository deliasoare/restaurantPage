
import {header, footer} from './homepage';
import EspressoImg from './espresso.jpg';
import CaffeLatteImg from './caffeLatte.jpg';
import CappucinoImg from './cappuccino.jpg';



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

    products.append(addProduct(EspressoImg, 'Espresso', 5), addProduct(CaffeLatteImg, 'Caffe Latte', 5), addProduct(CappucinoImg, 'Cappucino', 6));


    mainMenu.append(products);


    menu.append(header('menu'), mainMenu, footer());

    return menu;
}
