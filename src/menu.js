
import {header, footer} from './homepage'

export default function menuScreen() {
    const menu = document.createElement('div');
    menu.classList = 'menuPage page';

    menu.append(header('menu'), footer());

    return menu;
}
