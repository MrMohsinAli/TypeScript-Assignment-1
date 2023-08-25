function showMagicians(magicians) {
    console.log(magicians.join('\n'));
}
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great ".concat(magicians[i]));
    }
    return greatMagicians;
}
function getTopMagicians(magicians) {
    var copyMagicians = magicians.slice();
    return makeGreat(copyMagicians);
}
var magicianNames = ["Zach King", "Jorah", "Brendon", "Jon Snow"];
var TopMagicians = getTopMagicians(magicianNames);
console.log("Original magicians:");
showMagicians(magicianNames);
console.log("\nGreat magicians:");
showMagicians(TopMagicians);
