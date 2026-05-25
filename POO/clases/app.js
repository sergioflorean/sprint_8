const character1 = {
    name: "Aragorn",
    characterClass: "Ranger",
    experience: 1500
};
const character2 = {
    name: "boromoir",
    characterClass: "warrior",
    experience: 1200
};
console.log(character1);
console.log(character2);
// CLASES. 
class CharacterClass {
    name;
    characterClass;
    experience;
    constructor(name, characterClass, experience) {
        this.name = name;
        this.characterClass = characterClass;
        this.experience = experience;
    }
    levelUp() {
        this.experience += 500;
    }
}
const character3 = new CharacterClass("Gandalf", "Wizard", 2000);
console.log(character3);
character3.levelUp();
console.log(character3);
const character4 = new CharacterClass("Legolas", "Archer", 1800);
console.log(character4);
character4.levelUp();
console.log(character4);
// Agrega las propiedades releaseYear y duration (ambas de tipo number) al inicio de la clase.
// Luego, actualiza el método constructor() añadiendo estos dos parámetros al final. El parámetro releaseYear almacenará el año de lanzamiento, y duration la duración en segundos.
// Finalmente, asigna los valores de estos parámetros a las propiedades usando this.
// Crea una constante llamada mySong. Inicialízala creando una nueva instancia de la clase Song con los siguientes datos:
// Title: "Imagine"
// Artist: "John Lennon"
// Year: 1971
// Duration: 183
// Luego imprime mySong en la consola para ver el resultado.
//     Primero, declara la propiedad isLiked al inicio de la clase. Luego, dentro del método constructor(), utiliza this para asignar a isLiked el valor inicial de false.
// A continuación, fuera del método constructor(), pero aún trabajando dentro de tu clase, añade el método like() para que cuando sea llamado, el valor de la propiedad isLiked sea cambiado al valor opuesto.
// getInfo() debe devolver una descripción de la canción con el siguiente formato: Imagine - John Lennon (183 s). No olvides rodear tu string de caracteres con comillas y rodear los valores de tus propiedades con ${}.
// Finalmente, en lugar de imprimir el objeto completo con console.log(mySong), imprime en la consola el resultado de llamar al método mySong.getInfo().
//Haz que la función getFormattedDuration() sea un método de la clase Song. Llama a este método dentro del método getInfo() en lugar de this.duration. ¡No te olvides de utilizar this cuando lo llames!
class Song {
    title;
    artist;
    releaseYear;
    duration;
    isLiked;
    constructor(title, artist, releaseYear, duration) {
        this.title = title;
        this.artist = artist;
        this.releaseYear = releaseYear;
        this.duration = duration;
        this.isLiked = false;
    }
    like() {
        this.isLiked = !this.isLiked;
    }
    getInfo() {
        return `${this.title} - ${this.artist} (${this.getFormattedDuration()})`;
    }
    getFormattedDuration() {
        const minutes = Math.floor(this.duration / 60); // el número total de minutos
        const seconds = this.duration % 60; // el resto de la división por 60
        return `${minutes}:${seconds > 9 ? seconds : "0" + seconds}`;
    }
}
const mySong = new Song("Imagine", "John Lennon", 1971, 183);
console.log(mySong.getInfo());
export {};
