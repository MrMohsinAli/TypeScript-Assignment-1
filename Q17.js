// Initial guest list
var guestList = ["Oppenheimer", "Elon Musk", "Mirza Ghalib", "John Elia", "Imran Khan", "Lional Messi"];
console.log("Unfortunately, due to space constraints, we can invite only two people for dinner.");
// Remove guests one at a time until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, " + removedGuest + ". We can't invite you to dinner.");
}
console.log("Dear " + guestList[0] + ", you're still invited to dinner.");
console.log("Dear " + guestList[1] + ", you're still invited to dinner.");
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the final empty list
console.log("Final guest list:", guestList);
