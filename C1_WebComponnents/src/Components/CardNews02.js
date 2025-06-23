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
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg"
        newsImage.alt = "Foto de notícia"


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
        const style = document.createElement("style");
        style.textContent = `
            .card{
                margin-top: 15px;
                width: 720px;
                box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }

            .card_left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }

            .card_left > p {
                color: rgb(95, 95, 95);
            }

            .card_left > span {
                font-weight: 300;
                color: rgb(95, 95, 95);
            }
        `;


        return style;


    }
}

customElements.define("card-news2", Cardnews2);