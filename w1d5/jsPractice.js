
/*  Author: Anup Dhakal
    Date: June 26, 2020
 */

    //1. Define a function max() that takes two numbers as arguments and returns the alrgest of them. Use the if-then-else construct available in Javascript.
    function max(a, b){
        if(a>b){
            return a;
        }
        else return b;
    }

    //2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
    function maxOfThree(a, b, c){
        return max(max(a,b), c);
    }


    //3. Write a function isVowel() that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.
    function isVowel(str){
        if(str.length !== 1){
            return null;
        }
        let vowels = ['a', 'e', 'i', 'o','u'];

        if(vowels.includes(str.toLowerCase())){
            return true;
        }
        else return false;
    }

    //4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply ([1,2,3,4]) should return 24.
    function sum(arr) {
        return arr.reduce((a,b)=> a+b, 0);
    }

    function multiply(arr) {
        return arr.reduce((a,b)=> a*b, 1);
    }

    //5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag tester") should return the string "ratset gaj".
    function reverse(str){
        let result = "";
        for(let i = str.length -1; i>=0; i--){
            result += str[i];
        }
        return result;
    }

    //6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
    function findLongestWord(arr){
        let longestWord = "";
        for(let i = 0; i<arr.length; i++){
            if(arr[i].length> longestWord.length){
                longestWord = arr[i];
            }
        }
        return longestWord.length;
    }

    //7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of rowrds that are longer than i.
    function filterLongWords(arr, minLength){
        let longWords = [];
        for(let i = 0; i<arr.length; i++){
            if(arr[i].length > minLength){
                longWords.push(arr[i]);
            }
        }
        return longWords;
    }

    //8. Modify the jsfiddle on the map/filter/reduce slide as follows:
        //a) multiply each element by 10;
        //b) return array with all elements equal to 3;
        //c) return the product of all elements;
    function multiplyBy10(arr){
        return arr.map(function(elem, i, array){ return elem*10;});
    }

    function allElemsEqualTo3(arr){
        return arr.filter(function(elem, i, array) {return elem ===3;});
    }

    function productOfAllElements(arr){
        return arr.reduce(function(prevValue, elem, i, array){return prevValue*elem;});
    }




