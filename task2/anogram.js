/**Задача 2
 Напишите функцию, которая сравнивает две строки и определяет являются ли они анаграммой (слова состоят из одних и тех же букв).
 Строки получаем от пользователя с помощью 2-х методов prompt.
 Пример:
 Первое слово - апельсин
 Второе слово - спаниель
 Результат - слова "апельсин" и "спаниель" являются анаграммой.
 **/

let userString = prompt("Введите два слова через пробел. " +
    "\nМы проверим является ли эти слова анаграммой (слова состоят из одних и тех же букв). " +
    "\nПример: 'апельсин' 'спаниель', 'материк' 'метрика', 'мошкара' 'ромашка', 'норматив' 'минотавр'");

let arrStrings = userString.split(" ");

// let firstString = "апельсин";
// let secondString = "спаниель";

sayIsAnogram(arrStrings);
simpleSayIsAnogram(arrStrings);

function sayIsAnogram(arrStrings) {
    let firstString = arrStrings[0];
    let secondString = arrStrings[1];
    let arrayOfSymbolFirstString = firstString.split("");
    let arrayOfSymbolSecondString = secondString.split("");
    if (arrayOfSymbolFirstString.length !== arrayOfSymbolSecondString){
        return alert("1-й метод. Первое слово: '" + firstString + "' второе слово: '" + secondString + "' не является анаграммой");
    }
    let mapOfSymbolfirstString = new Map();
    arrayOfSymbolFirstString.forEach((elem, index, array) => {
        if (mapOfSymbolfirstString.has(elem)) {
            let countSymbol = mapOfSymbolfirstString.get(elem) + 1;
            mapOfSymbolfirstString.set(elem, countSymbol);
        } else {
            mapOfSymbolfirstString.set(elem, 1);
        }
    });
    console.log(mapOfSymbolfirstString);
    arrayOfSymbolSecondString.forEach((elem, index, array) => {
        if (mapOfSymbolfirstString.has(elem)) {
            let countSymbol = mapOfSymbolfirstString.get(elem) - 1;
            if (countSymbol === 0) {
                mapOfSymbolfirstString.delete(elem);
            } else {
                mapOfSymbolfirstString.set(elem, countSymbol);
            }
        }
    });
    alert("1-й метод. Первое слово: '" + firstString + "' второе слово: '" + secondString + "' " + (mapOfSymbolfirstString.size === 0 ? " является анаграммой (слова состоят из одних и тех же букв)" : " не является анаграммой"));
}


function simpleSayIsAnogram(arrStrings) {
    let firstString = arrStrings[0];
    let secondString = arrStrings[1];
    let firstStringOfSort = firstString.split("").sort().join("");
    let secondStringOfSort = secondString.split("").sort().join("");
    console.log(firstStringOfSort + " " + secondStringOfSort);
    let answer = (firstStringOfSort == secondStringOfSort);
    console.log(firstStringOfSort === secondStringOfSort);
    console.log(firstStringOfSort == secondStringOfSort);

    alert("2-й метод. Первое слово: '" + firstString + "' второе слово: '" + secondString + "' " + (answer ? " является анаграммой (слова состоят из одних и тех же букв)" : " не является анаграммой"));
}
