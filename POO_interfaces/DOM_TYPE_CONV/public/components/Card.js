import { popupElement, popupImage, popupCloseButton } from "../utils/constants.js";
// ==========================================
// CLASE PADRE CARD
// ==========================================
// Esta clase contiene la lógica compartida
// para cualquier tipo de tarjeta.
//
// Aquí centralizamos:
// - acceso al template
// - selector del template
// - elemento HTML generado
//
// Esto evita duplicar código en futuras clases:
// - HorizontalCard
// - DefaultCard
// - ProductCard
// etc.
export class Card {
    // protected permite que las clases hijas
    // puedan acceder a estas propiedades.
    selector;
    element;
    // El constructor solo recibe el selector
    // del template HTML.
    constructor(selector) {
        this.selector = selector;
    }
    // ==========================================
    // OBTENER TEMPLATE
    // ==========================================
    // Este método:
    // 1. Busca el template en el DOM
    // 2. Clona el elemento .card
    // 3. Devuelve una copia lista para usar
    // protected permite reutilizar este método
    // desde cualquier clase hija.
    getTemplate() {
        // Busca el template usando el selector
        const cardTemplate = document.querySelector(this.selector);
        // Clona el elemento .card del template
        const cardElement = cardTemplate.content
            .querySelector(".card")
            .cloneNode(true);
        return cardElement;
    }
    // ==========================================
    // ABRIR POPUP
    // ==========================================
    // Usamos función flecha para no perder
    // el contexto de "this"
    handleOpenPopup = () => {
        const cardImage = this.element.querySelector(".card__image");
        popupImage.src = cardImage.src;
        popupImage.alt = cardImage.alt;
        popupElement.classList.add("popup_is-opened");
    };
    // ==========================================
    // CERRAR POPUP
    // ==========================================
    // Usamos función flecha para no perder
    // el contexto de "this"
    handleClosePopup = () => {
        popupImage.src = "";
        popupElement.classList.remove("popup_is-opened");
    };
    // ==========================================
    // EVENT LISTENERS
    // ==========================================
    setEventListeners() {
        // Escucha el click en la imagen para abrir el popup
        this.element.addEventListener("click", this.handleOpenPopup);
        // Escucha el click en el botón de cierre del popup
        popupCloseButton.addEventListener("click", this.handleClosePopup);
    }
}
