// let stationName: string = "Sierra Alta";
// let coords: [lat: number, long: number] = [-67.18, -22.81];
// let readings: number[] = [18, 14, 21, 19];
// let isSensorActive: boolean = true;
// Crea aquí el objeto station con su tipo explícito y los datos de Sierra Alta.
// Agrega la propiedad id con valor "ST-001" marcada como read only 
// Reemplaza la definición manual por el tipo GeoCoords
// Aplica la interfaz WeatherStation a la variable station
let station = 
// Borra esta definición y usa la interfaz en su lugar
{
    id: "ST-001",
    name: "Sierra Alta",
    coords: [-67.18, -22.81],
    readings: [18, 14, 21, 19],
    isSensorActive: true,
};
function logEvent(message, type = "INFO") {
    console.log(`${type}: ${message}`);
}
function getAverageTemperature(readings) {
    let total = 0;
    let count = 0;
    for (const reading of readings) {
        total += reading;
        count++;
    }
    if (count === 0)
        return 0;
    return total / count;
}
// Ahora accedemos todos a los datos a través del objeto station
const avgTemp = getAverageTemperature(station.readings);
logEvent("Sistema inicializado");
console.log(`Estación: ${station.name}`);
console.log(`Latitud: ${station.coords[0]}`);
console.log(`Longitud: ${station.coords[1]}`);
console.log(`Temperatura actual: ${station.readings[0]}°C`);
console.log(`Temperatura promedio: ${avgTemp}°C`);
console.log(`Sensor activo: ${station.isSensorActive}`);
export {};
