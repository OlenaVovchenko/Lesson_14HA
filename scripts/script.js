//Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
//for (let i = 0; i <= 10; i = i + 2) {
//  console.log(i);    
//} 

//Напишите цикл for, который выводит в консоль  все числа от 55 до 20
// for (let i = 55; i >= 20; i--) {
// console.log(i);
//   }

//Дан массив numbers. Вывести в консоль все числа из массива
//const numbers = [3, 5, 11, 2, 8, 1, 6];
//console.log(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4],numbers[5],numbers[6]);
//------------2й способ------------
//const numbers = [3, 5, 11, 2, 8, 1, 6];
//for (let i = 0; i < numbers.length; i++)
// {console.log(numbers[i]);}

//Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат

//const numbers = [3, 5, 11, 2, 8, 1, 6];
//const numbersSquared = []
//numbersSquared.push(numbers[0]**2,numbers[1]**2,numbers[2]**2,numbers[3]**2,numbers[4]**2,numbers[5]**2,numbers[6]**2,)
//-----------2й способ-------------
//const numbers = [3, 5, 11, 2, 8, 1, 6];
//const numbersSquared = []
//for (let i = 0; i < numbers.length; i++) {
//  numbersSquared.push (numbers[i] ** 2)
// }
//console.log(numbersSquared);

 //Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)

//  const numbersSquared = [9, 25, 121, 4, 64, 1, 36]
//  let lastElemIndex = numbersSquared.length - 1;
//  let lastElem = numbersSquared[lastElemIndex];
//  console.log(lastElem);


//  Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

const user = {
first_name: 'Ivan', 
last_name: 'Ivanov', 
age: 20, 
salary: 500
}
//console.log(`User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`);
//-----------2й способ-------------
let usersInfo = `User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`
console.log(usersInfo);