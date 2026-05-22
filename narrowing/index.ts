type GeoCoords = [lat: number, long: number];
// Define el tipo de unión LogType con los valores: "INFO", "WARN" o "ERROR"
type LogType = "INFO" | "WARN" | "ERROR";
// Define el tipo SensorReading ue pueda ser number o string
type SensorReading = number | string;

interface WeatherStation {
  id: string;
  name: string;
  coords: GeoCoords;
    // Actualiza para usar un array con valores de tipo SensorReading
  readings: SensorReading[];
  isSensorActive: boolean;
}

let station: WeatherStation = {
  id: "ST-001",
  name: "Sierra Alta",
  coords: [-67.18, -22.81],
  readings: [18, 14, 21, 19],
  isSensorActive: true,
};

// Actualiza el tipo del parámetro type para usar LogType
function logEvent(message: string, type: LogType = "INFO"): void {
  console.log(`${type}: ${message}`);
}

function getAverageTemperature(readings: SensorReading[]): number {
  let total = 0;
  let count = 0;

  for (const reading of readings) {
    if (typeof reading === "number") {
      total += reading;
      count++;
    }
  }

  if (count === 0) return 0;
  return total / count;
}

const avgTemp = getAverageTemperature(station.readings);

logEvent("Sistema inicializado");
console.log(`Estación: ${station.name}`);
console.log(`ID: ${station.id}`);
console.log(`Latitud: ${station.coords[0]}`);
console.log(`Longitud: ${station.coords[1]}`);
console.log(`Temperatura actual: ${typeof station.readings[0] === "number" ? `${station.readings[0]}°C` : station.readings[0]}`);
console.log(`Temperatura promedio: ${avgTemp}°C`);
console.log(`Sensor activo: ${station.isSensorActive}`);
