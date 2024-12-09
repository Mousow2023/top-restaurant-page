// const container = document.getElementById("content");

export default function menuContent() {
    // Create an empty div
    const DIV = document.createElement("div");
    DIV.classList.add("menu-content");

    // Create a h1 for the menu content
    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "MENU";

    // Create a paragraph for the menu content
    const menuParagraph = document.createElement("p");
    menuParagraph.textContent = "Welcome to the menu content of our wonderful restaurant";

    DIV.appendChild(menuHeading);
    DIV.appendChild(menuParagraph);

    return DIV;
}