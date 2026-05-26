import { items } from "./constants.js";
import { DefaultCard } from "../components/DefaultCard.js";
import { HorizontalCard } from "../components/HorizontalCard.js";

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
// Antes buscábamos el contenedor
// dentro del forEach.
//
// Ahora lo guardamos una sola vez
// para reutilizarlo.

export const renderElements = (isGrid: boolean) => {
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

