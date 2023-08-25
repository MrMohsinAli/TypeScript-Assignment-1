function Magicians(magicians:string[]): void 
 {
    console.log(magicians.join('\n'));
 }
  
 function MakeGreat(magicians:string[]): void 
  {
    for (let g = 0; g < magicians.length; g++) 
    {
      magicians[g] = `the Great ${magicians[g]}`;
    }
  }
  const MagicianNames = ["Zach King", "Jorah", "Brendon", "Jon Snow"];
  
  MakeGreat(MagicianNames);
  Magicians(MagicianNames);