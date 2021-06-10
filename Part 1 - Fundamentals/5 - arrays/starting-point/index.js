//Lecture 2 - Adding Elements:

const numbers = [3, 4];

//note - we used const, we cannot replacing the array, but we can still add & modify the values.

numbers.push(5, 6); // add to end
numbers.unshift(1, 2); //shifts items and adds into the start
numbers.splice(2, 0, "a"); //splice @ position 2, delete 0, insert array

console.log("numbers - ", numbers);

//Lecture 3 - Finding Elements:
//Findings depends if we're using primitive or reference types in the array...

//find primitives
console.log(numbers.indexOf("a")); //returns location of item A. -1 = not found.

//find last index of a given item
numbers.push("a");
console.log(numbers.lastIndexOf("a")); //find A at end of array.

//how to check if items exists:
console.log(numbers.indexOf("a") !== -1); //overly verbose
console.log(numbers.includes("a")); //more clean way

//optional parameter - fromIndex
console.log("end - ", numbers.indexOf("a", 3)); //We can skip beyond first occurence of an item.

//Lecture 4 - Finding Elements(reference types):
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

courses.includes({ id: 1, name: "a" });
//this does not work because we know reference types are stored in different locations.

//array.find() lookup mozilla documentation.
console.log(
  courses.find(function (element) {
    return element.name === "a";
  })
);

//array.findIndex() fairly self explanitory.
console.log(
  courses.findIndex(function (element) {
    return element.name === "a";
  })
);

//Lecture 5 - Arrow Functions:
/* In the previous lecture we passed a predicate function to find the courses.
    There is a much cleaner way to do that, using arrow functions.

    console.log(
  courses.find(function (element) {
    return element.name === "a";
  })
);
*/

//clean up function using arrow functions.
console.log(
  courses.find((course) => {
    course.name === "a";
  })
);

//Lecture 6 - Removing Elements:

//end
const last = numbers.pop();

//begining
const first = numbers.shift();

//middle
const middle = numbers.splice(2, 2); //remove @ index 2, remove 1 element.
console.log(numbers);

//Lecture 7 - Emptying an Array:

//Solution 1 - Reassign:
let numbaz = [1, 2, 3];
let another = numbaz;
//numbaz = [];

//note, if we used numbaz as the value for another array it will still exist in memory.
//console.log("another - ", another, "- original - ", numbaz);

//Solution 2 - array.length:
//We can set the array length to 0, this will truncate and remove the values.
//numbaz.length = 0;
//console.log("another - ", another, "- original - ", numbaz); //removes BOTH arrays based on same values.

//Solution 3 - Splice Method:
//numbaz.splice(0, numbaz.length);
//console.log("another - ", another, "- original - ", numbaz);

//Solution 4 - Pop Method: (please do not DO this.)
while (numbaz.length > 0) {
  numbaz.pop();
}

console.log("another - ", another, "- original - ", numbaz);

/* Take Home
  If you have a simple array, it is array = [] is your simplest solution.
  However if your array is referenced by another array, you will have to use one of the other 3 options.
  The simplest option for that being array.length = 0;
*/
