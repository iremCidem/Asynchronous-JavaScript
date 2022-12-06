// Callback fonksiyonları başka fonksiyonlara parametre olarak gönderilebilir.
//örneğin foreach metodu içine parametre olarak bir fonksiyon göndeririz.,addeventlistener metodu,
//asenkron işlemler için önemli.
// const langs = ["python", "javascript", "c++"];
// langs.forEach(function (lang) {
//   console.log(lang);
// });

// function process1() {
//   setTimeout(function () {
//     console.log("process 1");
//   }, 3000); //asenkron işlem gerçekleşti,bir işlem bir diğerini beklemedi,process 2 önce yazıldı, 3sn sonra process1 yazıldı.
// }
// function process2() {
//   console.log("process 2");
// }

// process1();
// process2();

//callback fonksiyonu kullanımına bakalım.
// function process1(callback) {
//   setTimeout(function () {
//     console.log("process 1");
//     callback();
//   }, 3000);
// }

// function process2() {
//   setTimeout(function () {
//     console.log("process 2");
//   }, 1000);
// }

// process1(process2); //önce process1 sonra process2 çalıştı.

const langs = ["python", "javascript", "c++"];

function addLang(lang, callback) {
  setTimeout(function () {
    langs.push(lang);
    console.log("eklendi");
    callback();
  }, 2000);
}

function getAllLangs() {
  setTimeout(function () {
    langs.forEach(function (lang) {
      console.log(lang);
    });
  }, 1000);
}

addLang("java", getAllLangs);
