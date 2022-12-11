class Request {
  //   async get(url) {
  //     const response = await fetch(url); //fetch bize bir promise döndürecek bunu await ile kullanabiliriz.
  //     const data = await response.json(); //responsun json halini alıyoruz.
  //     return data;
  //   }
  //   async post(url, data) {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       body: JSON.stringify(data), //bu kısım göndereceğimiz veriyi içerir.
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     });
  //     const newdata = await response.json();
  //     return newdata;
  //   }
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const newdata = await response.json();
    return newdata;
  }

  //   async delete(url) {
  //     const response = await fetch(url, {
  //       method: "DELETE",
  //     });

  //     return "veri silme işlemi başarili.";
  //   }
}
const request = new Request();

// request
//   .get("http://jsonplaceholder.typicode.com/albums")
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// request
//   .post("https://jsonplaceholder.typicode.com/albums", {
//     userId: 1,
//     title: "thriller",
//   })
//   .then((newdata) => console.log(newdata))
//   .catch((err) => console.log(err));

request
  .put("http://jsonplaceholder.typicode.com/albums/1", {
    //id'si 1 olanı seçtik --> albums/1 , bunun yerine girdiğimiz veri geldi.
    userId: 5,
    title: "thriller",
  })
  .then((newdata) => console.log(newdata))
  .catch((err) => console.log(err));

// request
//   .delete("http://jsonplaceholder.typicode.com/albums/1")
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));
