// new Promise((resolve, reject) => {
//   resolve({
//     name: "irem",
//     age: 24,
//   });
//   reject("çözülemedi.");
// })
//   .then((data) => {
//     data.web = "https://www.youtube.com/watch?v=_o2OiA4HPtI";
//     return data;
//   })

//   .then((data) => console.log(data))
//   .catch((data) => console.log(data))
//   .finally(() => console.log("bitti...")); //başarılı ya da başarısız farketmez, işlem bittiğinde kullanabiliriz.

// //ÖRNEK
// const box = document.querySelector(".box");

// function wait(ms) {
//   return new Promise(function (resolve) {
//     return setTimeout(resolve, ms);
//   });
// }
// wait(1000)
//   .then(() => {
//     //1000ms bekle sonra işlemi yap.
//     box.classList.add("bigger");
//     return wait(500); //1000ms daha bekle.yoksa işlemler aynı anda gerçekleşiyor.
//   })
//   .then(() => {
//     box.classList.add("circle");
//     return wait(500);
//   })
//   .then(() => {
//     box.classList.add("colored");
//     return wait(500);
//   })
//   .then(() => {
//     box.classList.add("drift");
//     return wait(500);
//   })
//   .then(() => {
//     box.classList.remove("drift");
//     return wait(500);
//   })
//   .then(() => {
//     box.classList.remove("colored");
//     return wait(500);
//   })
//   .then(() => {
//     box.classList.remove("circle");
//     return wait(500);
//   })
//   .then(() => {
//     box.classList.remove("bigger");
//     return wait(500);
//   })
//   .finally(() => console.log("animasyon bitti..."));

//bazı promise metodları
//promise.all()  --  hepsi resolve olursa.
//promise.race()  --  ilk sonuçlanan(resolve ya da reject)
//promise.allSettled()  --  hepsi tamamlandığında
//promise.any()  --  ilk resolve olan
