
// Initial guest list
let Party:string[] = ["Oppenheimer","Elon Musk","Mirza Ghalib"];
//Add new guests
let moreGuests:string[] = ["John Elia","Imran Khan","Lional Messi"];

Party.unshift(moreGuests[0])
Party.splice(Math.floor(Party.length/2),0,moreGuests[1]);
Party.push(moreGuests[2]);


 for(let b=0; b < Party.length; b++)
{
console.log("\n I Found a bigger dinner table for you!")
console.log("Dear",Party[b],"\n You are invited to dinner at my place on Friday.Please be on time.\n Best regards,\n Mohsin");
}