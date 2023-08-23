class TituloDinamico  extends HTMLElement {
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"})

        const componentRoot = document.createElement("h1")
        componentRoot.textContent = "Andréa"

        const style = document.createElement("style")
        style.textContent = `
            h1{
                color: green;
            }
        `

        shadow.appendChild(componentRoot)
        shadow.appendChild(style)
    }
}

customElements.define("titulo-dinamico", TituloDinamico)