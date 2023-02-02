/**Задача 3
 *  Игра «Как стать миллионером».
 *  Подумайте, как можно реализовать подобный сценарий с использованием массивов и объектов.
 *  Помните, что для каждого вопроса нужно прописать: вопрос, 4 варианта ответа, правильный ответ (который будем сравнивать с тем,
 *  что ввел пользователь, сумма которую выиграл пользователь).
 *  Определите минимум 5 вопросов. Вопросы с вариантами ответов вы можете придумать самостоятельно, а можете воспользоваться поиском.
 **/
let millionaire = [
    {
        question: "Що таке програмування?",
        choose: {
            a: "ремонт комп'ютера",
            b: "процес написання програми для комп'ютера",
            b: "процес написання програми для комп'ютера",
            c: "нічого з запропонованого"
        },
        answer: "c",
        scoreOfGame: 500,
    },
    {
        question: "З чого складається комп'ютер?",
        choose: {
            a: "з інтернету",
            b: "з апаратної частини і програмного забезпечення",
            b: "з клавіатури і принтера",
            c: "з клавіатури, мишки і монітора"
        },
        answer: "b",
        scoreOfGame: 1000,
    },
    {
        question: "Що розуміється під апаратною частиною комп'ютера?",
        choose: {
            a: "усі частини комп'ютера",
            b: "програма, яку комп'ютер виконує",
            b: "операційна система встановлена на комп'ютері",
            c: "нічого з запропонованого"
        },
        answer: "a",
        scoreOfGame: 2000,
    }
];


for (const element of millionaire) {
    let mapOfAllShoose = new Map(element.choose);
    let allShoose;
    for (let [key, value] of mapOfAllShoose) {
        allShoose = key + ": " + value + "\n";
    }
    console.log(allShoose);

    let userAnswer = prompt("Введіть правильну відповідь a, b, c чи d \n Питання:" + element.question + "\n" + allShoose);
    alert(mapOfAllShoose.has(userAnswer) ? "Верно" : "Не верно")
}


// var Question = new Object();
// Question.text = "What is the capital of Thailand?";
// Question.answers = ['Bangcock', 'Bangdick', 'Bandtits', 'Bangpussy'];
// Question.right = "Bangcock"