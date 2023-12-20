const createDragon = (name, rider, temperment) => {
  return {
    name,
    rider,
    temperment
  };
};

const greetRider = (dragon) => {
  return `Hi ${dragon.rider}`;
};

module.exports = {
  createDragon,
  greetRider,
  // eat,
  // findFireBreathers
}