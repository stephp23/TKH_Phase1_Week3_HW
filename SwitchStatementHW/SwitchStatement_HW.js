let restaurantItemChoice = prompt("What restaurant food item would you like?");

let restaurantItem = restaurantItemChoice.toLowerCase();
let price;

switch (restaurantItem) {
  case "burger":
    price = `The ${restaurantItem} will be $10.`;
    break;
  case "steak":
    price = `The ${restaurantItem} will be $25.`;
    break;
  case "salmon":
    price = `The ${restaurantItem} will be $20.`;
    break;
  case "shrimp":
    price = `The ${restaurantItem} will be $20.`;
    break;
  case "chicken":
    price = `The ${restaurantItem} will be $15.`;
    break;
  default:
    price = `The ${restaurantItem} is not available at this time.`;
}

alert(price);
