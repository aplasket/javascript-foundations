const createHobbit = (name, age = 0) => {
  return {
    name,
    age,
    acquaintances: [],
  };
}

const meetPeople = (hobbit, people) => {
  people.forEach(person => hobbit.acquaintances.push(person));
  return hobbit;
}

const findFriends = (hobbit) => {
  const friends = hobbit.acquaintances
  .filter(person => person.relationship === 'friend')
  .map(friend => friend.name);

  return friends;
}

module.exports = {
  createHobbit,
  // celebrateBirthday,
  // getRing,
  meetPeople,
  findFriends
}