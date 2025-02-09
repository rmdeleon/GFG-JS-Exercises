class RaulWebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML = `
        <style>
            p {color:blue; border:solid}
        </style>
        <p>
            Raul's Web component
        </p>
        `
    }
}

window.customElements.define('raul-web-component', RaulWebComponent);