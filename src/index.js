import "./styles.css"
import heroImage from "./hero.png"

const ImageContainer = document.querySelector(".image-container");

const image = document.createElement("img");
image.src = heroImage;

console.log(ImageContainer);
ImageContainer.appendChild(image)

console.log("Restaurant page");