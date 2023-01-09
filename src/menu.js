import sushiImageUnsplash from './vinicius-benedit-sushi-unsplash.jpg';
import nigiriImageUnsplash from './crystal-jo-nigiri-unsplash.jpg';
import "./styles.css";

const loadMenuTab = function() {
    const menuDiv = document.createElement('div');

    const sushi = document.createElement('div');

    const sushiHeader = document.createElement('h2');
    sushiHeader.innerText = "Sushi";
    sushi.appendChild(sushiHeader);

    const sushiImage = new Image();
    sushiImage.src = sushiImageUnsplash;
    sushiImage.alt = "Sushi image";
    sushi.appendChild(sushiImage);

    const sushiText = document.createElement('p');
    sushiText.innerText = "Aliquam in nisl ac lacus placerat tincidunt. Etiam maximus pharetra cursus. Sed lectus tortor, porttitor pretium porttitor id, ultrices eu leo. Donec id diam erat. Nulla facilisi. Vestibulum viverra dolor pulvinar, congue turpis a, posuere dui.";
    sushi.appendChild(sushiText);
    
    const sushiImageCopyright = document.createElement('p');
    sushiImageCopyright.innerHTML = 'Photo by <a href="https://unsplash.com/@viniciusbenedit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vinicius Benedit</a> on <a href="https://unsplash.com/s/photos/sushi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    sushi.appendChild(sushiImageCopyright);

    sushi.classList.add("menu-item");

    menuDiv.appendChild(sushi);

    const nigiri = document.createElement('div');

    const nigiriHeader = document.createElement('h2');
    nigiriHeader.innerText = "Nigiri";
    nigiri.appendChild(nigiriHeader);

    const nigiriImage = new Image();
    nigiriImage.src = nigiriImageUnsplash;
    nigiriImage.alt = "Nigiri image";
    nigiri.appendChild(nigiriImage);

    const nigiriText = document.createElement('p');
    nigiriText.innerText = "n hac habitasse platea dictumst. Ut ultricies mauris malesuada, sodales dolor et, accumsan tellus. Suspendisse potenti. Duis vitae ipsum mollis, vulputate nibh in, mollis leo. Suspendisse pharetra leo et ante porta consectetur. Donec id malesuada quam.";
    nigiri.appendChild(nigiriText);

    const nigiriImageCopyright = document.createElement('p');
    nigiriImageCopyright.innerHTML = 'Photo by <a href="https://unsplash.com/@crystalsjo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Crystal Jo</a> on <a href="https://unsplash.com/s/photos/nigiri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    nigiri.appendChild(nigiriImageCopyright);

    nigiri.classList.add("menu-item");

    menuDiv.appendChild(nigiri);

    menuDiv.classList.add("tab");

    return menuDiv;
};

export default loadMenuTab;