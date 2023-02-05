(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --size: 45px;
      }

      .container {
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        border: 2px solid #000;
        box-shadow: 0 0 5px #000c;
        background: linear-gradient(#4f4d4c, #161615);
      }

      .center {
        display: grid;
        place-items: center;
      }

      .inner {
        --size: 75%;

        width: var(--size);
        height: var(--size);
        border: 1px inset #555;
        border-radius: 50%;
        background: #424348;
        box-shadow:
          0 -1px 2px #0004 inset,
          0 1px 2px #fff4 inset,
          0 -2px 2px #fff3,
          0 -2px 6px #0009 inset;
        position: relative;
      }

      .gap {
        background: #131210;
        width: 2px;
        height: 5px;
        position: absolute;
      }

      .gap:nth-child(1) {
        top: -5px;
        background: linear-gradient(to top, #444, #111);
      }

      .gap:nth-child(2),
      .gap:nth-child(3) {
        width: 5px;
        height: 2px;
      }

      .gap:nth-child(2) { left: -5px; }
      .gap:nth-child(3) { right: -5px; }

      .gap:nth-child(4) {
        bottom: -5px;
        background: #111;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <div class="container center">
      <div class="inner center">
        <div class="gap"></div>
        <div class="gap"></div>
        <div class="gap"></div>
        <div class="gap"></div>
      </div>
    </div>`}}customElements.define("stick-pad",a);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.text=this.getAttribute("text")||"?",this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="container">
      <div class="text">${this.text}</div>
    </div>`}}customElements.define("action-button",n);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: grid;
        justify-content: end;
      }

      .container {
        margin-top: 0.5em;
        margin-right: 0.7em;
        width: 85%;
        display: grid;
        gap: 6px;
        grid-template-rows: 25px 70px 70px 30px;
      }

      .location {
        justify-self: end;
      }

      .minus {
        font-family: "Highway Gothic";
        font-size: 2rem;
        color: #424447;
        filter:
          drop-shadow(1px 0px 0 #000)
          drop-shadow(0 1px 0 #000)
          drop-shadow(0 0 0 #000);
        transform: scaleX(0.5);
      }

      .buttons-container {
        display: grid;
        margin-left: 0.7em;
        grid-template-columns: repeat(3, 22px);
        grid-template-rows: repeat(3, 22px);
        grid-template-areas:
          ". x ."
          "y . a"
          ". b .";
      }

      .buttons-container action-button:nth-child(1) { grid-area: x }
      .buttons-container action-button:nth-child(2) { grid-area: y }
      .buttons-container action-button:nth-child(3) { grid-area: a }
      .buttons-container action-button:nth-child(4) { grid-area: b }

      .stick-container {
        display: grid;
        place-items: center;
      }

      .record-container {
        justify-self: end;
      }

      .record-button {
        --size: 20px;

        width: var(--size);
        height: var(--size);
        border-radius: 3px;
        background: #3c363a;
        border: 1px solid #201f1f;

        display: grid;
        place-items: center;
      }

      .record-button .circle {
        --size: 62%;

        background: #27272b;
        border: 1px solid #1a1a1a;
        border-radius: 50%;
        width: var(--size);
        height: var(--size);
        box-shadow: 0 1px 1px #fff4;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="container">
      <div class="location">
        <div class="minus">—</div>
      </div>
      <div class="stick-container">
        <stick-pad></stick-pad>
      </div>
      <div class="buttons-container">
        <action-button class="dark" text="▲"></action-button>
        <action-button class="dark" text="◄"></action-button>
        <action-button class="dark" text="►"></action-button>
        <action-button class="dark" text="▼"></action-button>
      </div>
      <div class="record-container">
        <div class="record-button">
          <div class="circle"></div>
        </div>
      </div>
    </div>`}}customElements.define("joy-con-left",d);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {

      }

      .container {
        margin-top: 0.5em;
        margin-left: 0.25em;
        width: 85%;
        display: grid;
        gap: 6px;
        grid-template-rows: 25px 70px 70px 30px;
      }

      .plus {
        font-family: "Highway Gothic";
        font-size: 2rem;
        color: #424447;
        filter:
          drop-shadow(1px 0px 0 #000)
          drop-shadow(0 1px 0 #000)
          drop-shadow(0 0 0 #000);
      }

      .location {

      }

      .buttons-container {
        display: grid;
        margin-left: 0.7em;
        grid-template-columns: repeat(3, 22px);
        grid-template-rows: repeat(3, 22px);
        grid-template-areas:
          ". x ."
          "y . a"
          ". b .";
      }

      .buttons-container action-button:nth-child(1) { grid-area: x }
      .buttons-container action-button:nth-child(2) { grid-area: y }
      .buttons-container action-button:nth-child(3) { grid-area: a }
      .buttons-container action-button:nth-child(4) { grid-area: b }

      .stick-container {
        display: grid;
        place-items: center;
      }

      .home-container {
        margin-left: 1em;
      }

      .home-container .circle-button {
        --size: 16px;

        border-radius: 50%;
        width: var(--size);
        height: var(--size);
        background: #363a3c;
        display: grid;
        place-items: center;
        border: 3px solid #8a878f;
        box-shadow: 0 0 0 1px #444;
      }

      .home-container svg {
        transform: scale(0.85);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="container">
      <div class="location">
        <div class="plus">+</div>
      </div>
      <div class="buttons-container">
        <action-button text="X"></action-button>
        <action-button text="Y"></action-button>
        <action-button text="A"></action-button>
        <action-button text="B"></action-button>
      </div>
      <div class="stick-container">
        <stick-pad></stick-pad>
      </div>
      <div class="home-container">
        <div class="circle-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"/></svg>
        </div>
      </div>
    </div>`}}customElements.define("joy-con-right",c);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --round-size: 50px;

        position: relative;
        display: grid;
      }

      :host(.right) {
        justify-items: right;
      }

      :host(.left) {
        justify-items: left;
      }

      .container {
        width: 100%;
        height: 100%;
        background: var(--color);
      }

      /* Right JoyCon */
      :host(.right) .container {
        --color: #de5e53;

        border-radius:
          var(--small-round-size)
          var(--round-size)
          var(--round-size)
          var(--small-round-size);

        box-shadow:
          -6px -8px 5px #0006 inset,
          0 6px 3px #fff6 inset;
      }

      /* Left JoyCon */
      :host(.left) .container {
        --color: #67b9de;

        border-radius:
          var(--round-size)
          var(--small-round-size)
          var(--small-round-size)
          var(--round-size);

        box-shadow:
          6px -8px 5px #0006 inset,
          0 6px 3px #fff6 inset;
      }

      .trigger {
        width: 80%;
        height: 17%;
        background: #000;
        position: absolute;
        z-index: -1;
      }

      :host(.right) .trigger {
        transform: translate(2px, -5px);
        border-radius: 4px var(--round-size) 0 0;
        border: 2px solid #222;
        background: radial-gradient(circle, #3a4547, #1c1a25);
        transition: transform 0.25s;
      }

      :host(.right) .trigger:active {
        transform: translate(2px, -1px);
      }

      :host(.left) .trigger {
        transform: translate(-2px, -5px);
        border-radius: var(--round-size) 4px 0 0;
        border: 2px solid #222;
        background: radial-gradient(circle, #3a4547, #1c1a25);
        transition: transform 0.25s;
      }

      :host(.left) .trigger:active {
        transform: translate(-2px, -1px);
      }
    `}connectedCallback(){this.render(),this.addContent()}addContent(){const r=this.shadowRoot.querySelector(".container"),i=this.classList.contains("left")?"<joy-con-left></joy-con-left>":"<joy-con-right></joy-con-right>";r.insertAdjacentHTML("afterbegin",i)}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="trigger"></div>
    <div class="container">
    </div>`}}customElements.define("joy-controller",l);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="logo">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="logotext">
      <div>NINTENDO</div>
      <div>SWITCH<span>™</span></div>
    </div>
    `}}customElements.define("logo-switch",p);const b=125;class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --size: ${b}px;

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
    `}connectedCallback(){const r=b,o=25+Math.floor(Math.random()*50);console.log(r);const i=Math.floor(Math.random()*350-r),t=Math.floor(Math.random()*205-r);this.style.setProperty("--color",this.getAttribute("color")),this.style.setProperty("--opacity",`${o}%`),this.style.setProperty("--x",`${i}px`),this.style.setProperty("--y",`${t}px`),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
    <div class="bubble"></div>`}}customElements.define("bubble-screen",h);class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --screen-size: 92%;
        --width: 450px;
      }

      :host(.off) .screen {
        background: linear-gradient(to right, #161616, #1e1e1e);
      }

      .container {
        height: 100%;
        background: linear-gradient(
          to top,
          #232428 3%,
          #333436 4% 96%,
          #555555 98%,
          #333436 99.5%
        );
        border-radius: var(--small-round-size);

        -webkit-mask-image:
          radial-gradient(ellipse 50% 100% at 100% 0, transparent 5%, #000 5.5%),
          radial-gradient(ellipse 50% 100% at 0 0, transparent 5%, #000 5.5%);
        -webkit-mask-composite: source-in;
        /* Future support */
        mask-image:
          radial-gradient(ellipse 50% 100% at 100% 0, transparent 5%, #000 5.5%),
          radial-gradient(ellipse 50% 100% at 0 0, transparent 5%, #000 5.5%);
        mask-composite: add;
      }

      .center {
        display: grid;
        place-items: center;
      }

      .crystal {
        width: calc(var(--screen-size) * 1.02);
        height: calc(var(--screen-size) * 0.98);
        border-top: 2px solid #222;
        border-bottom: 2px solid #484848;
        background: #000;
        border-radius: 6px;
      }

      .screen {
        background: linear-gradient(#111, #151515);
        width: calc(var(--screen-size) * 0.88);
        height: calc(var(--screen-size) * 0.9);
        overflow: hidden;
      }

      .volume-container {
        width: 40px;
        height: 15px;
        border-bottom: 1px solid #000;
        position: absolute;
        transform: translate(65px, -15px);
        z-index: -1;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: end;
      }

      :is(.volume-down, .volume-up) {
        background: #000;
        height: 1px;
      }

      logo-switch {
        position: absolute;
        z-index: 5;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${u.styles}</style>
    <div class="power button"></div>
    <div class="volume-container button">
      <div class="volume-up"></div>
      <div class="volume-divider"></div>
      <div class="volume-down"></div>
    </div>
    <div class="container center">
      <div class="crystal center">
        <div class="screen">
          <logo-switch></logo-switch>
          <bubble-screen color="#303c26"></bubble-screen>
          <bubble-screen color="#284741"></bubble-screen>
          <bubble-screen color="#20346f"></bubble-screen>
          <bubble-screen color="#bf4e3d"></bubble-screen>
          <bubble-screen color="#3d3161"></bubble-screen>
          <bubble-screen color="#2f2e5f"></bubble-screen>
          <bubble-screen color="#1f3833"></bubble-screen>
        </div>
      </div>
    </div>`}}customElements.define("switch-screen",u);class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --joycon-width: 100px;
        --small-round-size: 6px;
        --width: 665px;
        --height: 275px;
      }

      .container {
        display: grid;
        grid-template-columns: var(--joycon-width) 1fr var(--joycon-width);
        width: var(--width);
        height: var(--height);
        filter: drop-shadow(6px 6px 8px #0006);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${g.styles}</style>
    <div class="container">
      <joy-controller class="left"></joy-controller>
      <switch-screen></switch-screen>
      <joy-controller class="right"></joy-controller>
    </div>`}}customElements.define("switch-console",g);
