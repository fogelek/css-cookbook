class DarkModeSwitch extends HTMLElement {
  className = "css-cookbook-dark-mode-defs";

  constructor() {
    super();

    if (!document.getElementsByClassName(this.className + "-svg").length) {
      const defs = document.createElement("svg");
      defs.classList.add(this.className + "-svg");
      document.body.prepend(defs);
    }
    if (!document.getElementsByClassName(this.className + "-style").length) {
      const defs = document.createElement("style");
      defs.classList.add(this.className + "-style");
      document.body.prepend(defs);
    }
  }

  connectedCallback() {
    this.innerHTML = `Hello world!`;
  }
}

customElements.define("dark-mode-switch", DarkModeSwitch);
