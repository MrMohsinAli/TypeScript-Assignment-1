function Sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Sandwich with ".concat(ingredients.join(','), " is being ordered."));
}
Sandwich("Tomato", "meat", "Bread");
Sandwich("Cheese", "Chicken");
Sandwich("Peanut Butter", "Ketchup", "Bread");
