var user = ['Sheikh', 'Raja', 'Khan', 'Chaudhary', 'Gondal'];
for (var c = 0; c < user.length; c++) {
    if (user[c] === 'Sheikh') {
        console.log("Hello Sheikh,Would you like to see a status Report?");
    }
    else {
        console.log("Hello ".concat(user[c], ", thank you for logging in again."));
    }
}
