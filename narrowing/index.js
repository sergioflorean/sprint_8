let station = {
    id: "ST-001",
    name: "Sierra Alta",
    coords: [-67.18, -22.81],
    readings: [18, 14, 21, 19],
    isSensorActive: true,
};
// Actualiza el tipo del parámetro type para usar LogType
function logEvent(message, type = "INFO") {
    console.log(`${type}: ${message}`);
}
function getAverageTemperature(readings) {
    let total = 0;
    let count = 0;
    for (const reading of readings) {
        if (typeof reading === "number") {
            total += reading;
            count++;
        }
    }
    if (count === 0)
        return 0;
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
export {};
