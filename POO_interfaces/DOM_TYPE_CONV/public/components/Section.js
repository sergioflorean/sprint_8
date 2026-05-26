// ¡Es hora de construir nuestro "motor" universal de renderizado!
export class Section {
    renderedItems;
    renderer;
    container;
    constructor({ data, renderer }, containerSelector) {
        this.renderedItems = data;
        this.renderer = renderer;
        this.container = document.querySelector(containerSelector);
    }
    clear() {
        this.container.innerHTML = "";
    }
    // Tu tarea es añadir dos métodos públicos a la clase Section:
    // setItem(element: HTMLElement): void: Este método es muy sencillo. Toma el elemento HTML que recibe por parámetro y lo inserta dentro de la propiedad this.container utilizando el método append().
    // renderItems(): void: Este es el cerebro de la clase. Primero, debe llamar al método this.clear() para limpiar el contenedor. Luego, debe iterar sobre el array this.renderedItems utilizando el método forEach(). Por cada elemento del array, simplemente debe llamar a nuestra función instructora externa pasándole el elemento actual: this.renderer(item).
    renderItems() {
        this.clear();
        this.renderedItems.forEach((item) => {
            this.renderer(item);
        });
    }
    setItem(element) {
        this.container.append(element);
    }
}
