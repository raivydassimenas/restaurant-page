import restaurantImage from './restaurant.jpeg';

const loadPage = function () {
  const contentDiv = document.querySelector("#content");

  const headline = document.createElement("h2");
  headline.innerText = "My cute restaurant";

  const image = new Image();
  image.src = restaurantImage;
  image.alt = 'Restaurant image';

  const text = document.createElement("p");
  text.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis facilisis egestas. Donec in ante nunc. Morbi vel odio rhoncus metus faucibus maximus. Nullam eros tortor, tincidunt sed massa et, pharetra feugiat nibh. Nunc lobortis purus et euismod rhoncus. Donec tellus ex, auctor in lacus at, luctus dignissim justo. Maecenas sodales nulla eget ex faucibus rutrum a in magna. Nulla porta sagittis consequat. Nulla facilisi. Integer accumsan venenatis egestas.";

  contentDiv.appendChild(headline);
  contentDiv.appendChild(image);
  contentDiv.appendChild(text);
};

export default loadPage;
