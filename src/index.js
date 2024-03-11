import "./style.css";

const contentContainer = document.getElementById("content");
const testContent = document.createElement("p");
testContent.innerHTML = "Hello from Webpack!";
contentContainer.appendChild(testContent);
