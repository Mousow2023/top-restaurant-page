import "./styles.css";
import initialContent from "./initial-content.js";
import menuContent from "./menu.js";
import aboutContent from "./about.js";

const container = document.getElementById("content")

document.addEventListener("DOMContentLoaded", initialContent(container));

// Listen to when the menu button is clicked
const menuButton = document.querySelector(".menu");
menuButton.addEventListener("click", function () {
    container.innerHTML = "";
    container.appendChild(menuContent());
});

// Listen to when the menu button is clicked
const homeButton = document.querySelector(".home");
homeButton.addEventListener("click", function () {
    initialContent(container);
});

// Listen to when the about button is clicked
const aboutButton = document.querySelector(".about");
aboutButton.addEventListener("click", function () {
    container.innerHTML = "";
    container.appendChild(aboutContent())
});