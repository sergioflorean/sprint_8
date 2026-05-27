// En este ejercicio, empezarás a crear una clase para los botones de radio. Para facilitar tu trabajo, hemos preparado el archivo index.html con un nuevo <template> y actualizado constants.ts con las constantes necesarias (filterButtons, filterListSelector y filterButtonTemplate).
export class FilterButton {
    buttonClass;
    isGrid;
    buttonSelector;
    element;
    handleButtonClick;
    constructor({ data, handleButtonClick }, buttonSelector) {
        this.buttonClass = data.buttonClass;
        this.isGrid = data.isGrid;
        this.buttonSelector = buttonSelector;
        this.handleButtonClick = handleButtonClick;
    }
    getTemplate() {
        const buttonTemplate = document.querySelector(this.buttonSelector);
        const buttonElement = buttonTemplate.content
            .querySelector(".filter__button")
            .cloneNode(true);
        return buttonElement;
    }
    setEventListeners() {
        this.element.addEventListener("click", () => {
            this.handleButtonClick(this.isGrid);
        });
    }
    generateButton() {
        this.element = this.getTemplate();
        this.element.classList.add(this.buttonClass);
        this.setEventListeners();
        return this.element;
    }
}
