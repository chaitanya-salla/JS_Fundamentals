const person = ["Chaitu", "Sravan", "Nani"];

for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}

// Continue -> Exist the current iteration and moves to next iteration
const dataTypes = ["Chaitu", true, 30, 40, "Hello"];
for (let i = 0; i < dataTypes.length; i++) {
  if (typeof dataTypes[i] === "boolean") continue;
  console.log(dataTypes[i]);
}

// break -> Exist the loop
for (let i = 0; i < dataTypes.length; i++) {
  if (typeof dataTypes[i] === "boolean") break;
  console.log(dataTypes[i]);
}
