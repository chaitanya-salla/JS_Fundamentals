// // Type Conversion - Manual
// const year = "2001";
// console.log(year + 22);
// // Type Conversion through Number Function
// console.log(Number(year) + 22);
// // NaN will get
// console.log(Number("Hello"));

// // Coercion - Automatic through JS
// console.log("I am a " + 30 + " Years Old!");
// // Below all are Strings, But JS Try to do the type conversion for Us.
// console.log("33" - "20" - "10");
// console.log("33" - "20" * "10");
// console.log(("33" / "20") * "10");

// let n = "1" + 1;
// n = n - 2;
// console.log(n);

// // All Operators won't support the coersion
// console.log("2**2");
// Falsy - Falsy values are not false values but will become when we try to convert them
// Falsy Values - 0, '', undefined, null, NaN
// == vs ===
// === is Strict Equality Opertaor, because it doesn't do coersion
// == loose equality operator, it does the coersion.

// Creating Arrays
const persons = ["Chaitu", "Sravan", "Nani"];
const dob = new Array("1993", 1996, "1997");
