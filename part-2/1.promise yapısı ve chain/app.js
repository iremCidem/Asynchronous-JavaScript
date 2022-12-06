//promise yapısı dönen bir fonksiyon

// function getData(data) {
//   return new Promise(function (resolve, reject) {
//     //resolve("olumlu sonuç");  fulfilled:olumlu sonuç şeklinde bir obje döndü.
//     //reject("olumsuz sonuç"); rejected:olumsuz sonuç şeklinde bir obje döndü.
//   });
// }

// console.log(getData("HELLO"));

//peki bu cevabı nasıl alıcaz.
// function getData(data) {
//   return new Promise(function (resolve, reject) {
//     //resolve("olumlu sonuçlandı"); //bu bizim value
//     reject("olumsuz sonuçlandı.");
//   });
// }

// // getData("hello").then(function (response) {
// //   //then fonksiyonu ile olumlu sonucu aldık.
// //   console.log(response);
// // });

// getData("hello").catch(function (err) {
//   //catch fonksiyonu ile reject durumundaki sonucu alıyoruz, sonuç = err
//   console.log(err);
// });

//resolve ve reject durumunu beraber görelim.
//data değeri string olursa aynısını dön, olmazsa reject gönder.

// function getData(data) {
//   return new Promise(function (resolve, reject) {
//     if (typeof data === "string") {
//       resolve("başarılı," + data);
//     } else {
//       reject(new Error("lütfen string bir değer giriniz..."));
//     }
//   });
// }

// getData("merhaba")
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// getData(24)
//   .then((response) => console.log(response))
//   .catch((err) => {
//     console.log(err);
//   });

//promise döndüren başka bir fonksiyon yazalım.

function addtwo(number) {
  return new Promise(function (resolve, reject) {
    if (typeof number === "number") {
      resolve(number + 2);
    } else {
      reject(new Error("geçersiz giriş..."));
    }
  });
}

addtwo(2)
  .then(function (response) {
    console.log(response); //12aldık.
    return response + 4; //bu işlemi then içinde yaptığımız için bir promise olarak geldi o nedenle then ile tekrar sonucunu aldık.
  })
  .then(function (response2) {
    console.log(response2);
  })
  .catch(function (err) {
    console.error(err);
  });

//bu promise chain yapısı- sadece 1 defa catch kullanılabilir.
