
function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1= pizzaOven ("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3= pizzaOven ('deep dish', 'alfreado', 'parmesan','spinach');
console.log(p3)

var p4= pizzaOven ('pan crust','marinara','mozarella','basil');
console.log(p4)



