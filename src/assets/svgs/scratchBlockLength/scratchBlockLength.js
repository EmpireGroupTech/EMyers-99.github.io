class ScratchBlockLength extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Load the content of your HTML file into the shadow DOM
    const template = document.createElement("template");
    template.innerHTML = `
      <link rel="stylesheet" href="styles/scratch.css">
      <div id="scratch-block-length-container"></div>
    `;
    shadow.appendChild(template.content.cloneNode(true));

    // Load the content of your HTML file into the container element
    const container = shadow.getElementById("scratch-block-length-container");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "assets/svgs/scratchBlockLength/scratchBlockLength.html");
    xhr.onload = () => {
      container.innerHTML = xhr.response;
      // Any additional JavaScript for your custom element can go here
    };
    xhr.send();
  }
}

// Define your custom element
customElements.define("scratch-block-length", ScratchBlockLength);
