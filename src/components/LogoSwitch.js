class LogoSwitch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        margin: 0;
        display: grid;
        place-items: center;
        align-content: center;
        gap: 10px;
        width: 350px;
        height: 205px;
      }

      .logo {
        --color: white;
        --size: 75px;
        --gap: calc(var(--size) / 12.5);
        --border: calc(var(--size) / 15);
        --size-ball: calc(var(--size) / 3.75 - var(--gap));
        --radius: calc(var(--size) / 3.5);

        display: grid;
        grid-template-columns: 1fr 1fr;
        width: var(--size);
        height: var(--size);
        gap: var(--gap);
        position: relative;
      }

      .logo .left {
        background: transparent;
        border: var(--border) solid var(--color);
        border-radius: var(--radius) 0 0 var(--radius);
      }

      .logo .left:after {
        content: "";
        display: block;
        background: var(--color);
        width: var(--size-ball);
        height: var(--size-ball);
        border-radius: 100%;
        position: relative;
        top: calc(var(--size) / 4 - var(--size-ball) / 2);
        left: calc(calc((var(--size) / 2 - var(--gap)) / 2 - var(--size-ball) / 2) - 3px);
      }

      .logo .right {
        background: var(--color);
        border-radius: 0 var(--radius) var(--radius) 0;

        -webkit-mask-image: radial-gradient(circle at 50% 60%, transparent 16%, #000 18%);
      }

      .logo .right:after {
        content: "";
        display: none;
        background: red;
        width: var(--size-ball);
        height: var(--size-ball);
        border-radius: 100%;
        position: relative;
        top: calc(var(--size) / 2 - var(--size-ball) / 3);
        left: calc((var(--size) / 2 - var(--gap)) / 2 - var(--size-ball) / 2);
      }

      .logotext {
        font-family: "Highway Gothic Expanded";
        color: #fff;
        text-align: center;
        line-height: 110%;
      }

      .logotext div:nth-child(1) {
        font-size: 12px;
        letter-spacing: 5px;
      }

      .logotext div:nth-child(2) {
        font-size: 24px;
        letter-spacing: 1px;
      }

      .logotext span {
        font-size: 6px;
        color: #ccc;
        display: inline-block;
        transform: translate(-1px, 1.5px);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${LogoSwitch.styles}</style>
    <div class="logo">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="logotext">
      <div>NINTENDO</div>
      <div>SWITCH<span>™</span></div>
    </div>
    `;
  }
}

customElements.define("logo-switch", LogoSwitch);
