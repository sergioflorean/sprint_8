
import { defaultCardButton, horizontalCardButton, popupElement, popupImage } from "./utils/constants.js";
import { Section } from "./components/Section.js";
import { DefaultCard } from "./components/DefaultCard.js";
import { HorizontalCard } from "./components/HorizontalCard.js";
import { items } from "./utils/constants.js";
import type { CardData } from "./types/types.js";

// Es el momento de poner a prueba nuestra nueva arquitectura. Abre tu archivo principal src/index.ts.
// Ya no usaremos la función renderElements, así que puedes borrar su importación y su llamada. En su lugar, crearemos dos instancias de Section que se encargarán de todo.

// Importa la clase Section, además de DefaultCard, HorizontalCard y la constante items.
// Crea una instancia de Section llamada defaultCardList. Pásale items en la propiedad data. En la propiedad renderer, pásale una función flecha que reciba (item: any), cree una instancia de DefaultCard, genere el elemento y lo inserte usando defaultCardList.setItem(cardElement).
// Haz exactamente lo mismo para crear una segunda instancia llamada horizontalCardList, pero esta vez el renderer debe crear una HorizontalCard.
// El segundo argumento del constructor para ambas instancias debe ser el selector ".card-list__items".
// En los detectores de eventos de tus botones (defaultCardButton y horizontalCardButton), reemplaza la antigua lógica por llamadas a renderItems() en la instancia correspondiente (defaultCardList o horizontalCardList).
// Llama a defaultCardList.renderItems() al final del archivo para mostrar la cuadrícula por defecto.


// Importa tu interfaz CardData desde el archivo de tipos.
// Al crear las instancias de defaultCardList y horizontalCardList, pásales la interfaz CardData como argumento de tipo genérico a la clase Section.
// Inferencia de tipos: Al decirle a la clase qué datos contiene, TypeScript automáticamente sabe qué es cada elemento. Ve a tus funciones renderer y elimina la anotación de tipo : any del parámetro item. ¡Deja que TypeScript infiera el tipo por ti!


const defaultCardList = new Section<CardData>(
  {
    data: items,
    renderer: (item) => {
      const card = new DefaultCard(item, "#default-card");
      const cardElement = card.generateCard();
      defaultCardList.setItem(cardElement);
    },
  },
  ".card-list__items",
);

const horizontalCardList = new Section<CardData>(
  {
    data: items,
    renderer: (item) => {
      const card = new HorizontalCard(item, "#horizontal-card");
      const cardElement = card.generateCard();
      horizontalCardList.setItem(cardElement);
    },
  },
  ".card-list__items",
);

defaultCardList.renderItems();


// ==========================================
// EVENTOS DE LOS BOTONES
// ==========================================

//cambia a vista de cuadricula
defaultCardButton.addEventListener("click", () => {
    defaultCardList.renderItems();
});

//cambia a vista de lista horizontal
horizontalCardButton.addEventListener("click", () => {
    horizontalCardList.renderItems();
});

defaultCardList.renderItems();   
