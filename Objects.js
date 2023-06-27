const person = {
  firstName: "Chaithanya",
  lastName: "Kumar",
  age: 2023 - 1993,
  friends: ["Sravan", "Nani"],
};

const person2 = {
  firstName: "Sruthi",
  lastName: "Sri Raman",
  age: 2023 - 1993,
  friends: ["Sravan", "Nani"],
  gender: "Female",
};

console.log(person);
// Dot Notation for data retrieval
console.log(person.lastName);
// Bracket Notation
console.log(person["firstName"]);
console.log(person["College"]);
console.log(person);

// Add Property through dot notation. If Key not found it will add.
person.city = "Nellore";
console.log(person);
// If key found, It will replace the value
person.city = "Chillakur";
console.log(person);

// Add Property through bracket notation. If Key not found it will add.
person["gender"] = "Female";
console.log(person);
// If key found, It will replace the value
person["gender"] = "Male";
console.log(person);

console.log(
  `${person.firstName} has ${person.friends.length} friends, and his best friend is ${person.friends[0]}`
);

const getInfo = (p) => {
  return `${p.firstName} is a ${p.age} old ${p.gender}`;
};

console.log(getInfo(person));
console.log(getInfo(person2));
