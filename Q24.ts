let string1 = "Cinematic";
let string2 = "Universe";
let number1 = 25;
let number2 = 10;
let array1 = [1, 2, 3, 4, 5];
let array2 = ["Apple", "Apricot", "Mango"];

console.log("Is string1 equal to 'Cinematic'?" + (string1 == "hello"));
console.log("Is string2 not equal to 'Cinematic'?" + (string2 != "hello"));
console.log("Is number1 greater than number2?" + (number1 > number2));
console.log("Is number2 less than or equal to 10?" + (number2 <= 10));
console.log("Is number1 between 8 and 30?" + (number1 > 8 && number1 < 30));
console.log("Is string1 equal to 'Cinematic' and string2 equal to 'Universe'?" + (string1 == "Cinematic" && string2 == "Universe"));
console.log("Is the number 3 in array1?" + (array1.includes(3)));
console.log("Is the string 'Orange' in array2?" + (array2.includes("Orange")));