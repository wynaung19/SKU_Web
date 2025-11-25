// console.log("Wai Yan" + " Naung");
// console.log(10 + 5);
// console.log(2 - 1);
// console.log(4 * 2);
// console.log(10 / 2);
// console.log(10 % 3);
// console.log('This is "String"');
// console.log("Wai Yan\nNaung");
// console.log("Wai Yan\tNaung");
// console.log("Wai Yan\\\\Naung");
// console.log("Hello"[0]);
// console.log("Hello"[1]);
// console.log("Hello"[2]);
// console.log(`Wai Yan Naung`);

// console.log(`Sum: ${10 + 5}`);
// console.log(`Year : ${new Date().getFullYear()}`);

// console.log(4 > 5);
// console.log(4 < 5);
// console.log(4 >= 5);
// console.log(4 <= 5);
// console.log(4 == 5);
// console.log(4 != 5);
// console.log(4 === 5);
// console.log(4 !== 5);

// console.log(true && false);
// console.log(true || false);
// console.log(!true);

// console.log("a" < "b");
// console.log(3 < 2 == 1);
// console.log(3 > 2 && 2 > 1);

// let hours = new Date().getHours();
// console.log(typeof hours);

// console.log(hours < 3 || 8 < hours);
// console.log(3 <= hours && hours <= 8);

// let pi = 3.141592653589793;
// let radius = 5;
// let area = pi * radius * radius;
// let circumference = 2 * pi * radius;

// console.log(`Circumference of Circle: ${circumference}`);
// console.log(`Area of Circle: ${area}`);

// let output = 0;
// output += 5;
// output *= 2;
// console.log(output);

// let o = "hello";
// o += " world";
// o += "!";
// console.log(o);

// let n = 10;
// console.log(n);
// console.log(n++);
// console.log(++n);
// console.log(n--);
// console.log(--n);
// console.log(n);

// console.log(Number("52"));
// console.log(Number(false));
// console.log(Number(true));
// console.log(String(52));
// console.log(Number("WaiYanNaung"));

// let nan = Number("WaiYanNaung");
// console.log(isNaN(nan));
// console.log(nan == nan);
// console.log(nan === nan);
// console.log(nan != nan);

// console.log(Boolean(1));
// console.log(Boolean(-1));
// console.log(Boolean(0));
// console.log(Boolean("hello"));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));

// console.log("52" - 200);
// console.log("52" * 200);
// console.log("52" / 200);
// console.log("52" % 200);
// console.log("10" % 2);

// console.log(`52 == "52" : ${52 == "52"}`);
// console.log(`52 === "52" : ${52 === "52"}`);
// console.log();
// console.log(`0 == "" : ${0 == ""}`);
// console.log(`0 === "" : ${0 === ""}`);
// console.log(`0 == false : ${0 == false}`);
// console.log(`0 === false : ${0 === false}`);
// console.log(`null == undefined : ${null == undefined}`);
// console.log(`null === undefined : ${null === undefined}`);

// const a = 10;
// a = 20;
// console.log(a);

// let date = new Date();
// let hours = date.getHours();

// if (date.getHours() < 12) {
//   console.log("오전");
// }
// if (date.getHours() >= 12) {
//   console.log("오후");
// }

// if (date.getHours() < 12) {
//   console.log("오전");
// } else {
//   console.log("오후");
// }

// let date = new Date();
// let hours = date.getHours();

// if (hours < 11) {
//   console.log("아침");
// } else {
//   if (hours < 15) {
//     console.log("점심");
//   } else {
//     console.log("저녁");
//   }
// }

// switch (date.getMonth() + 1) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("겨울");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("봄");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("여름");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("가을");
//     break;
//   default:
//     console.log("idk");
//     break;
// }

// let test;
// test = typeof test != "undefined" ? test : "초기화1";
// console.log(test);
// test = typeof test != "undefined" ? test : "초기화2";
// console.log(test);

// let a = [1, 3, 324, 56, 4, 34, 234, 34, 3452, 34];
// a[0] = 1;
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// let i = 0;
// while (i < a.length) {
//   //   console.log(i + " 번째 출력 : " + a[i]);
//   console.log(`${i} 번째 출력 : ${a[i]}`);
//   i++;
// }

// for (let i = 0; i < a.length; i++) {
//   console.log(`${i} 번째 출력 : ${a[i]}`);
// }

// for (let i = a.length - 1; i >= 0; i--) {
//   console.log(`${i} 번째 출력 : ${a[i]}`);
// }

// for (let i in a) {
//   console.log(`${i} 번째 출력 : ${a[i]}`);
// }

// for (const i of a) {
//   console.log(i);
// }

// const myObject = { a: 1, b: 2, c: 3 };
// for (const key in myObject) {
//   console.log(`Key: ${key}, Value: ${myObject[key]}`);
// }

// let out = "";
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < i + 1; j++) {
//     out += "*";
//   }
//   out += "\n";
// }
// console.log(out);
// let out = "";
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < -i + 10; j++) {
//     out += " ";
//   }
//   for (let k = 0; k < i + 1; k++) {
//     out += "*";
//   }
//   out += "\n";
// }
// console.log(out);

// let i = 0;
// let arr = [1, 4, 23, 2, 6, 8, 34];
// let out;

// while (true) {
//   if (arr[i] % 2 == 0) {
//     out = arr[i];
//     break;
//   }
//   i++;
// }
// console.log(`Output : ${out}`);
// let a; // global
// {
//   let a = 10; // remove let if global
// }
// console.log(a); // error, use var instead or declare as global

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i); //error

// let a = 1,
//   b = 1;
// {
//   let a = 2;
//   {
//     let a = 3;
//     console.log(a);
//     console.log(b);
//   }
//   console.log(a);
//   console.log(b);
// }

// let a = 1;
// {
//   console.log(a);
//   let a = 2;
// }

// let myfun = function () {
//   console.log("WYN");
//   console.log("WYN2");
// };
// myfun();
// console.log(myfun);

// function fun1() {
//   console.log("WYN3");
//   console.log("WYN3]4");
// }
// fun1();
// console.log(fun1);

// let f2 = () => {
//   console.log("F2");
// };
// f2();
// console.log(f2);

// let f = (a) => a * 2;
// console.log(f(2));

// function sum(min, max) {
//   let out = 0;
//   for (let i = min; i <= max; i++) {
//     out += i;
//   }
//   return out;
// }
// let sum = (min, max) => {
//   let out = 0;
//   for (let i = min; i <= max; i++) {
//     out += i;
//   }
//   return out;
// };

// console.log(sum(1, 10));

// let fun = (name = "", count = 1) => {
//   console.log(`${name} : ${count}`);
// };
// fun("Apple", 3);
// fun("Orange");

//callback
// function callTenTimes(c) {
//   for (let i = 0; i < 10; i++) {
//     c();
//   }
// }
// callTenTimes(function () {
//   console.log("WYN");
// });

// setTimeout(() => {
//   console.log("waiyan");
// }, 3000);

// console.log("aaa");

// setInterval(() => {
//   console.log("wai");
// }, 1000);
// console.log("bbb");

// fun = function () {
//   console.log("1st");
// };
// fun = function () {
//   console.log("1st2");
// };

function fun() {
  console.log("2nd");
}
function fun() {
  console.log("2nd2");
}

fun();
