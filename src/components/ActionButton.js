class ActionButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --size: 20px;
      }

      .container {
        --dark-color: #150b0a;
        --light-color: #878794;
        --base-color: #3d4144;

        width: var(--size);
        height: var(--size);
        background:
          radial-gradient(var(--base-color) 55%, transparent 60%),
          linear-gradient(140deg, var(--light-color) 20%, var(--dark-color) 70%);
        box-shadow:
          0 2px 3px #0002 inset,
          0 0 1px 1px #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
      }

      .text {
        font-family: "Highway Gothic";
        text-shadow: 1px 1px 0 #000;
        font-size: 14px;
        color: #ddd;
      }

      :host(.dark) .text {
        color: #292a2e;
        font-size: 12px;
        text-shadow: 0 1px 0 #111;
      }
    `;
  }

  connectedCallback() {
    this.text = this.getAttribute("text") || "?";
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ActionButton.styles}</style>
    <div class="container">
      <div class="text">${this.text}</div>
    </div>`;
  }
}

customElements.define("action-button", ActionButton);
