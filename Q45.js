function Vehicle(manufacturer, modelName, options) {
    return { manufacturer: manufacturer, modelName: modelName, options: options };
}
var VehicleDetails = Vehicle("Honda", "Civic", { color: "Black", features: ["Top Speed", "Sunroof"] });
console.log(VehicleDetails);