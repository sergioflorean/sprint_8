
import { defaultCardButton, horizontalCardButton } from "./utils/constants.js";
import {renderElements} from "./utils/utils.js";





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

renderElements(false);