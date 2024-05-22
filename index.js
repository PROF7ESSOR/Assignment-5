"use strict";
//question1
console.log("Hello,World!");
//question2
let temprature = 14;
if (temprature <= 20) {
    console.log("Its Cold");
}
//question3
let apples = 10;
let z = apples - 3;
console.log(z);
//question 4
let firstname = "muhammad";
let lastname = "hamza";
let fullname = `${firstname}${lastname}`;
console.log(fullname);
//question5
let y = 10;
if (y === 5) {
    console.log("Yes");
}
else {
    console.log("No");
}
//question6
function calculateArea(input) {
    let r = input;
    let area = 2 * 3.14 * r * r;
    console.log(area);
}
calculateArea(2);
//question7
for (let i = 50; i <= 50; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
//question8
let tempratur = [12, 34, 24, 6, 43];
let highesttemprature = [];
for (let i = 1; i < tempratur.length; i++) {
    if (tempratur[i] > highesttemprature) {
        highesttemprature = tempratur[i];
    }
}
console.log("the highest temprature is", highesttemprature);
//question9
console.log("please enter the age");
let age = 16;
if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}
//question10
function countPositiveNumbers(arr) {
    let count = 0;
    for (const num of arr) {
        if (num > 0) {
            count++;
        }
    }
    return count;
}
countPositiveNumbers([20]);
//question11. **Filter Words Starting with 'a'**
function filterWords(words) {
    return words.filter((word) => word.startsWith("a"));
}
//question12. **Log Second to Last Element**
let fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits[fruits.length - 2]);
//question13. **Square Numbers**
function squareNumbers(numbers) {
    return numbers.map((num) => num * num);
}
//questin14. **Reverse Array**
function reverseArray(elements) {
    let reversed = [];
    for (let i = elements.length - 1; i >= 0; i--) {
        reversed.push(elements[i]);
    }
    console.log(reversed);
    return reversed;
}
//question15. **Log Score Changes**
function logScoreChanges(scores) {
    let max = scores[0];
    let min = scores[0];
    let maxChanges = 0;
    let minChanges = 0;
    scores.forEach((score) => {
        if (score > max) {
            max = score;
            maxChanges++;
        }
        if (score < min) {
            min = score;
            minChanges++;
        }
    });
    console.log(`Max score changes: ${maxChanges}, Min score changes: ${minChanges}`);
}
//question16. **Remove Falsey Values**
function removeFalsey(values) {
    return values.filter(Boolean);
}
//question17. **Concatenate Arrays**
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenated = array1.concat(array2);
console.log(concatenated);
//question18. **Sum of Even or Odd Elements**
function sumOfElements(numbers, type) {
    return numbers
        .filter((num) => (type === "even" ? num % 2 === 0 : num % 2 !== 0))
        .reduce((acc, curr) => acc + curr, 0);
}
//question19. **Check Element Existence**
function elementExists(elements, element) {
    return elements.indexOf(element);
}
//question20. **Find Smallest Number**
function findSmallest(numbers) {
    return Math.min(...numbers);
}
//question21. **Calculate Product**
function calculateProduct(numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}
//question22. **Filter by Length**
function filterByLength(strings, minLength) {
    return strings.filter((s) => s.length > minLength);
}
//question23. **Find Duplicates**
function findDuplicates(items) {
    const seen = new Set();
    const duplicates = new Set();
    items.forEach((item) => {
        if (seen.has(item))
            duplicates.add(item);
        seen.add(item);
    });
    return Array.from(duplicates);
}
//question24. **Increment All Elements**
function incrementAll(numbers) {
    return numbers.map((num) => num + 1);
}
//question25. **Count Occurrences**
function countOccurrences(elements, target) {
    return elements.filter((e) => e === target).length;
}
//question26. **Check If Array Is Sorted**
function isSorted(numbers) {
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i - 1] > numbers[i])
            return false;
    }
    return true;
}
//question27. **Format Names**
function formatNames(names) {
    if (names.length < 2)
        return names.join("");
    return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}
//question28. **Convert Fahrenheit to Celsius**
function convertToFahrenheit(temperatures) {
    return temperatures.map((temp) => ((temp - 32) * 5) / 9);
}
//question29. **Calculate Min, Max, and Average**
function minMaxAverage(numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const average = numbers.reduce((sum, current) => sum + current, 0) / numbers.length;
    return { min, max, average };
}
//question30. **Swap Array Elements**
function swapElements(elements, index1, index2) {
    let temp = elements[index1];
    elements[index1] = elements[index2];
    elements[index2] = temp;
    return elements;
}
//question31. **Count Character Occurrences**
function countCharacter(str, char) {
    return str.split("").filter((c) => c === char).length;
}
function logUncompleted(tasks) {
    tasks
        .filter((task) => !task.completed)
        .forEach((task) => console.log(task.task));
}
//question33. **Sort Array**
function sortArray(numbers) {
    return numbers.sort((a, b) => a - b);
}
//question34. **Reverse Array Without Reverse Method**
function ReverseArray(elements) {
    let reversed = [];
    for (let i = elements.length - 1; i >= 0; i--) {
        reversed.push(elements[i]);
    }
    return reversed;
}
//question35. **Simple Calculator**
function calculator(operand1, operand2, operator) {
    switch (operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            return operand2 !== 0 ? operand1 / operand2 : NaN;
        default:
            return NaN;
    }
}
