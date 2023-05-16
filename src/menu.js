
import {header, footer} from './homepage'

export default function menuScreen() {
    const menu = document.createElement('div');
    menu.classList = 'menuPage page';

    const mainMenu = document.createElement('div');
    mainMenu.classList = 'mainMenu';

    const bg = document.createElement('div');
    bg.classList = 'backgroundMenu';

    const products = document.createElement('div');
    products.classList = 'products';

    const product1Container = document.createElement('div');
    product1Container.className = 'product1Cont productCont'

    const product1 = document.createElement('div');
    product1.className = 'product1 product';

    product1Container.append(product1);
    
    products.append(product1Container);
    bg.append(products);

    mainMenu.append(bg);


    menu.append(header('menu'), mainMenu, footer());

    return menu;
}
