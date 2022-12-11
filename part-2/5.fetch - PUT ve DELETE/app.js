//put request ile yine veri gönderiyoruz ancak aynı içerik varsa gönderilenle değiştiriyoruz.
class Request {
  put(url, data) {
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  delete(url) {
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => console.log("veri silme işlemi başarılı."))
      .catch((err) => err);
  }
}
const request = new Request();

// request.put("http://jsonplaceholder.typicode.com/albums/1", {
//   //id'si 1 olanı seçtik --> albums/1 , bunun yerine girdiğimiz veri geldi.
//   userId: 5,
//   title: "thriller",
// });
request.delete("http://jsonplaceholder.typicode.com/albums/1");
