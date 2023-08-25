function showMagicians(magicians:string[]): void 
{
    console.log(magicians.join('\n'));
}
  
  function makeGreat(magicians:string[]):string[] 
  {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) 
    {
      greatMagicians.push(`the Great ${magicians[i]}`);
    }
    return greatMagicians;
  }
  
  function getTopMagicians(magicians:string[]):string[] 
  {
    const copyMagicians = magicians.slice();
    return makeGreat(copyMagicians);
  }
  
  const magicianNames = ["Zach King", "Jorah", "Brendon", "Jon Snow"];
  const TopMagicians = getTopMagicians(magicianNames);

  console.log("Original magicians:");
  showMagicians(magicianNames);
  
  console.log("\nGreat magicians:");
  showMagicians(TopMagicians);