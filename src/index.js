import "./styles.css";
import initialContent from "./initial-content.js";
import menuContent from "./menu.js";

document.addEventListener("DOMContentLoaded", initialContent);

// Listen to when the menu button is clicked
const menuButton = document.querySelector(".menu");
menuButton.addEventListener("click", menuContent);