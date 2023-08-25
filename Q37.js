function shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love Coding"; }
    console.log("You have ordered a ".concat(size, " shirt with the message \"").concat(text, "\" printed on it."));
}
shirt(); // large shirt with default message
shirt("Medium"); // medium shirt with default message
shirt("Small", "Programming is awesome!"); // small shirt with custom message
