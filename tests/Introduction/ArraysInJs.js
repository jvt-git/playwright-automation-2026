let fruits = ["Mango", "Apple", "Kivi", "Banana", [1,2,3,4], true];
// Išspausdinamas elementas, esantis indekse 0.
console.log(fruits[0]);
// Išspausdinamas elementas, esantis indekse 5.
console.log(fruits[5]);
// .length parodo, kiek elementų yra masyve.> 6
console.log(fruits.length);
// push() prideda elementą į masyvo galą.
console.log(fruits.push("Orange"));
console.log(fruits);
// pop() pašalina paskutinį masyvo elementą "Orange" ir jį grąžina.
console.log(fruits.pop());
// shift() pašalina pirmą masyvo elementą "Mango".
fruits.shift();
console.log(fruits);
// pop() → pašalina paskutinį
// shift() → pašalina pirmą
// push() → prideda į galą
// unshift() → prideda į pradžią
// Dabar fruits[0] jau yra "Apple", nes "Mango" buvo pašalintas.
console.log(fruits[0]);
// unshift() prideda elementą į masyvo pradžią.
fruits.unshift("Grapes");
console.log(fruits);
// Čia pakeičiama reikšmė indekse 4.
fruits[4]= 777777777777777;
console.log(fruits);
// ???
console.log(fruits[4][0]);