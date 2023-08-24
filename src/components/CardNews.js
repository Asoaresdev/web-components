// class CardNews extends HTMLElement{
//     constructor(){
//         super()

//         const shadow = this.attachShadow({mode:"open"})
//         shadow.innerHTML = "<h1>Hello World</h1>"
//     }
// }

// customElements.define("card-news", CardNews)

class CardNews extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" })
        // shadow.innerHTML = "<p>ola</p>"
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        const componentRoot = document.createElement("div")
        componentRoot.setAttribute("class", "card") //inserindo a classe card 

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card_left")

        const author = document.createElement("span")
        author.textContent = "by " + (this.getAttribute("author") || "Anonymous")

        const linkTitle = document.createElement("a")
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(author)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)

        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card_right")

        const newsImage = document.createElement("img")
        newsImage.src = this.getAttribute("photo") || "assets/default-photo.png"
        newsImage.alt = "foto do Darth Vader"
        cardRight.appendChild(newsImage)

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        return componentRoot
    }
    styles() {
        const style = document.createElement("style")
        style.textContent = `   
            .card {
                width: 80%;
                height: 290px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 10px;
                box-shadow: 8px 10px 2px -5px rgba(144,124,124,0.58);
                -webkit-box-shadow: 8px 10px 2px -5px rgba(144,124,124,0.58);
                -moz-box-shadow: 8px 10px 2px -5px rgba(144,124,124,0.58);
            }
            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding:0 15px;
            }

            .card_left > a {
                margin-top:15px;
                font-size: 25px;
                text-decoration: none;
                color: black;
                font-weight: 500;
                margin: 1rem 0 ;
            }

            .card_left > p {
                color: rgb(62, 123, 123);
                font-size: 18px;
            }
            .card_left > span {
                color: rgb(131, 156, 156);
                font-weight: 500;
            }



            img {
                width: 100%;
                height: 100%;
            }
        `


        return style
    }
}

customElements.define("card-news", CardNews)