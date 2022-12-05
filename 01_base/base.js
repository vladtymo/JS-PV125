console.log("Hello JS from separate file.");

console.log("Some information message!");
console.warn("Some warning message!");
console.error("Some error message!");

console.log("Value: " + 333 + "!!!");   // concatination
console.log(`Value: ${333}!!!`);        // interpolation

// ---------------- variables ----------------
let empty;              // undefined
let nullObject = null;  // null

let number = 44.2;
let email = "super@ukr.net"; // '' == ""
let flag = true;
let array = [1, 2, 3];
let summ = function (a, b) { console.log(`Summ: ${a} + ${b} = ${a + b}`); }

console.log(`Empty = ${empty}, type: ${typeof(empty)}`);
console.log(`Null object = ${nullObject}, type: ${typeof(nullObject)}`);
console.log(`Number = ${number}, type: ${typeof(number)}`);
console.log(`Email = ${email}, type: ${typeof(email)}`);
console.log(`Flag = ${flag}, type: ${typeof(flag)}`);
console.log(`Array = ${array}, type: ${typeof(array)}`);
console.log(`Func = ${summ}, type: ${typeof(summ)}`);

// invoke function
summ(4, 7);

// dynamic typing - you can set and change the type of any variable

number = "hello"; //change type from number to string

let mixed = [40, 4.4, "red", "green", false, [1,2,3], summ];

console.log(mixed[5][2]); // 3

mixed[6](3, 9);

// ----------- cycles -----------
const numbers = [33, 0, -10, 50, 4, 2, 190];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(`[${i}] - ${numbers[i]}`);
// }

numbers[7] = 200; // new item
numbers[20] = 5;  // empty cells from [8]...[19]

// get all array values
// for (const item of numbers) {
//     console.log(item);
// }

// get all array indexes
// for (const index in numbers) {
//     console.log(index);
// }

console.log("Array count: " + numbers.length);

// ---------- conditions ----------
let message = (3 > 2) ? "bigger" : "less";

if (5 > 4) 
    console.log("True");
else
    console.log("False");

switch (number) {
    case 0:
        break;
    default:
        break;
}

// ---------- functions ----------
function divide(a, b) {
    if (b == 0) {
        console.error("Cannot divide by zero!");
        return;
    }
    return a + b;
}

// ---------- browser dialogs ----------

// convert from string to number: +variable

let numA = +prompt("Enter your number A:");
let numB = +prompt("Enter your number B:");

// "first" + "second" = "firstsecond";
// "100" + "10" = "10010";

console.log(typeof(numA)); // number

alert("Result: " + divide(numA, numB));