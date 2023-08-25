function Sandwich(...ingredients:string[]): void 
{
  console.log(`Sandwich with ${ingredients.join(',')} is being ordered.`);
}
  Sandwich("Tomato","meat","Bread");
  Sandwich("Cheese","Chicken");
  Sandwich("Peanut Butter","Ketchup","Bread");