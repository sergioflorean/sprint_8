

// encpasulacion 

class Character {
    name: string;
    characterClass: string;
    private experience: number;
    private level: number;

    constructor(name: string, characterClass: string) {
        this.name = name;
        this.characterClass = characterClass;
        this.experience = 0;
        this.level = 1;
    }

    getStats(): string {
        return `${this.name} - ${this.characterClass} (Level: ${this.level}, XP: ${this.experience})`;
    }

    gainExperience(points: number): void {
        this.experience += points;
        console.log(`${this.name} ha ganado ${points} puntos de experiencia!`);
        this.checkLevelUp();
    }

     private checkLevelUp(): void {
        if (this.experience >= this.level * 100) {
            this.level++;
            this.experience = 0; // Reinicia la experiencia después de subir de nivel
            console.log(`${this.name} ha subido al nivel ${this.level}!`);   
    }
}
}
const hero = new Character("Aragorn", "Ranger");

console.log(hero.getStats());



// Utiliza tus nuevos conocimientos para hacer que las propiedades title, artist, releaseYear, duration y isLiked de la clase Song sean privadas, ya que no son necesarias en tu código externo.

//CLASE COMO TIPO
// Primero, crea dos nuevas instancias de la clase Song debajo de song1: song2 y song3. Puedes usar tus canciones favoritas o estos datos de ejemplo:
// "Bohemian Rhapsody", "Queen", 1975, 354 segundos.
// "Smell Like Teen Spirit", "Nirvana", 1991, 301 segundos.
// A continuación, declara una constante llamada myPlaylist. Lo importante aquí es el tipo de dato: debes indicar explícitamente que esta variable almacenará un array de objetos Song.
// Finalmente, asigna a esta variable un array que contenga las tres canciones: song1, song2 y song3.

// Declara una función llamada playPlaylist(). Esta función debe aceptar un parámetro (puedes llamarlo songs) que sea explícitamente un array de objetos Song.
// Dentro de la función, utiliza el método .forEach() para recorrer el array. Para cada canción, imprime en la consola el resultado de llamar a su método getInfo().
// Finalmente, llama a la función playPlaylist() pasando tu array myPlaylist como argumento.
class Song {
    private title: string;
    private artist: string;
    private releaseYear: number;
    private duration: number;
    private isLiked: boolean

    constructor(title: string, artist: string, releaseYear: number, duration: number){
        this.title = title
        this.artist = artist
        this.releaseYear = releaseYear
        this.duration = duration
        this.isLiked = false
    }

    like() {
        this.isLiked = !this.isLiked
    }

     getInfo(): string {
    return `${this.title} - ${this.artist} (${this.getFormattedDuration()})`;
    }


    private getFormattedDuration(): string {
     const minutes = Math.floor(this.duration / 60); // el número total de minutos
     const seconds = this.duration % 60; // el resto de la división por 60
     return `${minutes}:${seconds > 9 ?  seconds : "0" + seconds}`; 
    }
    
  
}


const song1 = new Song("Imagine", "John Lennon", 1971, 183)
const song2 = new Song("Bohemian Rhapsody", "Queen", 1975, 354)
const song3 = new Song("Smell Like Teen Spirit", "Nirvana", 1991, 301)

const myPlaylist: Song[] = [song1, song2, song3]

function playPlaylist(songs: Song[]): void {
    songs.forEach(song => {
        console.log(song.getInfo())
    })
}

playPlaylist(myPlaylist)

