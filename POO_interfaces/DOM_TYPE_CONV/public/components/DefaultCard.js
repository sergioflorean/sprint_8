import { Card } from "./Card.js";
// ==========================================
// CLASE HIJA DEFAULTCARD
// ==========================================
// Esta clase representa una tarjeta genérica
// sin un diseño específico.
//
// Hereda funcionalidades compartidas
// desde la clase padre Card usando extends.
export class DefaultCard extends Card {
    title;
    image;
    constructor({ title, image }, selector) {
        // Inicializa la clase padre
        super(selector);
        // Guardamos los datos del producto
        this.title = title;
        this.image = image;
    }
    generateCard() {
        this.element = this.getTemplate();
        this.setEventListeners();
        const cardImage = this.element.querySelector(".card__image");
        const cardTitle = this.element.querySelector(".card__title");
        //inserta datos 
        cardImage.src = this.image;
        cardImage.alt = this.title;
        cardTitle.textContent = this.title;
        return this.element;
    }
}
