
//const somes = 'harinama vnbdnbd sow jjj nndbnd ndnndmnd mndmd  jhjdhdjgd hdjhjs hnfdnf mnnf';


//console.log(somes.substring(0, 10) + '...');

//console.log(somes.slice(21, 25));

//console.log(typeof(personName)) ====(kunai pani variables ko data type herna)






// const imageFile = 'hariRev.jpg'

// console.log(imageFile.split('.'));


// let age =90;
// const personName = 'I\'m some Dev';

// // age = 100;
// // console.log(age);


// const allTogether = `${age} ${personName.toUpperCase()}`;
// console.log(allTogether);


// const amount ='900';

// const rating = '9.99';

// const changeToN = Number.parseInt(amount);
// const rate = Number.parseFloat(rating);


// console.log(Number(rating) + Number(rating));





//console.log(Math.round(rating));====(point pachi 5 vanda mathi vaye badayera auxa)
//console.log(Math.ceil(rating));=====(point pachi jati vayeni badayera auxa)
//console.log(Math.floor(rating));====(jati je vaye ni same auxa)




// console.log(Math.PI);
// console.log(Math.max(11, 44, 56, 66, 44));
// console.log(Math.min(11, 44, 56, 66, 44));
// console.log(Math.sqrt(4));
// console.log(Math.pow(2, 3));



//random number nikalna




//  const random = 9.495222334;

//  console.log(random.toFixed(2));


// const a = 90;

// const b = 100;


// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a * b);
// console.log(a % b);

// const nis = a + b - (a - b);





// let count = 2;

// //count = count + 100;
// count += 100;
// count -= 100;
// count /= 100;
// count *= 100;
// count **= 3;

// console.log(count);



// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a === b);
// console.log(a !== b);



 


 //(euta matra mile true hune)
 //console.log(a > b || a === b || a < b); 

 //(sabai milna paryo matra true)
 //console.log(a > b && a === b && a < b);




// const age = 90;


//  const nim = age < 20 ? 'junior' : age <= 20 ? 'adult' : age > 80 ? 'senior' : 'junior';

//  console.log(nim);



// const a = 90;

// let b;

// if (a > 20){
//   console.log('junior')
// } else if (a === 90) {
//   console.log('regular')
// } else if (a > 10) {
  
// } else {
  
// }


// const pos = 1;

// switch(pos){

// case 1:
// console.log('gold medal');

// break;
// case 2:
// console.log('silver medal');

// break;
// case 3:
//   console.log('bronze medal')

//   break;

//   default:
//     console.log('u got no medal');
// }





// const personName = 'ram';

// const persons = ['ram', 'hari', 'shyam'];
// const n = persons.concat('n', '1');




// console.log(persons.reverse());
// console.log(persons.includes('ram'));
// console.log(persons.join());
// //persons.push('jio');
// //persons.pop();
// //persons.shift('lio');
//  //persons.unshift('kio');
// //console.log(persons[9]);
// //console.log(persons.length);






// function greet() {
//   console.log('hello blue world');
//   console.log('hello blue world2');
//   console.log('hello blue world3');
// }

// const greet1 = () => {
// console.log('kiosk')
// }

// greet();
// greet1();




// let i = 1;


// while(i < 20){
// console.log('loooooooooooooop')
// i++;
// }

 
// let evenTotal = 0;
// let oddTotal = 0;

// for (let i = 1; i <= 20; i++){
//   if (i % 2 === 0){
//     evenTotal = evenTotal + i;
//   } else if (i % 1 === 0){
//     oddTotal = oddTotal + i;
//   }
  
// }

// console.log(evenTotal);
// console.log(oddTotal);




//array method===========================
//const numbers = [11, 22, 44, 55, 66, 77];

// let total = 0;
// numbers.forEach((n) => {
// total += n;
// });

// console.log(total);

// const m = numbers.map((n) => {
//   // return n === 77 ? 100 : n;
//   return n * 9
// });
//   console.log(m);



//const numbers = [11, 22, 44, 55, 66, 77];

// const c = numbers.find((n) => {
// return n > 40;
// });

// const d = numbers.filter((n) => {
//   return n > 40;
//   });

 //very imp =============================================

// const n = numbers.reduce((a, b) => {
//   //console.log(a);
// //console.log(b);
//   //return 9;
//   return a + b;
// });


// console.log(n);
// // console.log(c);
// // console.log(d);




// const numbers = [11, 22, 44, 55, 66, 77];

// const min = numbers.reduce((min, b) => (b < min ? b : min));
// const max = numbers.reduce((max, b) => (b > max ? b : max));

// console.log(min);
// console.log(max);



// const greet = (type, name) => {
//   console.log(`${type} ${name}`);
// }


// greet('morning', 'ram');
// greet('evening', 'shyam')



// const numbers = (a, b) => {
//  console.log(`${a + b}`);
// };

// numbers(3, 2);



// const person = {
// name: 'hari',
// age: 90,
// sleep: () => {
//   console.log('hello namaste')
// }
// };

// console.log(person);



// const car = {
// name: 'supercar',
// mileage: 25,
// date: 2024,
//  race: () => {
// console.log('ready to go')
//  }
// };


// console.log(car);

// const movies = {
// name: 'seto bagh',
// director: 'navi',
// rating: 5.5,
// release: 2024,
//  hit: () => {
// console.log('go and watch')
//  }
// };

// movies.hit()


// const product = {
//   name: 'iphone',
//   brand: 'apple',
//   rating: 4.5,
//   products: () => {
//   console.log('new iphone')
//   }
// };

// console.log(product);


// const bank ={
//   name: 'nepal bank',
//   estd: 2019,
//   assets: '100millions',
//   shareholders: 40,
//   chairPerson: () => {
//     console.log('governer')
//   }

// }

// console.log(bank);



// const random = Math.random() * 5 + 1;
// const isLogin = true;
// const isLog = false;

// console.log(Math.floor(random));



// const age = 10;


// const genre = age > 20 ? 'senior' : age === 10 ? 'some' : 'regular';

// console.log(genre);



// const age = 5;

// if(age === 5) {
//   console.log('sadddhfhffh');
// } else if (age < 10){
//   console.log('run hunu');
// } else if (age < 60){
//   console.log('nghg')
// }else {
//   console.log('gfgfhghgh')
// }



// const age = 45;
// const a = 50;
// const b = 90;


// console.log(a < b || a === 90);
// console.log(a > b && a === 90 && a < b);



// if (age < 20) {
//   console.log('junior')
// } else if (age < 50) {
//   console.log('regular')
// } else if (age > 50) {
//     console.log('senior')
// } else {
//   console.log('noage')
// }



// const salary = 9000000;
// const expenses = 10000;

// console.log(salary > expenses || salary - expenses)




// const age = 90;


// if(age < 12) {
//   console.log('5 rupee')
// } else if (age < 18) {
//   console.log('10 rupee')
// } else if (age < 60) {
//   console.log('20 rupee')
// } else if (age > 60) {
//   console.log('15 rupee')
// }



// const pos = 3;


// switch (pos) {
//   case 1:
//     console.log('good');
//     break;

//     case 2:
//       console.log('bronze medal')
//       break;

//       case 3:
//         console.log('silver medal');
//          break;
//         default:
//           console.log('you got no medal')
// }



// const a = 90;
// const b = 100;
// const calc = 'add';

// console.log(calc);





 //const persons = ['ram', 'shyam', 'sita'];
// const numbers = [11, 22, 33, 44];
// //persons.push('jack');
// //persons.pop();
// //persons.shift();
// //persons.unshift('li');

// console.log(persons.concat(2));

//const n = persons.concat('jack', 'mack');

 //console.log(n);




// function calculateTicketPrice(age) {
//   if (age < 12) {
//     return 5;
//   } else if (age < 18) {
//     return 10;
//   } else if (age < 60) {
//     return 20;
//   } else {
//     return 15;
//   }
// }


// const age = 25;
// const ticketPrice = calculateTicketPrice(age);
// console.log(`ticketPrice for age ${age} is $${ticketPrice}`);



// const persons = ['ram', 'jack', 'sita', 'sita'];
// const pers = ['yellow', 'green', 'red', 'ram'];


// const newData = [...persons, ...pers];

// const t = new Set([...pers]);
// const n = new Set([...persons]);


// console.log([...t, ...n]);


//const pers = 'lios';

//persons[1] = 'hari';


//console.log(persons.reverse());
//console.log(persons.includes('jack'));
//console.log(persons.join(''));
//console.log(pers.split('').join('-'));




// function greet(a, b){
//   console.log(a);
//   console.log(b);
// }

// const greet1 = () => {
//   console.log('data');
//   console.log('sata');
// }

// greet(900, 'mio');
// greet1();



// let i = 0;


// while(i < 20) {
//   i++;
//   console.log(i);
// }


// for (let i = 1; i <= 20; i++) {
//   if (i === 5) {
//     break;
//     //continue;
//   }
//   console.log(i);
// }



// const callTo = (func) => {
//   func();
// }


// const func = () => {
//   console.log('call back vayo');
// }

// callTo(func);


//  const numbers = [11, 22, 44, 55, 66, 77];


//  let total = 0;
//  numbers.forEach((n) => {
// total += n;
//  });

//  console.log(total);


//  const numbers = [11, 22, 44, 55, 66, 77];

//  const j = numbers.map((n) => {
//   return n === 44 ? 100 : n
//  });

//  console.log(j);



//  const numbers = [11, 22, 44, 55, 66, 77];

//  const j = numbers.find((n) => {
//   return n === 55;
//  });

// console.log(j);


//  const numbers = [11, 22, 44, 55, 66, 77];

//  const j = numbers.filter((n) => {
//   return n > 60;
//  });

// console.log(j);




// const numbers = [11, 22, 44, 55, 66, 77];
   
// const even = (number) => number % 2 === 0;
// const odd = (number) => number % 2 !== 0;

// const evenNumbers = numbers.filter(even);
// const oddNumbers = numbers.filter(odd);


// console.log(evenNumbers);
// console.log(oddNumbers);


// const numbers = [11, 22, 44, 55, 66, 77];

// const nis = numbers.reduce((a, b) => {
// return a + b;
// });

// console.log(nis);

// const car = {
//   name: 'porche',
//   speed: 400,
//   mileage: 30,
//   release: 2024,
//   power: 200,

//   race: () => {
// console.log('ready to go')
//   }

// };

// car.race();




const movies = {
   name: 'seto bagh',
   director: 'navi',
   rating: 5.5,
   release: 2024,
    hit: () => {
   console.log('go and watch');
    }
   };

   console.log(movies);