export default function aboutContent() {
    // Create an empey div
    const DIV = document.createElement("div");
    DIV.classList.add("about");

    // // Create an header for the about
    const aboutHeader = document.createElement("h1");
    aboutHeader.textContent = "ABOUT";

    // Create a paragraph for the about page
    const aboutParagraph = document.createElement("p");
    aboutParagraph.textContent = "This is a paragraph inside the about page of our wonderful restaurant";

    DIV.appendChild(aboutHeader);
    DIV.appendChild(aboutParagraph);

    return DIV;
}