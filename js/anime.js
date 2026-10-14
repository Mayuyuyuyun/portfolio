const button = document.getElementById(`addImageButton`);
const container = document.getElementById(`imageContainer`);
const imageUrl = `img/panda.png`;

button.addEventListener(`click`, function() {
    const newImage = document.createElement(`img`);
    newImage.setAttribute(`src`, imageUrl);
    newImage.setAttribute(`alt`, `photo`);
    newImage.style.margin = `5px`;
    container.appendChild(newImage);
});