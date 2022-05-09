let f = function (a, b) {
    if (arguments.length === f.length) { //f.length is a length property that counts the number of arguments passed for the function and arguments is the array like structure that has been passed to the function
        console.log("We have a match!");
    } else {
        console.log("No match.");
    }
};

//detetrmine if the function received the number of params it expected

f(1);
f(1, 2);
f(1, 2, 3);