console.log("Hello, TypeScript 6.0.3 with ESNext modules and ES2024 target!");

let userNames: string[] = ["Alice", "Bob", "Charlie"];

let numbers: number[] = [1, 2, 3, 4, 5];

let x = [1, "two", true, { name: "Alice" }];


const redgreenblue: readonly string[] = ["red", "green", "blue"];


///TUPLAS

let tuple: [number, string, boolean] = [1, "Hello", true];

// Accessing tuple elements
console.log(tuple[0]); // Output: 1
console.log(tuple[1]); // Output: "Hello"
console.log(tuple[2]); // Output: true

let album: {name: string, artist: string, year: number} = {
    name: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: 1973
};

console.log(album.name); // Output: "The Dark Side of the Moon"
console.log(album.artist); // Output: "Pink Floyd"
console.log(album.year); // Output: 1973

let user: { name: string; age: number; isAdmin: boolean } = {
    name: "Alice",
    age: 30,
    isAdmin: true
};

console.log(user.name); // Output: "Alice"
console.log(user.age); // Output: 30
console.log(user.isAdmin); // Output: true


let stationName: string = "Sierra Alta";

// Inicializa la variable coords como una tupla con los valores: -67.18, -22.81
// Redefine la variable usando etiquetas para mayor claridad
let coords: [lat: number, long: number] = [-67.18, -22.81];

// Inicializa la variable con el tipo correcto y los valores: 18, 14, 21, 19
let readings: number[] = [18, 14, 21, 19];

let isSensorActive: boolean = true;

function logEvent(message: string, type: string = "INFO"): void {
  console.log(`${type}: ${message}`);
}

// Define el tipo del parámetro readings
function getAverageTemperature(readings: number[]): number {
  let total = 0;
  let count = 0;

  for (const reading of readings) {
    total += reading;
    count++;
  }

  if (count === 0) return 0;
  return total / count;
}

const avgTemp = getAverageTemperature(readings);

logEvent("Sistema inicializado");
console.log(`Estación: ${stationName}`);
console.log(`Latitud: ${coords[0]}`);
console.log(`Longitud: ${coords[1]}`);
console.log(`Temperatura actual: ${readings[0]}°C`);
console.log(`Temperatura promedio: ${avgTemp}°C`);
console.log(`Sensor activo: ${isSensorActive}`);