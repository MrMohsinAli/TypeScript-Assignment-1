let user:string[] = ['Sheikh','Raja','Khan','Chaudhary','Gondal'];

for (let c = 0; c < user.length;c++) 
{
  if (user[c] === 'Sheikh') 
  {
    console.log("Hello Sheikh,Would you like to see a status Report?");
  } 
  else 
  {
    console.log(`Hello ${user[c]}, thank you for logging in again.`);
  }
}