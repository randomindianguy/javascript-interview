//asi == automatic semicolon injection
//object literals, square bracket syntax, hoisting
//what happens when you run this code? why?
//how would fix this?

let a = {   
    a: 123
}
 [a].forEach(function(x) {
        console.log(x);
    })



//when a variable is created, ie, 'hoisted', it carries the value 'undefined'
//without the semicolon after '}' and before '[]'
//we have the variable with the object inside it:
{a:123}[a] //the 'a' in the square bracket is a variable. So JS is looking for a variable 'a' above, but cannot find it

//So to solve this, all you need to do is add a ; before the square brackets. ie:
let a = {   
    a: 123
};
 [a].forEach(function(x) {
        console.log(x);
    })