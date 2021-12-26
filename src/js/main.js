//here will by JavaScript code ...
// let user = {
//     name: "jack",
//     age: 27
// };

// function sayHi () {
//     console.log (this.age);
// }

// user.sayHi = sayHi

// user.sayHi() 


// let calculator = {
//     read() {
//         this.x = +prompt('First value','');
//         this.y = +prompt('Second value','');    
//     },
    
//     sum() {
//         return this.x + this.y
//     },

//     mul() {
//         return this.x * this.y
//     }
// };
  


// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 150,
//     Diana: 850
// }

// let sum = 0;

// for (let key in salaries) {
//     sum += salaries[key] 
// }

// console.log(sum)

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this
//     },
//     down() {
//       this.step--;
//       return this
//     },
//     showStep() { 
//       alert( this.step );
//       return this
//     }
//   };

//   ladder.up().up().down().showStep(); 

// function Calculator() {

//   this.read = function() { 
//     this.x = +prompt('x?', );
//     this.y = +prompt('y?', );
//   };

//   this.sum = function() {
//     return this.x + this.y;
//   };

//   this.mul = function() {
//     return this.x * this.y;
//   };
    
  
// }

// let calculator = new Calculator();

// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
// my variant!!!
// function Accumulator(startingValue) {

//   this.value = startingValue;

//   this.read = function() {
//     this.number = +prompt('your number', 0); 
    
//     return this.number + this.value
//   };


  
// }

// let accumulator = new Accumulator(5);

// console.log( accumulator.read() );

// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function() {
//     this.value += +prompt('Сколько нужно добавить?', 0);
//   };

// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);


// let toxic = {
//   name: "vano"
// };

// for(let key in toxic) {

//   console.log( key );

//   console.log( toxic[key] );
// }

// let str = "привет";
// console.log(str.toUpperCase());

// console.dir(String);

// let sex = 1, ner = "2", mer = 3;
// console.log(ner + mer)


// let rem = 'Diana';
// console.log ( rem[rem.length-1])

// for (let vano of 'Diana')
// alert(vano)



// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// alert( ucFirst("") ); 


// function checkSpam(str) {
//   let lowSt = str.toLowerCase();

//   return lowSt.includes("viagra")||lowSt.includes("xxxxx"); 

// }

// console.log( checkSpam('buy ViAgRA now') );
// checkSpam('free xxxxx');
// checkSpam("innocent rabbit");

// function truncate(str, maxlength) {
  
//   if (str.length > maxlength) return str.slice(0, maxlength - 1) + '…';
//   else return str;
  
// }


// alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) ); //"Вот, что мне хотело…"

// alert( truncate("Всем привет!", 20) ); 

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// alert( extractCurrencyValue('$120') == 120 );

// let fruits = ["Яблоко", "Апельсин", "Слива"];

// for(let key of fruits) {
//   alert(key);

// }s

// let styles = ["Джаз", "Блюз",];

// styles.push("Рок-н-ролл");

// // for(let mass of styles) {

// // }

//styles[Math.floor((styles.length - 1) / 2)] = "Классика";

// alert( styles.shift("Джаз") );

// styles.unshift("Рэп", "Регги");

// alert(styles);


// function sumInput() {

//   let numbers = [];

//   while (true) {

//     let value = prompt("Введите число", 0);

//     // Прекращаем ввод?
//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert( sumInput() );

// let arr = new Array(7);

// console.log(arr.length);

// function readNumber() {
//   let num;

//   do {
//     num = prompt("Введите число", 0);
//   } while ( !isFinite(num) || num === null || num === '' );

//   // if (num === null || num === '') return ;

//   return +num;
// }

// alert(`Число: ${readNumber()}`);


// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) { // для каждого элемента массива
    
//     partialSum += item; // добавляем значение элемента к partialSum
    
//     maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//     console.log(partialSum);
//     if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//   }

//   return maxSum;
// }

// alert( getMaxSubSum([-1, 2, 3, -9]) );

