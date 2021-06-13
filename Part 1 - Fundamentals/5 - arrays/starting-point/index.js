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

//Lecture 8 - Combing & Slicing Arrays:
const firstTest = [1, 2, 3];
const secondTest = [4, 5, 6];

//Combine using concat function
const combined = firstTest.concat(secondTest);
console.log("combined - ", combined);

const sliced = combined.slice(2, 4);

console.log("sliced - ", sliced);

//There are a few different ways to use Slice here:
//const newArray = array.slice(); - Copy array into new array
//array.slice(2) - skip first 2 and take the contents
//array.slice(2, 4) - take between 2 & 4 from array

/* Note:
  When using concat with primitive types, the values are copied directly into an array.
  However when using object aka reference types, ONLY a reference to the object is being copied.
*/

//example:
const firstObj = [{ id: 1 }];
const secondObj = firstObj.slice();
secondObj[0].id = 2;

console.log("first - ", firstObj[0].id, " - second", secondObj[0].id);
//Result - We have changed the value for BOTH objects.

//Lecture 9 - Spread Operator:
//Previously we looked at using the concat operator to copy 2 arrays.
//We have another option, using the spead operator.

const testSpreadArry = [...firstTest, ...secondTest, "b"];
console.log("spread -", testSpreadArry);

//Take home - Spead is a clean way to combine, and add to an array in a single line.

//Lecture 10 - Iterating an Array:

//Method 1 - For Loop
for (let number of numbers) {
  console.log("number - ", number);
}

//Method 2 - array.foreach
numbers.forEach((number) => console.log("numba -", number));

//2nd Parameter - Arrow Functions have a 2nd parameter, the index.
numbers.forEach((number, index) =>
  console.log("numba -", number, " index - ", index)
);

//note - We could also get the index using the FORIN loop.
//Take home - we have multiple ways to iterate over an array.

//Lecture 11 - Joining Arrays:
//Join array to string with comma seperating them.
const joined = numbers.join(",");
console.log("joined - ", joined);

//Split a message into individual parts
const message = "this is my first message";
const parts = message.split(" "); //split on whitespace
console.log("parts - ", parts);

//format the parts to build a formatted message
const formatted = parts.join("-");
console.log("formatted - ", formatted);

//note - this join method is particularly helpful when building URLs for a website.

//Lecture 12 - Sorting Arrays:
//What if we want to change the order of things?

//Converts items to strings
const sorted = numbers.sort();
console.log("sorted - ", sorted);

//This is often used in conjunction with reverse
console.log(numbers.reverse());

//Note - these only work with primtive types, for objects we have to change it up.

const coursesTest = [
  { id: 1, name: "Node" },
  { id: 2, name: "javaScript" },
];

//console.log("sorted objects - ", coursesTest.sort()); //result, our objects are not sorted...

//task - write a sorting function for dealing with Objects:
coursesTest.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log("sorted objects 2.0 - ", coursesTest);

/*
note - the sorting logic we created is case senstive, if we change to javascript
our sorting gets ruined. This is because for javascript to compare 2 strings,
it has an numeric value for each character, and J and j are assigned 2 different values.

lookup - ASCII table - ameriscan standard code for information interchange
N = 76
J = 74
j = 106
*/

//solution - always to UPPERCASE string comparison.

//Lecture 13 - Testing the Elements of an Array:
//We have 2 new methods for arrays since ES 6, every & sum

//every - run function & test the values - will return boolean
const allPositive = numbers.every((item) => item >= 0);
console.log("allPositive - ", allPositive);

//some - checks if any element satisfies the criteria
const atLeastOnePositive = numbers.some((item) => item >= 0);
console.log("atLeastOnePositive - ", atLeastOnePositive);

//Take Home:
//every - checks if EVERY element satisfies the criteria.
//some - checks if SOME(ONE) element satisfies the criteria.

//Also - These are newer JavaScript methods, not all browsers support them.

//Lecture 14 - Filtering an Array:

//filters everything BUT positive numbers.
const onlyPositive = numbers.filter((item) => item >= 0);
console.log("onlyPositive - ", onlyPositive);

//Lecture 15 - Mapping an Array:
//Another very powerful method in JavaScript is map, we can transform and map
//data from one array into another.

//Task map to string - Transform raw numbers to useable markup:
const filtered = onlyPositive.map((n) => "<li>" + n + "</li>");
console.log("Mapped Data - ", filtered);

//turn to string
const html = "<ul>" + filtered.join("") + "</ul>";
console.log("html Data - ", html);

//Task - Map to Objects:
const mappedObject = onlyPositive.map((n) => ({
  value: n,
}));
console.log("mappedObject Data - ", mappedObject);

//Chaining Map & Filter
console.log(numbers.filter((n) => n >= 0).map((n) => ({ value: n })));

//Take Home - Map & Filter do NOT modify the array, but return a new array.
//They can also be chained.
