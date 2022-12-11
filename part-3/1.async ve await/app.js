//async fonksiyonları içine verilmese dahi promise yapısı döner.
// async function f(name) {
//   return name;  //return new promise ...
// }
// console.log(f("irem"));

//bu iki fonksiyon aynı anlama gelir

// async function f() {
//   return 1;
// }
// f()
//   .then((response) => console.log(response))

// async function f() {
//   return new promise((resolve,reject) => resolve(1);)
// }
// f()
//   .then((response) => console.log(response))

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   let result = await promise; //bu satırda duruldu, resolve dönene kadar beklendi ve aşağıdaki işlemlerde çalışmadı,
//   //resolve gelip result elde edildi ve devam edildi.

//   alert(result); // "done!"
// }

// f();

// async function test(data) {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 3000);
//   });
//   let response = await promise; //resolve gelene kadar 3sn boyunca aşağıdaki işlemler bekledi,sonrasında data ve naber beraber geldi.
//   console.log(data);
//   console.log("naber");
// }
// test("irem");

// async function test(data) {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 3000);
//   });
//   let response = await promise; //resolve gelene kadar 3sn boyunca aşağıdaki işlemler bekledi,sonrasında data ve naber beraber geldi.
//   return response; // burdada sonucu bir promise yapısı içine alacağı için then ile dışarıdan alabiliriz.
// }
// test("irem").then((response) => console.log(response));

// async function question(data) {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof data === "string") {
//         resolve(data);
//       } else {
//         reject(new Error("string bir değer giriniz."));
//       }
//     }, 3000);
//   });
//   const response = await promise;
//   return response;
// }
// question(5)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//Fetch ile kullanımını görelim.
async function getData(url) {
  const response = await fetch(url); //response objesi
  const data = await response.json();
  console.log(data);
}
getData("http://jsonplaceholder.typicode.com/albums");
