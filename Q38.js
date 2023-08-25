function city(city, country) {
    if (country === void 0) { country = "UK"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
city("London"); // Default country
city("Aligarh", "Indua"); // Other country
city("Venice", "Italy"); // Other country
