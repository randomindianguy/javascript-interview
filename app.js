console.log('a');
let timmy = setTimeout(function() {
    console.log('b');
}, 1);

let timothy = setTimeout(function(){
    console.log('c');
}, 10);

let timer = setTimeout(function(){
    console.log('d');
}, 0);

console.log('e');

//what is the order of the output of the letters and why?

//answer:
a
e
b
d
c

//why is this the case even when b has 1ms timeout, and d has 0 ms timeout?
//b is first taken out of the event loop, and placed in a stack. then c. then d.
//but because of the timeout duration, b will get executed first, then d, then c.

