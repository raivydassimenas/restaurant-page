import loadRestaurantTab from './restaurant';
import loadMenuTab from './menu';

const contentDiv = document.querySelector("#content");
const menuDiv = loadMenuTab();

contentDiv.append(menuDiv);