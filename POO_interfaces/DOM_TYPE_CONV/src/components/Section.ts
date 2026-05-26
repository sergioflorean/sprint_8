// ¡Es hora de construir nuestro "motor" universal de renderizado!

// Para lograr el acoplamiento débil, necesitamos una clase que se encargue de la gestión del DOM sin estar atada a un tipo específico de tarjeta. Esta clase, llamada Section, será la encargada de recibir los datos y una "instrucción" (función callback) para dibujarlos.

// Sigue estos pasos:

// En la carpeta components, crea un nuevo archivo llamado Section.ts.
// Dentro de este archivo, crea y exporta un alias de tipo (type) llamado RendererFunction. Esta será nuestra firma de función: debe aceptar un parámetro item de tipo any y devolver void.
// Crea y exporta la clase Section.
// Declara tres propiedades privadas: renderedItems (un array de tipo any[]), renderer (del tipo RendererFunction) y container (del tipo HTMLElement).
// Crea el constructor. Debe recibir un objeto desestructurado { data, renderer } y un string containerSelector. Asigna estos valores a las propiedades de la clase (recuerda usar document.querySelector y as HTMLElement para el contenedor).
// Finalmente, añade un método público clear(): void que vacíe el contenido del contenedor (asignando "" a su innerHTML). Lo necesitaremos para no duplicar tarjetas al cambiar de vista.



