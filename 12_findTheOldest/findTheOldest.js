const currentYear = new Date().getFullYear();

const findTheOldest = function(people) {
  let oldest = people[0];
  let oldestAge = getPersonAge(oldest);

  for (let person of people.slice(1)) {
    const age = getPersonAge(person);
    if (age > oldestAge) { 
      oldest = person;
      oldestAge = age;
    }
  }
  return oldest;
};

function getPersonAge(person) {
  if ("yearOfDeath" in person) {
    return person.yearOfDeath - person.yearOfBirth;
  } else {
    return currentYear - person.yearOfBirth;
  }
}

// Do not edit below this line
module.exports = findTheOldest;
