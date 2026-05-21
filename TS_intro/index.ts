let stationName: string = "Sierra Alta";
let currentTemp: number = 18;
let previousTemp: number = 14;
let isSensorActive: boolean = true;

// TypeScript marca un error aquí: faltan los tipos
function logEvent(message: string, type: string = "INFO"): void {
  console.log(`${type}: ${message}`);
}
const logEvent1 = (message: string): void => {
  console.log(`INFO: ${message}`);
};

// Agrega los tipos a los parámetros y el tipo de retorno
function getAverageTemperature(temp1: number, temp2: number): number {
  return (temp1 + temp2) / 2;
}

const avgTemp = getAverageTemperature(currentTemp, previousTemp);


logEvent1("Sensor conectado");
logEvent("Sistema inicializado");
// Agrega aquí una llamada para registrar "Viento fuerte" con tipo "WARN"
logEvent("Viento fuerte", "WARN");
console.log(`Estación: ${stationName}`);
console.log(`Temperatura actual: ${currentTemp}°C`);
console.log(`Temperatura promedio: ${avgTemp}°C`);
console.log(`Sensor activo: ${isSensorActive}`);