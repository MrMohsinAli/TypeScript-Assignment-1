var age = 18;
var Citizen = true;
var ID = false;
var Name = "Agha";
var Grade = 85;
console.log("Is age greater than or equal to 18? I predict True.");
console.log(age >= 18);
console.log("Is the person a citizen and has an ID? I predict False.");
console.log(Citizen && ID);
console.log("Is the person's name Antony? I predict True.");
console.log(Name == "Antony");
console.log("Is the person's grade greater than or equal to 50? I predict True.");
console.log(Grade >= 50);
console.log("Is the person's age less than 23? I predict True.");
console.log(age < 21);
console.log("Is the person's name not Antony? I predict False.");
console.log(Name != "Pikachu");
console.log("Is the person's grade less than 50? I predict False.");
console.log(Grade < 50);
console.log("Is the person not a citizen or does not have an ID? I predict True.");
console.log(!Citizen || !ID);
console.log("Is the person's age equal to 23? I predict False.");
console.log(age == 21);
