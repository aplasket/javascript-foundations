const createVendingMachine = () => {
  return {
    inventory: []
  }
}

const createItemStock = (name = 'unknown', quantity = 0, price = 1.00) => {
  const item = {
    name,
    quantity,
    price
  }

  return item;
}

const  addStock = (obj, vendMachine) => {
  // check if the vending machine already has the object with same name
  const existItem = vendMachine.inventory.find(item => item.name === obj.name);

  if (existItem) {
    //if found, add more to quantity
    existItem.quantity += obj.quantity;
  } else {
    // else, add the obj to the inventory array
    vendMachine.inventory.push(obj);
  }
}

const makePurchase = (vendMachine, item, money) => {
  // check if the item is in the inventory
  const existItem = vendMachine.inventory.find(obj => obj.name === item.name);

  if (existItem) {
    //check if the inventory's quantity is >= to the selected item's quantity
    if (existItem.quantity >= item.quantity){
      // check if have enough money to purchase for the quantity selected
      const totalCost = existItem.price * item.quantity

      if (money >= totalCost){
        // decrement the inventory quantity by selected quantity
        existItem.quantity -= item.quantity;
        // collectChange(totalCost, money);
        // return a success message
        return `Here are your ${item.name}`;
      } else {
        return `Please insert more money, you need at least ${totalCost}`;
      }
    } else{
      return `sorry, that quantity is not available. ${existItem.name} has ${existItem.quantity} in stock`;
    }
  } else {
    return 'Invalid selection';
  }
}

const collectChange = (cost, money) => {
  const change = money - cost;

  return `Your change equals: ${change.toFixed(2)}`;
}

module.exports = {
  createVendingMachine,
  createItemStock,
  addStock,
  makePurchase,
  collectChange
}
