

//4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply ([1,2,3,4]) should return 24.
function sum(arr) {
    return arr.reduce((a,b)=> a+b, 0);
}

function multiply(arr) {
    return arr.reduce((a,b)=> a*b, 1);
}

//5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag tester") should return the string "ratset gaj".
function reverse(str){
    return str.split('').reduce((accumulator, currentValue) => currentValue+accumulator);
}

//7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of rowrds that are longer than i.
function filterLongWords(arr, minLength){
    return arr.filter(s=> s.length >minLength);
}
