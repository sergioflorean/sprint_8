import { Card } from "./Card.js";
import type { CardData } from "../types/types.js";

// ==========================================
// CLASE HIJA DEFAULTCARD
// ==========================================

// Esta clase representa una tarjeta genérica
// sin un diseño específico.
//
// Hereda funcionalidades compartidas
// desde la clase padre Card usando extends.

export class DefaultCard extends Card {

    private title: string;
    private image: string;

    constructor(
        { title, image }: CardData,
        selector: string,
    ) {

        // Inicializa la clase padre
        super(selector);

        // Guardamos los datos del producto
        this.title = title;
        this.image = image;
    }

    generateCard(): HTMLElement {
        this.element = this.getTemplate();

          this.setEventListeners();

        const cardImage = this.element.querySelector(
            ".card__image",
        ) as HTMLImageElement;

        const cardTitle = this.element.querySelector(
            ".card__title",
        ) as HTMLElement;

        //inserta datos 
        cardImage.src = this.image;
        cardImage.alt = this.title;
        cardTitle.textContent = this.title;

        return this.element;
    }
}