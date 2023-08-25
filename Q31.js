var UserNames = ['Sheikh', 'Raja', 'Khan', 'Chaudhary', 'Gondal'];
//uncomment to verify statement
/*if (usernames.length === 0) {
    console.log("We need to find some users!");
}*/
for (var s = 0; s < UserNames.length; s++) {
    if (UserNames[s] === 'Khan') {
        console.log("Hello Khan, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(UserNames[s], ",Thank you for logging in again."));
    }
}
if (UserNames.length === 0) {
    console.log("We need to find some users!");
}
