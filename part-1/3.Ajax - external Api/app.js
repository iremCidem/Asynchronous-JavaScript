// const APIKey = "UnD4h7l4FIRsqFy5wRO80eD3HylbUtsM";
var myHeaders = new Headers();
myHeaders.append("apikey", "UnD4h7l4FIRsqFy5wRO80eD3HylbUtsM");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

document.querySelector("#change").addEventListener("click", deneme);
function deneme() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "http://api.apilayer.com/exchangerates_data/live?base=USD&symbols=EUR,GBP",
    requestOptions
  );
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(xhr.responseText);
    }
  };

  xhr.send();
}
//bu proje bitmedi.
