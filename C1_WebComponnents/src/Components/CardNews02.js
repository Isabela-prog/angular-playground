class Cardnews2 extends HTMLElement{
    //método construtor
    constructor(){
        super();

        const shadow = this.attachShadow({ mode:"open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    //método build -> costruir elementos do HTML
    build(){
        const componentRoot = document.createElement("div");
        //dar o nome do elementoroot de card (como a div no html) para poder estilizar
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const newsImage = document.createElement("img");

        //dizer para o método que os cards são filhos do componentRoot
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        cardRight.appendChild(newsImage);

        return componentRoot;
    }

    //método style -> aplicar estilos
    styles(){

    }
}

customElements.define("card-news2", Cardnews2);