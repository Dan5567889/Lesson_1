// Question 1
function calculateRectangleArea(p1, p2) {
    return p1 * p2;
  }

  function calculateCircleArea(p1) {
    return p1 * p1 * 3.14;
  }
  
  console.log(calculateCircleArea(3));

  console.log(calculateRectangleArea(5, 10));

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
