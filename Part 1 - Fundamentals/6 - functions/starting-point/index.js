

//Lecture 1 - Declarations VS Expressions:
//In this section we're going to go over Functions in more depth.

//Example 1 - Function Declaration
function walk() {
  console.log('Walk');
}


//Example 2 - Annoymous Function Expression
let run = function() {console.log('Run')};


//What the difference?
//1 - We dont end a function declaration with ;
//2 - In Function Expressions, we dont give the function a name.

//Example 3 - Named Function Expression
let runAgain = function run() {console.log('Run')};

//Calling our Function Expressions
run();
let move = run;
move();

//Take home - There are 2 methods for creating a function, Function Declarations & Function Expressions.