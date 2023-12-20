const createDragon = (name, rider, temperment) => {
  return {
    name,
    rider,
    temperment,
    timesEaten: 0,
    isHungry: true
  };
};

const greetRider = (dragon) => {
  return `Hi ${dragon.rider}`;
};

const eat = (dragon) => {
  dragon.timesEaten++;

  if(dragon.timesEaten === 3){
    dragon.isHungry = false;
  }
  return dragon;
};

const findFireBreathers = (allDragons) => {
  const fireBreathers = allDragons.filter(dragon => {
    return dragon.temperment === 'aggressive';
  })
  return fireBreathers;
};
module.exports = {
  createDragon,
  greetRider,
  eat,
  findFireBreathers
}