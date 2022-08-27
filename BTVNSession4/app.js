//Câu 1
// myColor = ["Red","Green","White","Black"];
// myColor.split=",";
// console.log(myColor.join(" + "));

//Câu 2

// let number = prompt('Nhập dãy số').split('');
// let m=[];
// for(let i = 0; i < number.length; i++) {
//     m.push(number[i]);
// }
// let a = m.join('-');
// console.log(a);

//Câu 3

// let letters = prompt("Mời nhập Input");
// let str = "";
// for (let i = 0; i<letters.length; i++) {
//     if (letters[i] === letters[i].toUpperCase()
//         && letters[i] !== letters[i].toLowerCase()) {
//         str = str + letters[i].toLowerCase();
//     } else {
//       str = str + letters[i].toUpperCase();
//     }
// }
// console.log(str);

//Câu 4
// let number = prompt("Nhập dãy số cách nhau bởi dấu phẩy ,").split(',');
// let s = "";
// for (let i=0;i<=number.length-1;i++){
//     s = Number(s) + Number(number[i]);
// }
// console.log(s);

//Câu 5
// let number = prompt("Enter a number with ,").split(',');

// let b = "";
// for (let i = 0; i <= number.length-1;i++){
//     b = push(number[i]);
// }
// console.log(b);

//bài 6
// let a =[3, 4, 6, -9, 10, -88, 2];
// let b = Number(prompt('nhập số muốn tìm'));
// let c = -1;
// for (let i = 0; i <= a.length - 1; i = i + 1) {
//     if (b === a[i]) {
//     c = i;
//     }
// }
// if(c===-1){
//     console.log(`${b} is not found in my array` );
// }else {
//     console.log(`${b} is  found in my array at index ${c}`);
// }

// bài 7
// let a = [5,7,300,90,24,50,75];

// console.log('xin chào đây là kích thước đàn cừu của tôi');
// console.log(a);

// let max_val = Math.max.apply(null, a);
// console.log(`con cừu lớn nhất của tôi có kích thước ${max_val}, hãy cạo nó`);

// a[a.indexOf(max_val)] = 8;
// console.log('sau khi cạo lông đây là đàn cừu của tôi');
// console.log(a);
// let MONTH1 = 0;
// for(let i = 0; i < 3; i++) {
//     MONTH1++
//     for(let i = 0; i <a.length; i++){
//     a[i] = a[i] + 50;
//     }
//     console.log('month'+MONTH1);
//     console.log('sau 1 tháng bầy cừu của tôi đã lớn, đây là kích thước đàn cừu của tôi');
//     console.log(a);
//     let max_val = Math.max.apply(null, a);
//     console.log(`con cừu lớn nhất của tôi có kích thước ${max_val}, hãy cạo nó`);
//     a[a.indexOf(max_val)] = 8;
//     console.log('sau khi cạo lông đây là đàn cừu của tôi');
//     console.log(a);
// }
// let sum = 0;
//  for(let i = 0; i < a.length; i++) {
//      sum += a[i];
//  }
//  console.log(`đàn của tôi có tổng kích thước ${sum}`);
//  let tien = sum * 2;
//  console.log(`tôi sẽ lấy ${sum} x 2$ = ${tien}`);

//bài 8
// let a = prompt('Mời nhập chuỗi tên');
// let b = a.split(',');
// let c =[];
// for (let i = 0; i < b.length; i++) {
//     c.push(`<${b[i]}>`);
// }
// console.log(`${b}=>  ${c}`);

// bài 9
// let a = prompt('Nhập dãy số');
// let b = a.split(',');
// let c = [];
// for (let i = 0; i < b.length; i++) {
//     if (Number(b[i]) % 2 == 1) {
//         c.push(b[i]);
//     }
// }
// console.log(`${b} => ${c}`);
