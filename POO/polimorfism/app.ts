

//POLIMORFISMO

class Character {
    name: string;
    characterClass: string;
    protected experience: number;
    protected level: number;

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

     getStats(): string {
        const baseStats = super.getStats();
        return `${baseStats} - Mana: ${this.mana}`;
    }
}

class Warrior extends Character {
    private armor: number;
    constructor(name: string, characterClass: string, armor: number) {
        super(name, characterClass);
        this.armor = armor;
    }

    getStats(): string {
        const baseStats = super.getStats();
        return `${baseStats} - Armor: ${this.armor}`;
    }
}

const gandalf = new Mage("Gandalf", "Wizard", 100);
const aragorn = new Warrior("Aragorn", "Ranger", 50);
const bilbo = new Character("Bilbo", "Hobbit");

const party: Character[] = [gandalf, aragorn, bilbo];

console.log("\n----- Stats de la Party -----");
party.forEach(member => {
    console.log(member.getStats());
});





//POLIMORFISMO 

// En Song: Debe mostrar lo mismo que el padre, pero añadiendo el año al final entre corchetes.
// Formato deseado: Título - Artista (Duración) [Año]


// En PodcastEpisode: El formato es más complejo, ya que queremos mencionar al invitado antes de la duración.
// Formato deseado: Título - Artista - Conversación con: Invitado (Duración)


// Puedes reutilizar el método del padre con super.getInfo() o reescribir la cadena de texto desde cero accediendo a this.title, etc. Si decides acceder directamente a las propiedades del padre (title, artist) o a sus métodos (getFormattedDuration), verás que TypeScript te da un error porque son private. Para solucionarlo, tendrás que ir a la clase AudioItem y cambiarlos a protected.

// Crea dos canciones (song1 y song2) con los siguientes datos:
// "Imagine", "John Lennon", 1971, 183
// "Persiana Americana", "Soda Stereo", 1986, 292
// Crea dos episodios de podcast (episode1 y episode2) con datos divertidos sobre programación:
// "TypeScript vs JavaScript", "TypeScript Talks”, "Anders Hejlsberg", 3600
// "El misterio del tipo any", "Confesiones de un Junior", "El Senior Decepcionado", 1800
// Crea un array llamado list que contenga los 4 objetos.
// Define una función getAudioInfo que reciba un argumento audioList de tipo correcto. Dentro de la función, recorre el array y muestra en consola el resultado de getInfo() para cada elemento.
// Finalmente, llama a la función pasando tu lista.

console.log("\n----- Playlist de Canciones -----")


class AudioItem {
    protected title: string;
    protected artist: string;
    protected duration: number;
    protected isLiked: boolean;

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

    protected getFormattedDuration(): string {
        const minutes = Math.floor(this.duration / 60);
        const seconds = this.duration % 60;
        return `${minutes}:${seconds > 9 ? seconds : "0" + seconds}`;
    }
}

class Song extends AudioItem {
    private releaseYear: number;

    constructor(title: string, artist: string, releaseYear: number, duration: number ) {
        super(title, artist, duration);
        this.releaseYear = releaseYear;
    }

    getInfo(): string {
        const baseInfo = super.getInfo();
        return `${baseInfo} [${this.releaseYear}]`;
    }
}

class PodcastEpisode extends AudioItem {
    private guest: string;

    constructor(title: string, artist: string, guest: string, duration: number) {
        super(title, artist, duration);
        this.guest = guest;
    }

     getInfo(): string {
    return `${this.title} - ${this.artist} - Conversación con: ${this.guest} (${this.getFormattedDuration()})`;
  }
}

const song1 = new Song("Imagine", "John Lennon", 1971, 183);
const song2 = new Song("Persiana Americana", "Soda Stereo", 1986, 292);
const episode1 = new PodcastEpisode("TypeScript vs JavaScript", "TypeScript Talks", "Anders Hejlsberg", 3600);
const episode2 = new PodcastEpisode("El misterio del tipo any", "Confesiones de un Junior", "El Senior Decepcionado", 1800);

const list: AudioItem[] = [song1, song2, episode1, episode2];

function getAudioInfo(audioList: AudioItem[]): void {
    audioList.forEach(item => {
        console.log(item.getInfo());
    });
}

getAudioInfo(list);






