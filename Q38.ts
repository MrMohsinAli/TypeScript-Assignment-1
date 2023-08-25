function city(city:string, country:string = "UK"): void 
{ 
  console.log(`${city} is in ${country}.`);
}
  
  city("London");              // Default country
  city("Aligarh","Indua");       // Other country
  city("Venice","Italy");        // Other country