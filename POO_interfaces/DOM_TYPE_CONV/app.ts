// ==========================================
// INTERFAZ PARA LOS DATOS DE CADA TARJETA
// ==========================================

// Esta interfaz define la estructura que debe
// tener cualquier producto dentro de la aplicación.
//
// Beneficios:
// - Validación de tipos
// - Autocompletado
// - Código más mantenible
// - Reutilización en otras clases y proyectos

interface CardData {
  title: string;
  description: string;
  price: string;
  image: string;
}

// ==========================================
// ARRAY TIPADO DE PRODUCTOS
// ==========================================

// El array está tipado como CardData[]
// para garantizar que todos los objetos
// tengan exactamente la misma estructura.

const items: CardData[] = [
  {
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail.jpg",
    title: "BIOLOID",
    description:
      "Robot Kit es una popular serie de kits de construcción de robots de la empresa Robotis.La serie incluye varios kits diseñados tanto para principiantes como para usuarios avanzados.En este kit, encontrarás todo lo que necesitas para construir robots únicos y hacer diseños personalizados.El set incluye un software de programación, un mando a distancia, servomotores y mucho más.",
    price: "$999",
  },
  {
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail.jpg",
    title: "BIOLOID Premium kit",
    description:
      "BIOLOID Premium Kit tiene todo lo necesario para construir robots bípedos e incluye el servomotor Dynamixel Smart y el controlador CM-530. BIOLOID Premium Kit es perfecto para la educación, el entretenimiento y las competiciones de robótica.",
    price: "$1800",
  },
  {
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail2.png",
    title: "Airwheel",
    description:
      "Este modelo de bicicleta permite utilizar tanto el pedal como el motor eléctrico, así como la combinación de ambos. La Airwheel R8 está equipada con un set de baterías desmontables, que garantizan un suministro de energía suficiente y hacen que tus viajes sean más largos.",
    price: "$2000",
  },
];

// ==========================================
// ELEMENTOS GLOBALES DEL POPUP
// ==========================================

//popup principal 
const popupElement = document.querySelector(
  ".popup",
) as HTMLElement;

//imagen dentro del popup 
const popupImage = popupElement.querySelector(
  ".popup__image",
) as HTMLImageElement;

//boton de cierre del popup
const popupCloseButton = popupElement.querySelector(
  ".popup__close",
) as HTMLButtonElement;

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

abstract class Card {

  // protected permite que las clases hijas
  // puedan acceder a estas propiedades.

  protected selector: string;
  protected element!: HTMLElement;

  // El constructor solo recibe el selector
  // del template HTML.

  constructor(selector: string) {
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

  protected getTemplate(): HTMLElement {

    // Busca el template usando el selector
    const cardTemplate = document.querySelector(
      this.selector,
    ) as HTMLTemplateElement;

    // Clona el elemento .card del template
    const cardElement = cardTemplate.content
      .querySelector(".card")!
      .cloneNode(true) as HTMLElement;

    return cardElement;
  }
  // ==========================================
// ABRIR POPUP
// ==========================================

// Usamos función flecha para no perder
// el contexto de "this"
protected handleOpenPopup = (): void => {
  const cardImage = this.element.querySelector(
    ".card__image",
  ) as HTMLImageElement;

  popupImage.src = cardImage.src;
  popupImage.alt = cardImage.alt;
  popupElement.classList.add("popup_is-opened");
};

// ==========================================
// CERRAR POPUP
// ==========================================

// Usamos función flecha para no perder
// el contexto de "this"
protected handleClosePopup = (): void => {
    popupImage.src = "";
  popupElement.classList.remove("popup_is-opened");
};

// ==========================================
// EVENT LISTENERS
// ==========================================
protected setEventListeners(): void {
    // Escucha el click en la imagen para abrir el popup
    this.element.addEventListener("click", this.handleOpenPopup);
    
    // Escucha el click en el botón de cierre del popup
    popupCloseButton.addEventListener("click", this.handleClosePopup);
}


  abstract generateCard(): HTMLElement;
}

// ==========================================
// CLASE HIJA DEFAULTCARD
// ==========================================

// Esta clase representa una tarjeta genérica
// sin un diseño específico.
//
// Hereda funcionalidades compartidas
// desde la clase padre Card usando extends.

class DefaultCard extends Card {

    private title: string;
    private image: string

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

// ==========================================
// CLASE HIJA HORIZONTALCARD
// ==========================================

// Esta clase representa específicamente
// una tarjeta horizontal.
//
// Hereda funcionalidades compartidas
// desde la clase padre Card usando extends.

class HorizontalCard extends Card {

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
// ==========================================
// CONTENEDOR PRINCIPAL
// ==========================================

// CAMBIO IMPORTANTE:
//
// Antes buscábamos el contenedor
// dentro del forEach.
//
// Ahora lo guardamos una sola vez
// para reutilizarlo.

const renderElements = (isGrid: boolean) => {
  const listContainer = document.querySelector(
    ".card-list__items",
  ) as HTMLElement;
  listContainer.innerHTML = "";

  items.forEach((item) => {
    const card = isGrid
      ? new DefaultCard(item, "#default-card")
      : new HorizontalCard(item, "#horizontal-card");

    listContainer.append(card.generateCard());
  });
};

renderElements(false);
// ==========================================
// BOTONES DE CAMBIO DE VISTA
// ==========================================

//boton para cuadricula grid 

const defaultCardButton = document.querySelector(
    ".filter__button_type_grid",
) as HTMLButtonElement;

//boton para lista horizontal

const horizontalCardButton = document.querySelector(
    ".filter__button_type_column",
) as HTMLButtonElement;


// ==========================================
// EVENTOS DE LOS BOTONES
// ==========================================

//cambia a vista de cuadricula
defaultCardButton.addEventListener("click", () => {
    renderElements(true);
});

//cambia a vista de lista horizontal
horizontalCardButton.addEventListener("click", () => {
    renderElements(false);
});