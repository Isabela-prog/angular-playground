// essa classe se comportará como um elemento HTML
class CardNews extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<h1>Hello World</h1>";
    }
}

// card-news -> como será chamado no index
customElements.define('card-news', CardNews);