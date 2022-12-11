// fetchin default durumu get request olur.
class Request {
  get(url) {
    //get request için
    return new Promise(function (resolve, reject) {
      //veriyi get fonksiyonu dışında elde edebilmek için bu verileri de bir promise yapısına dönüştürdük.
      fetch(url) //bu url bize bir json objesi dönecek ve biz bunu then ile yakalayacağız.
        .then((response) => response.json()) //response içindeki json fonksiyonuyla responsun json halini alabiliyoruz.
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}
const request = new Request();

request
  .get("http://jsonplaceholder.typicode.com/albums")
  .then(function (data) {
    console.log(data);
  })
  .catch((err) => console.log(err));
