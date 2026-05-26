import { Card } from "./Card.js";
import type { CardData } from "../types/types.js";
// ==========================================
// CLASE HIJA HORIZONTALCARD
// ==========================================

// Esta clase representa específicamente
// una tarjeta horizontal.
//
// Hereda funcionalidades compartidas
// desde la clase padre Card usando extends.

export class HorizontalCard extends Card {

  // Estas propiedades pertenecen únicamente
  // a la tarjeta horizontal.

  private title: string;
  private description: string;
  private price: string;
  private image: string;

  constructor(
    { title, description, price, image }: CardData,
    selector: string,
  ) {

    // Inicializa la clase padre
    super(selector);

    // Guardamos los datos del producto
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
  }

  // ==========================================
  // GENERAR TARJETA
  // ==========================================

  // Este método:
  // 1. Obtiene el template
  // 2. Busca elementos internos
  // 3. Inserta la información dinámica
  // 4. Devuelve la tarjeta lista

  generateCard(): HTMLElement {

    // Obtiene una copia del template HTML
    this.element = this.getTemplate();

      this.setEventListeners();

    // ==========================================
    // SELECCIÓN DE ELEMENTOS
    // ==========================================

    const cardImage = this.element.querySelector(
      ".card__image",
    ) as HTMLImageElement;

    const cardTitle = this.element.querySelector(
      ".card__title",
    ) as HTMLElement;

    const cardInfo = this.element.querySelector(
      ".card__info",
    ) as HTMLElement;

    const cardPrice = this.element.querySelector(
      ".card__price-property",
    ) as HTMLElement;

    // ==========================================
    // INSERCIÓN DE DATOS
    // ==========================================

    // Imagen
    cardImage.src = this.image;
    cardImage.alt = this.title;

    // Textos
    cardTitle.textContent = this.title;
    cardInfo.textContent = this.description;
    cardPrice.textContent = this.price;

    // Devuelve la tarjeta terminada
    return this.element;
  }
}