type CarOptions = 
  {
    [key:string]: any;
  };
  type Car = 
  {
    manufacturer:string;
    modelName:string;
    options?:CarOptions;
  };
  
  function Vehicle(manufacturer:string, modelName:string, options?:CarOptions): Car 
  {
    return {manufacturer, modelName, options};
  }
  const VehicleDetails = Vehicle("Honda","Civic",{color:"Black",features:["Top Speed", "Sunroof"]});
  
  console.log(VehicleDetails);