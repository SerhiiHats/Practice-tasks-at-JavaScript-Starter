/**
 * Задача 1
 * Создайте функцию, которая будет определять является ли введенная пользователем строка палиндромом.
 * Палиндром - число, буквосочетание, слово или текст слева направо и справа налево читается одинаково.
 * Например, 707, топот, оно, мадам и т.д.
 * текст: «а роза упала на лапу Азора»
 **/

/**Palindrome) называется строка, которая одинаково читается как слева направо, так и справа налево.
 * Определение: Подпоследовательностью-палиндромом данной строки (англ. Largest Palindromic Subsequence)
 * называется последовательность символов из данной строки, не обязательно идущих подряд, являющаяся палиндромом.**/

let userString = prompt("Введите слово, которое хотите проверить на палиндром. \nПалиндром это строка которая одинаково читается как слева направо, так и справа налево. \nНапример, 707, топот, оно, мадам и т.д.\nили текст: «а роза упала на лапу Азора»");
// let userString = "А Роза упала на лапу Азора"
// let userString = "мадам";

sayIsPolindrom(userString);
simpleSayIsPolindrom(userString);

function sayIsPolindrom(userString) {
    let userStringOfLowerCase = userString.toLowerCase();
    let startArrayOfSymbol = userStringOfLowerCase.split("");
    let arrayOfSymbol = startArrayOfSymbol.filter((symb) => symb !== " ");
    let middleOfArray = arrayOfSymbol.length / 2;
    let j = arrayOfSymbol.length - 1;
    let answer = true;
    for (let i = 0; i < middleOfArray; i++) {
        if (arrayOfSymbol[i] !== arrayOfSymbol[j]) {
            answer = false;
            break;
        }
        j--;
    }
    alert("1-й метод. Ваше слово/или текст: '" + userString + "' " + (answer ? " является палиндромом" : " не является палиндромом"));
}

function simpleSayIsPolindrom(userString){
    let reversUserString = userString.split("").reverse().join("");
    let answer = reversUserString === userString;
    alert("2-й метод. Ваше слово/или текст: '" + userString + "' " + (answer ? " является палиндромом" : " не является палиндромом"));
}


