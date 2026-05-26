// ¡Es hora de construir nuestro "motor" universal de renderizado!

// Para lograr el acoplamiento débil, necesitamos una clase que se encargue de la gestión del DOM sin estar atada a un tipo específico de tarjeta. Esta clase, llamada Section, será la encargada de recibir los datos y una "instrucción" (función callback) para dibujarlos.

// Sigue estos pasos:

// En la carpeta components, crea un nuevo archivo llamado Section.ts.
// Dentro de este archivo, crea y exporta un alias de tipo (type) llamado RendererFunction. Esta será nuestra firma de función: debe aceptar un parámetro item de tipo any y devolver void.
// Crea y exporta la clase Section.
// Declara tres propiedades privadas: renderedItems (un array de tipo any[]), renderer (del tipo RendererFunction) y container (del tipo HTMLElement).
// Crea el constructor. Debe recibir un objeto desestructurado { data, renderer } y un string containerSelector. Asigna estos valores a las propiedades de la clase (recuerda usar document.querySelector y as HTMLElement para el contenedor).
// Finalmente, añade un método público clear(): void que vacíe el contenido del contenedor (asignando "" a su innerHTML). Lo necesitaremos para no duplicar tarjetas al cambiar de vista.


// Tu objetivo es modificar el archivo Section.ts:

// Convierte el alias RendererFunction y la clase Section para que acepten un parámetro de tipo genérico (por convención, <T>).
// Reemplaza todas las apariciones estáticas de any con este nuevo tipo dinámico T. Debes actualizar el tipo del array de datos (renderedItems), el parámetro del callback y la firma del constructor.
// De esta forma, Section se convertirá en un "molde" que se adaptará al tipo de datos que le pasemos al instanciarla.
export type RendererFunction<T> = (item: T) => void;

export class Section<T> {
  private renderedItems: T[];
  private renderer: RendererFunction<T>;
  private container: HTMLElement;

  constructor(
    { data, renderer }: { data: T[]; renderer: RendererFunction<T> },
    containerSelector: string,
  ) {
    this.renderedItems = data;
    this.renderer = renderer;
    this.container = document.querySelector(containerSelector) as HTMLElement;
  }

  clear(): void {
    this.container.innerHTML = "";
  }


// Tu tarea es añadir dos métodos públicos a la clase Section:

// setItem(element: HTMLElement): void: Este método es muy sencillo. Toma el elemento HTML que recibe por parámetro y lo inserta dentro de la propiedad this.container utilizando el método append().
// renderItems(): void: Este es el cerebro de la clase. Primero, debe llamar al método this.clear() para limpiar el contenedor. Luego, debe iterar sobre el array this.renderedItems utilizando el método forEach(). Por cada elemento del array, simplemente debe llamar a nuestra función instructora externa pasándole el elemento actual: this.renderer(item).


renderItems(): void {
    this.clear();

    this.renderedItems.forEach((item) => {
      this.renderer(item);
    });
  }

  setItem(element: HTMLElement): void {
    this.container.append(element);
  }
}
