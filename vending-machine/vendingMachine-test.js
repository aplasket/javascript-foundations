const assert = require('chai').assert;
const {createVendingMachine, createItemStock, addStock, makePurchase, collectChange } = require('./vendingMachine');

describe('VendingMachine', function () {
  describe('createVendingMachine', function () {
    it('should start out as an empty vending machine', function () {
      var vendMach = createVendingMachine();
      assert.deepEqual(vendMach.inventory, []);
    });
  });

  describe('createItemStock', function () {
    it('should collect details of a stocked item', function () {
      const item = createItemStock('chips', 12, 1.75);
      const expectedResult = {
        name: 'chips',
        quantity: 12,
        price: 1.75
      }

      assert.deepEqual(item, expectedResult);
    });

    it('should return defaults if nothing is passed', function () {
      const item = createItemStock();
      const expectedResult = {
        name: "unknown",
        quantity: 0,
        price: 1.00,
      };

      assert.deepEqual(item, expectedResult);
    })
  });

  describe('addSock', function () {
    it('should add the item object to the inventory array', function () {
      var vendMach = createVendingMachine();
      assert.deepEqual(vendMach.inventory, []);
      assert.equal(vendMach.inventory.length, 0);

      const item = createItemStock('chips', 12, 1.75);
      addStock(item, vendMach);

      assert.deepEqual(vendMach.inventory, [item]);
      assert.equal(vendMach.inventory.length, 1);
    });

    it('should not add duplicates of items, only add quantity if item already exists', function () {
      var vendMach = createVendingMachine();
      const item = createItemStock('chips', 12, 1.75);
      addStock(item, vendMach);
      assert.deepEqual(vendMach.inventory, [item]);

      const stockedItem = vendMach.inventory.find(obj => obj.name === item.name);
      assert.equal(stockedItem.quantity, 12);

      const item2 = createItemStock('chips', 3, 1.75);
      addStock(item2, vendMach);
      assert.deepEqual(vendMach.inventory, [item]);
      assert.equal(stockedItem.quantity, 15);
    });
  });

  describe('makePurchase', function () {
    it('should not allow purchase if item doesnot exist', function () {
      var vendMach = createVendingMachine();
      const selectedItem = {name: 'chips', quantity: 1}
      const moneyForPurchase = 0.35;
      const expectedResult = 'Invalid selection';
      const transaction = makePurchase(vendMach, selectedItem, moneyForPurchase)

      assert.equal(transaction, expectedResult);
    });

    it('should not allow purchase if quantity selected is more than available', () => {
      var vendMach = createVendingMachine();
      const item = createItemStock('chips', 2, 1.75);
      addStock(item, vendMach);
      const selectedItem = {name: 'chips', quantity: 4}
      const moneyForPurchase = 0.35;
      const expectedResult = `sorry, that quantity is not available. ${item.name} has ${item.quantity} in stock`;
      const transaction = makePurchase(vendMach, selectedItem, moneyForPurchase)

      assert.equal(transaction, expectedResult);
    });

    it('should not allow purchase if given less than price', function () {
      var vendMach = createVendingMachine();
      const item = createItemStock('chips', 12, 1.75);
      addStock(item, vendMach);

      const selectedItem = {name: 'chips', quantity: 2}
      const moneyForPurchase = 0.35;

      const expectedResult = `Please insert more money, you need at least ${(item.price * selectedItem.quantity)}`;

      const transaction = makePurchase(vendMach, selectedItem, moneyForPurchase)
      assert.equal(transaction, expectedResult);
    });

    it('allows the transaction if successful', () => {
      var vendMach = createVendingMachine();
      const item = createItemStock('chips', 12, 1.75);
      addStock(item, vendMach);
      const selectedItem = {name: 'chips', quantity: 2}
      const moneyForPurchase = 3.75;
      const transaction = makePurchase(vendMach, selectedItem, moneyForPurchase);
      const expectedResult = 'Delievered: chips, quantity: 2. Your change is: 0.25';

      assert.equal(transaction, expectedResult);
    });

    it('should decrement the available quantity in vendingMachine by selected quantity after transaction', () => {
      var vendMach = createVendingMachine();
      const item = createItemStock('chips', 12, 1.75);
      addStock(item, vendMach);

      const stockedItem = vendMach.inventory.find(obj => obj.name === item.name);
      assert.equal(stockedItem.quantity, 12);

      const selectedItem = {name: 'chips', quantity: 2}
      const moneyForPurchase = 4.00;
      makePurchase(vendMach, selectedItem, moneyForPurchase);

      assert.equal(stockedItem.quantity, 10);
    });

    it('allows another successful transaction and decrement', () => {
      var vendMach = createVendingMachine();
      const item = createItemStock('chips', 12, 1.75);
      const item2 = createItemStock('skittles', 3, 1.00);
      const item3 = createItemStock('apple', 8, 0.50);
      addStock(item, vendMach);
      addStock(item2, vendMach);
      addStock(item3, vendMach);

      const selectedItem = {name: 'skittles', quantity: 1}
      const moneyForPurchase = 1.00;

      const stockedItem = vendMach.inventory.find(obj => obj.name === selectedItem.name);
      assert.equal(stockedItem.quantity, 3);

      const transaction = makePurchase(vendMach, selectedItem, moneyForPurchase);
      const expectedResult = 'Delievered: skittles, quantity: 1. Your change is: 0.00';

      assert.equal(stockedItem.quantity, 2);
      assert.equal(transaction, expectedResult);
    });
  });

  describe('collectChange', function () {
    it('should deliver change', () => {
      var vendMach = createVendingMachine();
      const item = createItemStock('chips', 12, 1.75);
      const item2 = createItemStock('skittles', 3, 1.00);
      const item3 = createItemStock('apple', 8, 0.50);
      addStock(item, vendMach);
      addStock(item2, vendMach);
      addStock(item3, vendMach);

      const selectedItem = {name: 'apple', quantity: 1}
      const moneyForPurchase = 1.00;

      const stockedItem = vendMach.inventory.find(obj => obj.name === selectedItem.name);
      const totalCost = stockedItem.price * selectedItem.quantity;

      const change = collectChange(totalCost, moneyForPurchase);
      const expectedChangeResult = (moneyForPurchase - totalCost).toFixed(2);

      assert.equal(change, expectedChangeResult);
      assert.equal(change, 0.50);
    });
  });
});