//text dosyasından verileri alma
function getTextFile() {
  fetch("text.txt")
    .then(function (response) {
      return response.text(); //arrow function- .then(response => response.text());)
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

//getTextFile();

function getJsonFile() {
  fetch("example.json")
    .then(function (response) {
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

//getJsonFile();

//  EXTERNAL BİR APIDEN VERİ ALMA
// var myHeaders = new Headers();
// myHeaders.append("apikey", "UnD4h7l4FIRsqFy5wRO80eD3HylbUtsM");

// var requestOptions = {
//   method: "GET",
//   redirect: "follow",
//   headers: myHeaders,
// };

// function getExternalApi() {
//   fetch(
//     "http://api.apilayer.com/exchangerates_data/live?base=USD&symbols=EUR,GBP",
//     requestOptions
//   )
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

// getExternalApi();

var myHeaders = new Headers();
myHeaders.append("apikey", "UnD4h7l4FIRsqFy5wRO80eD3HylbUtsM");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

fetch(
  "http://api.apilayer.com/exchangerates_data/convert?to=to&from=from&amount=amount",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
