let num = 0;
async function increment() {
    num += await 2;
    console.log(num);
}

increment();
num += 1;
console.log(num);

/****
 * What is the resulting output?
 * 2, 3
 * 1, 3
 * 1, 2
 * 2, 1
 */

//Ans

/****
 * ANs = 1, 2
 * Why?
 * what await basically does is pause the execution, ie, it does the same thing as
 * promise.resolve(2);
 * Therefore, when num += 1 occurs, it's actually num = 0 + 1 == 1.
 * And then when we console.log(num) [line 9], it will log '1'
 * So, if num is awaited, why is the output 2?
 * In the increment function, num += await 2, the statement => num = num + await 2. 
 * The num that's present here is the original num value, -> num = 0 + await 2.
 * Therefore, the o/p = 1, 2.
 */