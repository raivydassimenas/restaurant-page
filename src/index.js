import loadRestaurantTab from './restaurant';
import loadMenuTab from './menu';
import loadContactTab from './contact';
import "./styles.css";

const contentDiv = document.querySelector("#content");

const restaurantDiv = loadRestaurantTab();
const menuDiv = loadMenuTab();
const contactDiv = loadContactTab();

const menuBar = document.createElement("div");
menuBar.classList.add("menu-bar");

const restaurantButton = document.createElement("button");
restaurantButton.innerText = "Restaurant"
restaurantButton.addEventListener("click", e => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(menuBar);
    contentDiv.appendChild(restaurantDiv);
});
menuBar.appendChild(restaurantButton);

const menuButton = document.createElement("button");
menuButton.innerText = "Menu"
menuButton.addEventListener("click", e => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(menuBar);
    contentDiv.appendChild(menuDiv);
});
menuBar.appendChild(menuButton);

const contactButton = document.createElement("button");
contactButton.innerText = "Contact"
contactButton.addEventListener("click", e => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(menuBar);
    contentDiv.appendChild(contactDiv);
})
menuBar.appendChild(contactButton);


contentDiv.appendChild(menuBar);
contentDiv.appendChild(restaurantDiv);