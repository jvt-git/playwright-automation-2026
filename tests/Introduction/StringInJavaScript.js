let str1 = "Hello123456789";
let str2 = 'Hello2 it\'s "Morning"';
let str3 = `Hello3`;
let str4 = `Hello4 it's "Morning"`;
let str5 = "         Hello5 its     'Morning'        ";
let str6 = "Hello6 it's \"Morning\"";
let str7 = `Hello7 
This is JVT
Academy`;
let firstName = "JVT";
let lastName = "Academy";

console.log("Welcome to JVT Academy");
console.log(`Welcome to ${firstName} ${lastName}`);

// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);
// console.log(str5);
// console.log(str6);
// console.log(str7);
// console.log(str1 + str7);
// console.log(str1.length);
// console.log(str1[0]);
// console.log(str7.toLocaleUpperCase());
// console.log(str7.toLocaleLowerCase());
// console.log(str5.trim());

console.log(str1.startsWith('Hello'));
console.log(str1.startsWith('RCV'));
console.log(str1.endsWith('Hello'));
console.log(str1.includes('Hello'));
console.log(str1.slice(4,9));
console.log(str1.replace("1234", "Not Hello"))