
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

export interface CardData {
  title: string;
  description: string;
  price: string;
  image: string;
}
