//write the 5 lab quetons using arrow functions
caculateRectangle=(width,height)=>width*height;
    console.log(caculateRectangle(5,10));

    // If not a single line function

    calculateCircleArea=(radius)=>{
        let area = radius * radius * Math.PI;
        return area;
    }

    console.log(calculateCircleArea(5));

    // questoin 2

    gradeCategory=(score)=>{
        if(score>=90 && score<=100){
            return "A";
        }else if(score>=80 && score<90){
            return "B";
        }else if(score>=70 && score<80){
            return "C";
        }else if(score>=60 && score<70){
            return "D";
        }else if(score>=0 && score<60){
            return "F";
        }else{
            return "Invalid score";
        }
    }

    console.log(gradeCategory(95)); // "A"
    console.log(gradeCategory(72)); // "C"
    console.log(gradeCategory(58)); // "F"

    // question 3

    countVowels=(word)=>{
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

    // question 4
    doubleNumbers=(numbers)=>{
        return numbers.map(num => num * 2);
    }

    console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
    console.log(doubleNumbers([-1, 0, 5])); // [-2, 0, 10]

    // question 5
    fahrenheitToCelsius=(fahrenheit)=>{
        return (fahrenheit - 32) * 5 / 9;
    }

    describeTemperature=(fahrenheit)=>{
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