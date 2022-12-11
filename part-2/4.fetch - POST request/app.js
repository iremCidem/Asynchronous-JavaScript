//post request ile  bir api'ye bilgimizi gönderebiliriz. burada fetch api ve post request ile data göndericez.data "string" olmalı.
class Request {
  post(url, data) {
    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data), //bu kısım göndereceğimiz veriyi içerir.
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}
const request = new Request();
request
  .post("https://jsonplaceholder.typicode.com/albums", {
    userId: 1,
    title: "thriller",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
//json.stringfy -- stringe çevirmek için,
//json.parse --jsona dönüştürmek için.
