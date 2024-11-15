class PlaceholderComponent extends HTMLElement {
  constructor() {
    super();
    const wrapper = document.createElement(this.getTagFromMimic());

    wrapper.style.backgroundColor = this.getAttribute("color") || "#ccc";
    wrapper.style.height =
      this.getAttribute("height") || this.getDefaultHeight();
    wrapper.style.width = this.getAttribute("width") || this.getDefaultWidth();

    this.applyMimicStyles(wrapper);
    this.appendChild(wrapper);
  }

  getTagFromMimic() {
    const mimic = this.getAttribute("mimic");
    switch (mimic) {
      case "footer":
        return "footer";
      case "navbar":
        return "nav";
      case "article":
        return "article";
      case "section":
        return "section";
      default:
        return "div";
    }
  }

  getDefaultHeight() {
    const mimic = this.getAttribute("mimic");
    switch (mimic) {
      case "footer":
        return "500px";
      case "navbar":
        return "70px";
      case "section":
        return "100vh";
      case "article":
        return "700px";
      default:
        return "200px";
    }
  }

  getDefaultWidth() {
    const mimic = this.getAttribute("mimic");
    return mimic === "footer" || mimic === "navbar" ? "100%" : "auto";
  }

  applyMimicStyles(element) {
    const mimic = this.getAttribute("mimic");
    switch (mimic) {
      case "navbar":
        element.style.position = "fixed";
        element.style.top = "0";
        element.style.width = "100%";
        element.style.zIndex = "1000";
        break;
      case "footer":
        element.style.position = "relative";
        break;
      case "article":
        element.style.display = "block";
        break;
      case "section":
        element.style.display = "block";
        break;
      default:
        element.style.display = "block";
        break;
    }
  }
}

customElements.define("placeholder-component", PlaceholderComponent);
