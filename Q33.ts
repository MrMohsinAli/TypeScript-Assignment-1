let nums:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let v = 0; v < nums.length; v++) 
{

  let ordinal: string;
  if (nums[v] === 1) 
  {
    ordinal = "st";
  } 
  
  else if (nums[v] === 2) 
  {
    ordinal = "nd";
  } 

  else if (nums[v] === 3) 
  {
    ordinal = "rd";
  } 
  
  else 
  {
    ordinal = "th";
  }
  console.log(nums[v],ordinal);
}