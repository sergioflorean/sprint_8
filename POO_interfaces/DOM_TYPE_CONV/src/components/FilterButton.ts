// En este ejercicio, empezarás a crear una clase para los botones de radio. Para facilitar tu trabajo, hemos preparado el archivo index.html con un nuevo <template> y actualizado constants.ts con las constantes necesarias (filterButtons, filterListSelector y filterButtonTemplate).

// Debes crear la clase FilterButton y rellenar sus métodos básicos. Encontrarás el principio del código en el archivo FilterButton.ts. Tu objetivo es finalizarlo:

// Define y exporta una interfaz FilterButtonData con dos propiedades: buttonClass (string) e isGrid (boolean).
// El constructor debe recibir dos parámetros:
// El primero es un objeto del cual debes extraer la propiedad data (de tipo FilterButtonData) utilizando la desestructuración { data }.
// El segundo parámetro es un string llamado buttonSelector.
// Guarda los valores de data.buttonClass, data.isGrid y el selector en propiedades privadas de tu clase.
// Agrega un método privado getTemplate(): HTMLButtonElement que clone el elemento .filter__button desde tu template.
// Añade un método público generateButton(): HTMLButtonElement que guarde el template en una propiedad this.element, le añada la clase CSS guardada en tu propiedad buttonClass (usando classList.add()), y devuelva el elemento.



// Nuestros botones necesitan reaccionar a los clics, pero sin acoplarse fuertemente al resto del proyecto. Lo haremos delegando la acción a un callback.

// Abre tu clase FilterButton y mejórala:

// Agrega la propiedad handleButtonClick al primer parámetro del objeto en tu constructor. Su firma debe aceptar un parámetro isGrid de tipo boolean y devolver void. Guárdala en una propiedad privada de la clase.
// Agrega el método privado setEventListeners(): void.
// Dentro de él, añade un detector de eventos "click" a this.element. Usa una función flecha (arrow function) como callback para no perder el contexto, y dentro de ella llama a this.handleButtonClick(this.isGrid).
// Llama a this.setEventListeners() dentro de tu método generateButton(), justo antes del return.
export interface FilterButtonData {
  buttonClass: string;
  isGrid: boolean;
  
}

export class FilterButton {

    private buttonClass: string;
    private isGrid: boolean;
    private buttonSelector: string;
    private element!: HTMLButtonElement;
    private handleButtonClick: (isGrid: boolean) => void;

     constructor(
        { data, handleButtonClick }: { data: FilterButtonData, handleButtonClick: (isGrid: boolean) => void },
        buttonSelector: string,
    ) {
        this.buttonClass = data.buttonClass;
        this.isGrid = data.isGrid;
        this.buttonSelector = buttonSelector;
        this.handleButtonClick = handleButtonClick;
    }

    private getTemplate(): HTMLButtonElement {
        const buttonTemplate = document.querySelector(
            this.buttonSelector,
        ) as HTMLTemplateElement;

        const buttonElement = buttonTemplate.content
            .querySelector(".filter__button")!
            .cloneNode(true) as HTMLButtonElement;

        return buttonElement;
    }

    private setEventListeners(): void {
        this.element.addEventListener("click", () => {
            this.handleButtonClick(this.isGrid);
        });
    }
    
    public generateButton(): HTMLButtonElement {
        this.element = this.getTemplate();
        this.element.classList.add(this.buttonClass);
        this.setEventListeners();
        return this.element;
     }

}
