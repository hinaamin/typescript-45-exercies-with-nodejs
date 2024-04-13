// define the function to create a car object with optional option

function  create_car(manufacturer, model ,  ...options){
///initialize a carb object with manufacturer  and model

let car = {
    manufacturer : manufacturer,
    model : model,

};

// add the aditonal options to the car object
options.forEach(option =>{
    let [key,value] = option.split(":")
    car [key.trim( )] = value.trim();
});
return car ;
}

//call the function to create a car object
let my_car = create_car("toyota", "corrolla","color:black","sunroof:true");

//print the value
console.log(my_car);