// switch (expresion) {
//     case value1:
//         // 
//         // 
//         break;
//     case value2:
//         // 
//         // 
//         break;
//     case value3:
//         // 
//         // 
//         break;
//   default:
//     // 
//     // 

// }
//  used in API testing

let statusCode = 200;
let statusCode2 = 2040;
switch (statusCode) {
    case 200:
        console.log("Success");
        break;
    case 404:
        console.log("Not found");
        break;
    case 500:
        console.log("Server error");
        break;
    default:
        console.log("Unexpected status code recieved");
}

// not good practise but possible
let statusCode3 = 500;
switch (statusCode3) {
    default:
        console.log("Unexpected status code recieved");
        break;
    case 200:
        console.log("Success");
        break;
    case 404:
        console.log("Not found");
        break;
    case 500:
        console.log("Server error");
}