export default function contanctContent() {
    const DIV = document.createElement("div");
    DIV.classList.add("contact");

    // Create a header for the contct page
    const contactHeader = document.createElement("h1");
    contactHeader.textContent = "CONTACT";

    // Create a paragraph for the contact page
    const contactParagaph = document.createElement("p");
    contactParagaph.textContent = "This is a paragraph inside the contact page of our wonderful restaurant";

    DIV.appendChild(contactHeader);
    DIV.appendChild(contactParagaph);

    return DIV
}