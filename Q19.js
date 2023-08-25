// Initial guest list
var party = ["Oppenheimer", "Elon Musk", "Mirza Ghalib"];
//Add new guests
var MoreGuests = ["John Elia", "Imran Khan", "Lional Messi"];
party.unshift(MoreGuests[0]);
party.splice(Math.floor(party.length / 2), 0, MoreGuests[1]);
party.push(MoreGuests[2]);
console.log("\n Number of People invited to dinner is", party.length);
