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
