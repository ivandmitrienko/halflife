// // "use strict"

// function newAnketa() {

//     let name, patronymic, surname, age, ageInDays, ageInFiveYears, gender, retired;

//     do{
//         surname = prompt("Введите Вашу фамилию", ""); 
//     } while (parseFloat(surname) || surname === null || surname === "");

//     do{
//         name = prompt("Введите Ваше имя", ""); 
//     } while (parseFloat(name) || name === null || name === "");

//     do{
//         patronymic = prompt("Введите Вашу отчество", ""); 
//     } while (parseFloat(patronymic) || patronymic === null || patronymic === "");

//     do{
//         age = +prompt("Введите Ваш возвраст", ""); 
//     } while (!isFinite(age) || age === null || age === "");

//     gender = confirm("Ваш пол мужской?")? "мужской" : "женский";

//     alert(`ваше ФИО: ${surname} ${name} ${patronymic}
// ваш возраст в годах: ${age}
// ваш возраст в днях: ${age * 365}
// через 5 лет вам будет: ${age + 5}
// ваш пол: ${gender}
// вы на пенсии: нет`);
// }

// newAnketa();
// let x = parseInt('a123');
// console.log( Object.is(parseInt('a123131'), NaN) );

// do {
//     num = prompt("Введите число", 0);
// } while ( !isFinite(num) || num === null || num === '' );
// patronymic, surname, age, ageInDays, ageInFiveYears, gender, retired; 
