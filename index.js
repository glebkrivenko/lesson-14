"use strick";
//Задача№1-2 Вызвать "alert" с помощью внешнего скрипта!
console.log("Я JavaScript!");

//Задача№3 Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).
let admin, name;
name = "Джон";
admin = name; //Скопировали данные "name" в переменную "admin"
console.log(admin);

//Задача№4 Придумать правильные названия.
let ourPlanetName, currentUserName;
ourPlanetName = "Земля"; //Или же через const ourPlanetName = "Земля";
currentUserName = "Глеб";

//Задача№5 Какие буквы (заглавные или строчные) использовать для имён констант?
// const BIRTHDAY = "02.12.1997";
// const age = BIRTHDAY; //

//Задача№6 Шаблонные строки
// let name = "Ilya";

//Задача№7 Простая страница
let youName = prompt("Как тебя зовут?", "");
console.log(`Приятно познакомиться, ${name}`);

//Задача№8 Постфиксная и префиксная формы
let a = 1,
  b = 1;
let c = ++a; // 2 ?
let d = b++; //1 ?
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//Задача№9 Результат присваивания
let z = 2;
let x = 1 + (z *= 2);
console.log(z); //4
console.log(x); //5

//Задача№10 Преобразование типов
console.log("" + 1 + 0); //10 Сложение со строкой "" + 1 преобразует 1 к строке: "" + 1 = "1"
console.log("" - 1 + 0); //-1
console.log(true + false); //1 так как true это всегда 1
console.log(6 / "3"); //2
console.log("2" * "3"); //6
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45
console.log("4" - 2); //2
console.log("4px" - 2); //NaN
console.log(7 / 0); //0 Infinity
console.log("  -9  " + 5); //-9 5
console.log("  -9  " - 5); //-14
console.log(null + 1); //1
console.log(undefined + 1); //NaN
console.log(" \t \n" - 2); //-2

//Задача№11 Преобразование типов
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

//задача№12 Операторы сравнения
console.log(null === undefined); // false
console.log(null == undefined); // true
console.log(5 > 4); //true
console.log("ананас" > "яблоко"); //false
console.log("2" > "12"); //true
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == "\n0\n"); //false
console.log(null === +"\n0\n"); //false

//Задача№13 Название JavaScript
let officialName = prompt("Какое «официальное» название JavaScript?", "");
if (officialName == "ECMAScript") {
  console.log("Верно!");
} else {
  console.log("Не знаете? ECMAScript!");
}
//Задача№14 Покажите знак числа

let number = prompt("Нужно это число", "0");
if (number > 0) {
  console.log(1);
} else if (number < 0) {
  console.log(-1);
} else {
  console.log("0");
}
//Задача№15 Перепишите 'if' в '?'
// let result;

// result = a + b < 4 ? "Мало" : "Много";

// Задача№16 Перепишите 'if..else' в '?'

let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
