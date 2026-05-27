import {
  items,
  filterButtons,
  filterListSelector,
  filterButtonTemplate,
} from "./utils/constants.js";
import { DefaultCard } from "./components/DefaultCard.js";
import { HorizontalCard } from "./components/HorizontalCard.js";
import { Section } from "./components/Section.js";
import type { CardData } from "./types/types.js";
import {
  FilterButton,
  type FilterButtonData,
} from "./components/FilterButton.js";

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

const filterList = new Section<FilterButtonData>(
  {
    data: filterButtons,
    renderer: (item) => {
      const filterButton = new FilterButton(
        {
          data: item,
          handleButtonClick: (isGrid: boolean) => {
            if (isGrid) {
              defaultCardList.renderItems();
            } else {
              horizontalCardList.renderItems();
            }
          },
        },
        filterButtonTemplate,
      );
      const filterButtonElement = filterButton.generateButton();
      filterList.setItem(filterButtonElement);
    },
  },
  filterListSelector,
);

filterList.renderItems();
defaultCardList.renderItems();
