"use strict"

function newAnketa() {

    let name, patronymic, surname, age, gender, retired;

    do{
        surname = prompt("Введите Вашу фамилию", ""); 
    } while (parseFloat(surname) || surname === null || surname === "");

    do{
        name = prompt("Введите Ваше имя", ""); 
    } while (parseFloat(name) || name === null || name === "");

    do{
        patronymic = prompt("Введите Вашу отчество", ""); 
    } while (parseFloat(patronymic) || patronymic === null || patronymic === "");

    do{
        age = +prompt("Введите Ваш возвраст", ""); 
    } while (!isFinite(age) || age === null || age === "");

    gender = confirm ("Ваш пол мужской?") ? "мужской" : "женский";

    if (gender == "мужской" && age >= 63) 
    retired = "да";
    else if (gender == "женский" && age >= 58)
    retired = "да";
    else    
    retired = "нет"; 
        
    alert(`ваше ФИО: ${surname} ${name} ${patronymic}
    ваш возраст в годах: ${age}
    ваш возраст в днях: ${age * 365}
    через 5 лет вам будет: ${age + 5}
    ваш пол: ${gender}
    вы на пенсии: ${retired}`);
}

newAnketa();

