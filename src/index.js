import loadRestaurantTab from './restaurant';
import loadMenuTab from './menu';
import loadContactTab from './contact';

const contentDiv = document.querySelector("#content");
const restaurantDiv = loadRestaurantTab();
const menuDiv = loadMenuTab();
const contactDiv = loadContactTab();

contentDiv.append(contactDiv);