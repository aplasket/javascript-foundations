// var assert = require('chai').assert;
// var { createDragon, greetRider, eat, findFireBreathers} = require('../exercises/dragon');
const assert = require('chai').assert;
const { createDragon, greetRider, eat, findFireBreathers} = require('../exercises/dragon');

describe ('Dragon', function() {
  describe('createDragon', function() {
    it('should be able to create a dragon with a name', function() {
      const dragon = createDragon('SuzFire');

      assert.equal(dragon.name, 'SuzFire');
    });

    it('shoudl be able to have a different name', function(){
      const dragon = createDragon('Louisa');
      assert.equal(dragon.name, 'Louisa');
    });

    it('should have a rider', function(){
      const dragon = createDragon('Lou', 'Eragon');

      assert.equal(dragon.name, 'Lou');
      assert.equal(dragon.rider, 'Eragon');
    });

    it('should be able to have a diff rider', function() {
      const dragon = createDragon('Petey', 'Pete');
      assert.equal(dragon.name, 'Petey');
      assert.equal(dragon.rider, 'Pete');
    });

    it('shoudl have a temperment', function(){
      const dragon = createDragon('Lou', 'Pete', 'gentle');

      assert.equal(dragon.name, 'Lou');
      assert.equal(dragon.rider, 'Pete');
      assert.equal(dragon.temperment, 'gentle');
    });

    it('should be able to have different temperments', function(){
      const dragon1 = createDragon('Gray', 'Marley', 'aggressive');
      const dragon2 = createDragon('Sky', 'Suze', 'gentle');

      assert.equal(dragon1.name, 'Gray');
      assert.equal(dragon2.name, 'Sky');

      assert.equal(dragon1.rider, 'Marley');
      assert.equal(dragon2.rider, 'Suze');

      assert.equal(dragon1.temperment, 'aggressive');
      assert.equal(dragon2.temperment, 'gentle');
    });

    it('should start out haven eaten 0 times', function(){
      const dragon = createDragon('Gray', 'Marley', 'aggressive');

      assert.equal(dragon.timesEaten, 0);
    });

    it('should start out being hungry', function(){
      const dragon = createDragon('Gray', 'Marley', 'aggressive');
      assert.equal(dragon.isHungry, true);
    });
  });

  describe('greetRiders', function(){
    it('should greet their rider', function() {
      const dragon1 = createDragon('Gray', 'Marley', 'aggressive');
      const dragon2 = createDragon('Sky', 'Susie', 'gentle');

      const greeting1 = greetRider(dragon1);
      const greeting2 = greetRider(dragon2);

      assert.equal(greeting1, 'Hi Marley');
      assert.equal(greeting2, 'Hi Susie');
    });
  });

  describe('eat', function () {
    it('should be full after eating 3 times', function () {
      const dragon = createDragon('Gray', 'Marley', 'aggressive');
      const fedDragon = eat(dragon);

      assert.equal(fedDragon.timesEaten, 1);
      assert.equal(fedDragon.isHungry, true);
    });

    it('should be full after eating 3 times', function(){
      const dragon = createDragon('Gray', 'Marley', 'aggressive');
      const fedDragon = eat(dragon);

      assert.equal(fedDragon.timesEaten, 1);
      assert.equal(fedDragon.isHungry, true);

      const fedDragon2 = eat(fedDragon);

      assert.equal(fedDragon2.timesEaten, 2);
      assert.equal(fedDragon2.isHungry, true);

      const fedDragon3 = eat(fedDragon2);

      assert.equal(fedDragon3.timesEaten, 3);
      assert.equal(fedDragon3.isHungry, false);
    });
  });

  describe('findFireBreathers', function () {
    it('shoudl be a firebreater if aggressive temperment', function () {
      const dragon1 = createDragon('Gray', 'Marley', 'aggressive');
      const dragon2 = createDragon('Sky', 'Susie', 'gentle');
      const dragon3 = createDragon('Mushu', 'Mulan', 'aggressive');
      const dragon4 = createDragon('Lady Vox', 'Emily', 'gentle');

      const allDragons = [dragon1, dragon2, dragon3, dragon4]
      const fireBreathers = findFireBreathers(allDragons);

      assert.deepEqual(fireBreathers, [dragon1, dragon3])
    });
  });
})