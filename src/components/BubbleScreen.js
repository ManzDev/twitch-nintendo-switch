const SIZE = 125;

class BubbleScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --size: ${SIZE}px;

        position: relative;
      }

      .bubble {
        width: var(--size);
        height: var(--size);
        background: radial-gradient(var(--color) 80%, transparent 90%);
        border-radius: 50%;
        filter: blur(4px);

        position: absolute;
        transform: translate(var(--x), var(--y));
        opacity: var(--opacity);
      }
    `;
  }

  connectedCallback() {
    const bubbleSize = SIZE;
    const opacity = 25 + Math.floor(Math.random() * 50);
    console.log(bubbleSize);
    const x = Math.floor(Math.random() * 350 - bubbleSize);
    const y = Math.floor(Math.random() * 205 - bubbleSize);
    this.style.setProperty("--color", this.getAttribute("color"));
    this.style.setProperty("--opacity", `${opacity}%`);
    this.style.setProperty("--x", `${x}px`);
    this.style.setProperty("--y", `${y}px`);
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BubbleScreen.styles}</style>
    <div class="bubble"></div>`;
  }
}

customElements.define("bubble-screen", BubbleScreen);
