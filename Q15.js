var Dinner = ["Oppenheimer", "Elon Musk", "Mirza Ghalib"];
var next = "Newton"; //New guest
var m = Dinner.indexOf("Mirza Ghalib"); //not coming for Dinner
if (m > -1) {
    Dinner.splice(m);
}
Dinner.push(next);
for (var b = 0; b < Dinner.length; b++) {
    console.log("Dear", Dinner[b], "\n You are invited to dinner at my place on Friday.Please be on time.\n Best regards,\n Mohsin");
}
