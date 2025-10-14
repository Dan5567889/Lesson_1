// Question 1
function calculateRectangleArea(p1, p2) {
    return p1 * p2;
  }

  function calculateCircleArea(p1) {
    return p1 * p1 * 3.14;
  }
  
  console.log(calculateCircleArea(3));

  console.log(calculateRectangleArea(5, 10));

  // Javascript does not support method overloading or overrideing anytime you rewrite a function the old function is omited from the memory. Just like a variable.
  // Javascript functions can be assigned to a variable 

  // Question 2
  function gradeCategory(score){
    if(score >= 90){
        return 'A';
    } else if (score >= 80){
        return 'B';
    } else if (score >= 70){
        return 'C';
    } else if (score >= 60){
        return 'D';
    } else {
        return 'F';
    }
  }

    console.log(gradeCategory(95)); // "A"
    console.log(gradeCategory(72)); // "C"
    console.log(gradeCategory(58)); // "F"

    // Question 3
    function countVowels(word){
        const vowels = 'aeiouAEIOU';
        let count = 0;
        for(let char of word){
            if(vowels.includes(char)){
                count++;
            }
        }
        return count;
    }

    console.log(countVowels("hello")); // 2
    console.log(countVowels("Javascript")); // 3

    // Question 4
    function doubleNumbers(numbers){
        return numbers.map(num => num * 2);
    }

    console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
    console.log(doubleNumbers([-1, 0, 5])); // [-2, 0, 10]

    // Question 5
    function fahrenheitToCelsius(fahrenheit){
        return (fahrenheit - 32) * 5 / 9;
    }

    function describeTemperature(fahrenheit){
        let Celsius = fahrenheitToCelsius(fahrenheit);
        if(Celsius < 0){
            return "Freezing!";
        } else if (Celsius <= 20){
            return "Cold";
        } else if (Celsius <= 30){
            return "Warm";
        } else {
            return "Hot";
        }
    }

    console.log(describeTemperature(32)); // "Cold"
    console.log(describeTemperature(68)); // "Cold"
    console.log(describeTemperature(95)); // "Hot"

    // if(conditon)? true : false;
    // nested ternary operator
    //if (Celsius<0)?descibtion="Freezing!":(Celsius<=20)?descibtion="Cold":(Celsius<=30)?descibtion="Warm":descibtion="Hot";
    //why arrow functions were created?
    //arrow functions was introducted around 2015
    //write less code
    // lexical binds the this value

    // basic syntax

    //functionName(par1, par2,...)=>{};
    // return can now be used in arrow function if it is a single line function
    // if i am writing a single line function i do now use the curly brace and the return keyword
    // function = parameters => output;     
    caculateRectangle=(width,height)=>width*height;
    console.log(caculateRectangle(5,10));

    // If not a single line function

    calculateCircleArea=(radius)=>{
        let area = radius * radius * Math.PI;
        return area;
    }

    console.log(calculateCircleArea(5));