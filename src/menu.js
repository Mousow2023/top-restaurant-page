const container = document.getElementById("content");

export default function menuContent() {
    container.classList.add("menu-content")
    // Create a h1 for the menu content
    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "MENU";

    // Create a paragraph for the menu content
    const menuParagraph = document.createElement("p");
    menuParagraph.textContent = "Welcome to the menu content of our wonderful restaurant";

    container.innerHTML = "";
    container.appendChild(menuHeading);
    container.appendChild(menuParagraph);
}