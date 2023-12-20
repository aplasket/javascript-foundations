const assert = require('chai').assert;
const {createVampire, encounterDeliciousVictim, drink, inquirePlace, findBatLovers} = require('../exercises/vampire');


describe('Vampire', function() {
  describe('creatVampire', function() {
    it('should create a vampire', function() {
      const vampire = createVampire('Jhunter');
      assert.equal(vampire.name, 'Jhunter');
    });

    it('should have a pet bat as default', function() {
      const vampire = createVampire('Jhunter');
      assert.equal(vampire.pet, 'bat')
    });

    it ('should be able to take an argument for pet', function() {
      const vampire = createVampire('Michael', 'fox');
      assert.equal(vampire.pet, 'fox');
    });

    it('shoudl be thirsty', function() {
      const vampire = createVampire('Michael', 'fox');
      assert.equal(vampire.isThirsty, true);
    });

    it('should start with no ounces blood drank', function() {
      assert.equal(createVampire('Bobby').ouncesDrank, 0);
    });
  });

  describe('encounterDeliciousVictims', function() {
    it('should shout at victim when thirsty', function() {
      const vampire = createVampire('TayTay');
      const expectedResponse = 'I WANT TO SUCK YOUR BLOOD!'

      const shout = encounterDeliciousVictim(vampire)
      assert.equal(shout, expectedResponse);
    });

    it('shoudl refuse blood from a victim when not thirsty', function() {
      const vampire = createVampire('Javi');
      const drank1 = drink(vampire);
      const drank2 = drink(drank1);
      const drank3 = drink(drank2);
      const drank4 = drink(drank3);
      const drank5 = drink(drank4);

      assert.equal(drank5.ouncesDrank, 50);
      assert.equal(drank5.isThirsty, false);

      const expectedResponse = 'No thanks I\'m too full';
      const shout = encounterDeliciousVictim(drank5)
      assert.equal(shout, expectedResponse);
    });
  });

  describe('drink', function () {
    it('should drink 10 ounces of blood at a time', function () {
      const vampire = createVampire('Ringo');
      const drank1 = drink(vampire);
      assert.equal(drank1.ouncesDrank, 10);

      const drank2 = drink(drank1);
      assert.equal(drank2.ouncesDrank, 20);

      const drank3 = drink(drank2);
      assert.equal(drank3.ouncesDrank, 30);
    });

    it('should no longer be thirst after drinking 50ounces', function() {
      const vampire = createVampire('Cruz');
      const drank1 = drink(vampire);
      const drank2 = drink(drank1);
      const drank3 = drink(drank2);
      const drank4 = drink(drank3);
      const drank5 = drink(drank4);

      assert.equal(drank5.ouncesDrank, 50);
      assert.equal(drank5.isThirsty, false);
    });

    it('should not drink more ounces when not thirsty', function() {
      const vampire = createVampire('Cruz');
      const drank1 = drink(vampire);
      const drank2 = drink(drank1);
      const drank3 = drink(drank2);
      const drank4 = drink(drank3);
      const drank5 = drink(drank4);

      assert.equal(drank5.ouncesDrank, 50);
      assert.equal(drank5.isThirsty, false);

      const drank6 = drink(drank5);
      assert.equal(drank6.ouncesDrank, 50);
      assert.equal(drank6.isThirsty, false);
    });
  });

  describe('inquirePlace', function (){
    it('should say if its been to a location', function(){
      const locations = ['Transylvania', 'Washington', 'New Orleans', 'Mystic Falls'];
      const response = inquirePlace(locations, 'New Orleans');
      const expectedResponse = "Yes I have spent time in New Orleans";

      assert.deepEqual(response, expectedResponse);
    });
    it('should say if its NOT been to a location', function(){
      const locations = ['Transylvania', 'Washington', 'New Orleans', 'Mystic Falls'];
      const response = inquirePlace(locations, 'North Dakota');
      const expectedResponse = "No I have never been to North Dakota";

      assert.deepEqual(response, expectedResponse);
    });
  });

  describe('findBatLovers', function(){
    it('should be able to find vampires with bats', function(){
      const vampire1 = createVampire('Jhunter');
      const vampire2 = createVampire('Cruz', 'fox');
      const vampire3 = createVampire('Suz', 'unicorn');
      const vampire4 = createVampire('Mike');

      const batLovers = findBatLovers([vampire1, vampire2, vampire3, vampire4])
      assert.deepEqual(batLovers, [vampire1,vampire4]);
    });
  });
});