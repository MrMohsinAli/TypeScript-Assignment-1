function shirt(size:string = "Large",text:string = "I love Coding"): void 
{
  console.log(`You have ordered a ${size} shirt with the message "${text}" printed on it.`);
}
  shirt();                 // large shirt with default message
  shirt("Medium");            // medium shirt with default message
  shirt("Small", "Programming is awesome!");             // small shirt with custom message