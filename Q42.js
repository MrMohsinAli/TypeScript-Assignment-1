function Magicians(magicians) {
    console.log(magicians.join('\n'));
}
function MakeGreat(magicians) {
    for (var g = 0; g < magicians.length; g++) {
        magicians[g] = "the Great ".concat(magicians[g]);
    }
}
var MagicianNames = ["Zach King", "Jorah", "Brendon", "Jon Snow"];
MakeGreat(MagicianNames);
Magicians(MagicianNames);
