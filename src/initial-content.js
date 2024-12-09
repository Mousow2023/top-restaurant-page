import heroImage from "./hero.png";

export default function initialContent(container) {
    // Create the div.text-container of the homepage and set the class
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");

    // Create the h1 of the .text-container and set the content
    const mainHeader = document.createElement("h1");
    mainHeader.textContent = "Enjoy Our Delicious Meal";

    // Create the paragraph of the .text-container and set the container
    const mainParagraph = document.createElement("p");
    mainParagraph.textContent = "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet";

    // Append the header and the paragraph to the .text-container
    textContainer.appendChild(mainHeader);
    textContainer.appendChild(mainParagraph);

    // Create the .image-container element and set the class
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    // Create the img element and set the source
    const image = document.createElement("img");
    image.src = heroImage;

    // Append the image to the .image-container
    imageContainer.appendChild(image);

    // Append the .text-container and the .image-container to the #content
    container.innerHTML = "";
    container.appendChild(textContainer);
    container.appendChild(imageContainer);
};