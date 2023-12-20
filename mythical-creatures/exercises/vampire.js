const createVampire = (name, pet = 'bat') => {
  return {
    name,
    pet,
    isThirsty: true,
    ouncesDrank: 0
  }
}

const encounterDeliciousVictim = (vampire) => {
  if(vampire.isThirsty && vampire.ouncesDrank <= 50){
    return 'I WANT TO SUCK YOUR BLOOD!';
  } else {
    return 'No thanks I\'m too full'
  }
}

const drink = (vampire) => {
  if (vampire.ouncesDrank < 50){
    vampire.ouncesDrank += 10;
  }

  if (vampire.ouncesDrank >= 50){
    vampire.isThirsty = false;
  }

  return vampire;
}

const inquirePlace = (locations, cityName) => {
  if(locations.includes(cityName)){
    return `Yes I have spent time in ${cityName}`;
  } else {
    return `No I have never been to ${cityName}`;
  }
}

const findBatLovers = (vampires) => {
  const batLovers = vampires.filter(vamp => vamp.pet === 'bat');
  return batLovers;
}

module.exports = {
  createVampire,
  drink,
  findBatLovers,
  encounterDeliciousVictim,
  inquirePlace
}