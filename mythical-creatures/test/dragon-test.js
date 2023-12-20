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

})


//   it.skip('should start off having eaten 0 times', function() {
//     var dragon = createDragon('Mushu', 'Mulan', 'aggressive');

//     assert.equal(dragon.timesEaten, 0);
//   });

//   it.skip('should start off being hungry', function() {
//     var dragon = createDragon('Mushu', 'Mulan', 'aggressive');

//     assert.equal(dragon.hungry, true);
//   });

//   it.skip('should be full after eating 3 times', function() {
//     var dragon = createDragon('Lady Vox', 'Emily', 'gentle');

//     var fedDragon = eat(dragon);

//     assert.equal(fedDragon.timesEaten, 1);
//     assert.equal(fedDragon.hungry, true);

//     var doubleFedDragon = eat(fedDragon);

//     assert.equal(doubleFedDragon.timesEaten, 2);
//     assert.equal(doubleFedDragon.hungry, true);

//     var tripleFedDragon = eat(doubleFedDragon);

//     assert.equal(tripleFedDragon.timesEaten, 3);
//     assert.equal(tripleFedDragon.hungry, false);
//   });

//   //Spicy:
//   it.skip('should be a fireBreather if aggressive in temperment', function() {
//     var dragon1 = createDragon('Gray', 'Marley', 'aggressive');
//     var dragon2 = createDragon('Sky', 'Susie', 'gentle');
//     var dragon3 = createDragon('Mushu', 'Mulan', 'aggressive');
//     var dragon4 = createDragon('Lady Vox', 'Emily', 'gentle');

//     var allDragons = [dragon1, dragon2, dragon3, dragon4];

//     var fireBreathers = findFireBreathers(allDragons);

//     assert.deepEqual(fireBreathers, [dragon1, dragon3])
//   });
// });
