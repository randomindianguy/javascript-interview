//revealing module pattern
//turn this object literal into a module that only exposes the render methor

let myModule = {
    data: [],
    render: () => {

    },
    add: () => {

    },
    remove: () => {

    }
}

/****
 * What is revealing pattern? 
 * It is a type of design for writing code
 * Module == self contained code. Revealing == How do we only expose only what needs to be seen.
 * 
 * The way to do this is by writing a function expression
 */

let myModule = (function(){
    let _data = [];
    let _render = function(){
        //code
    }

    let _add = function(){

    }

    let remove = function(){

    }

    return{
        render: _render; //this is done because these functions are only present within the scope of the overall function. 
                         //and it is necessary to return something with functions.
    }
})