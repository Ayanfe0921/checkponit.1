// STRING MANIPULATION FUNCTIONS

// 1. Reverse a String: Builds a new string by starting from the last character

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function countCharacters(str) {
    return str.length;
}

function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

// 2. Count Characters: Returns the total number of characters

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function filterArray(arr) {
    let filteredResult = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            filteredResult.push(arr[i]);
        }
    }
    return filteredResult;
}


// 3. MATHEMATICAL FUNCTIONS 

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

function isPrime(num) {
    if (num <= 1)
        
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function generateFibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        let nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }
    return sequence;
}