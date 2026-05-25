

//HERENCIA

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

class Mage extends Character {
    private mana: number;
    constructor(name: string, characterClass: string, mana: number) {
        super(name, characterClass);
        this.mana = mana;
    }

   castSpell(spellName: string): void {
        if (this.mana >= 20) {
            this.mana -= 20;
            console.log(`${this.name} ha lanzado el hechizo de ${spellName}! Mana restante: ${this.mana}`);
        } else {
            console.log(`${this.name} no tiene suficiente mana para lanzar ${spellName}.`);
        }
    }
}

const gandalf = new Mage("Gandalf", "Wizard", 100);
gandalf.castSpell("Fireball");
console.log(gandalf.getStats());



//HERENCIA

// Vamos a crear una clase padre para cualquier material de audio, que se llamará AudioItem, y copiemos allí todos los métodos y propiedades que pueden ser comunes tanto para las canciones como para los episodios de podcasts: las propiedades title, artist, duration y isLiked, así como los métodos like(), getInfo() y getFormattedDuration(), junto con el constructor.

// No te preocupes por ahora por hacer que la clase Song sea una clase hija usando la palabra clave extends; haremos esto en la siguiente tarea.

// En la tarea anterior, copiaste parte del código de tu clase Song a la nueva clase AudioItem. Eso significa que dentro de Song ya no necesitas ese código duplicado, así que elimínalo.

// Crea un constructor para la clase Song: utiliza la palabra clave super para que esta clase hija herede el código de AudioItem; después añade la propiedad adicional releaseYear.

// Crea una nueva clase PodcastEpisode que herede de AudioItem. Ten en cuenta que, a diferencia de las canciones, los episodios de podcast tienen un invitado (guest) en lugar de un año de lanzamiento.

// Define esta propiedad y configura el constructor para que reciba los datos en el siguiente orden: título, artista, invitado y duración.
console.log("\n----- Playlist de Canciones -----")


class AudioItem {
    private title: string;
    private artist: string;
    private duration: number;
    private isLiked: boolean;

    constructor(title: string, artist: string, duration: number) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.isLiked = false;
    }

    like(): void {
        this.isLiked = !this.isLiked;
    }

    getInfo(): string {
        return `${this.title} - ${this.artist} (${this.getFormattedDuration()})`;
    }

    private getFormattedDuration(): string {
        const minutes = Math.floor(this.duration / 60);
        const seconds = this.duration % 60;
        return `${minutes}:${seconds > 9 ? seconds : "0" + seconds}`;
    }
}

class Song extends AudioItem {
    private releaseYear: number;

    constructor(title: string, artist: string, duration: number, releaseYear: number) {
        super(title, artist, duration);
        this.releaseYear = releaseYear;
    }
}

class PodcastEpisode extends AudioItem {
    private guest: string;

    constructor(title: string, artist: string, guest: string, duration: number) {
        super(title, artist, duration);
        this.guest = guest;
    }
}

const song1 = new Song("Bohemian Rhapsody", "Queen", 354, 1975);
const song2 = new Song("Imagine", "John Lennon", 183, 1971);
const episode1 = new PodcastEpisode("The Future of Tech", "TechTalks", "Elon Musk", 3600);

console.log(song1.getInfo());
console.log(song2.getInfo());
console.log(episode1.getInfo());







