
import {header, footer} from './homepage';
import EspressoImg from './espresso.png';
import CaffeLatteImg from './cafeLatte.png';
import CappucinoImg from './capp.png';
import AmericanoImg from './americano.png';
import caramelMacchImg from './caramelMacchiato.png';
import irishImg from './irishCoffee.png';
import Mojito from './Mojito.png';
import PinaColada from './pinaColada.png';
import Slushie from './Slushie.png';
import StrawberryMilkshake from './strawberryMilkshake.png';
import Water from './water.png';
import WatermelonLemonade from './watermelonLemonade.png';
import Coke from './coke.png';
import Cheesecake from './Cheesecake.png';
import PannaCotta from './PannaCotta.png';
import Cupcake from './Cupcake.png';
import PuddingCremeCaramel from './PuddingCremeCaramel.png';
import RedVelvetCheesecake from './RedVelvetCheesecake.png';
import Milk from './Milk.png';
import Sugar from './Sugar.png';
import WhippedCream from './WhippedCream.png';
import CoffeeBeans from './CoffeeBeans.png';
import CocoaPowder from './CocoaPowder.png';
import AlmondMilk from './AlmondMilk.png';

export const prod = {
    Coffee: [
        addProduct(EspressoImg, 'Espresso', 5), 
        addProduct(CaffeLatteImg, 'Caffe Latte', 5),
        addProduct(CappucinoImg, 'Cappucino', 6),
        addProduct(AmericanoImg, 'Americano Coffee', 5),
        addProduct(caramelMacchImg, 'Caramel Macchiato', 7),
        addProduct(irishImg, 'Irish Coffee', 5) 
        ],
    "Other Beverages": [
        addProduct(Water, 'Water', 3),
        addProduct(Coke, 'Coke', 4),
        addProduct(WatermelonLemonade, "Watermelon Lemonade", 8),
        addProduct(StrawberryMilkshake, 'Strawberry Milkshake', 9),
        addProduct(Slushie, 'Slushie', 7),
        addProduct(Mojito, 'Mojito', 9),
        addProduct(PinaColada, 'Pina Colada', 9)
    ],
    Dessert: [
        addProduct(Cupcake, 'Cupcake', 6),
        addProduct(PannaCotta, 'Panna Cotta', 8),
        addProduct(Cheesecake, 'Cheesecake', 9),
        addProduct(PuddingCremeCaramel, 'Pudding Creme Caramel', 9),
        addProduct(RedVelvetCheesecake, 'Red Velvet Cheesecake', 10)
    ],
    "Add Ons": [
        addProduct(Milk, 'Extra Milk', 2),
        addProduct(AlmondMilk, 'Almond Milk', 4),
        addProduct(Sugar, 'Extra sugar', 2),
        addProduct(WhippedCream, 'Whipped Cream', 4),
        addProduct(CoffeeBeans, 'Coffee Beans', 4),
        addProduct(CocoaPowder, 'Cocoa Powder', 3)
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

