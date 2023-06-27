const friend = ["Chaitu", "Sravan", "Vijay"];

// To Add Element at the end-> Push returns the length of an array
friend.push("Siva");
console.log(friend);

// To Add Element at start -> unshift ->
// Inserts new elements at the start of an array, and returns the new length of the array.
const len = friend.unshift("Bhola");
console.log(friend);
console.log(len);

// Removes Last element in Array -> Returns the removed element
const removed = friend.pop();
console.log(friend);
console.log(removed);

// Removes first element in Array -> shift
const shifted = friend.shift();
console.log(friend);
console.log(shifted);

// Index Of -> Returns the Index Position in Array. If element not found, will return -1
console.log(friend.indexOf("Sravan"));

// includes method returns true / false. Uses "Strict Equality Operator ==="
console.log(friend.includes("Ram"));
console.log(friend.includes("Sravan"));
