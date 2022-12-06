document.querySelector("#btn").addEventListener("click", function () {
  //XMLHttpRequest objesini oluşturuyoruz.
  const xhr = new XMLHttpRequest();

  // xhr.onreadystatechange = function () {
  //   //   console.log(this.readyState); // bu şekilde ready statein 1,2,3,4 durumlarını görmüş olduk çünkü onreadystatechange durumu yaşandı.şuan 4ü de görerek responsun hazır olduğunu söyleyebiliriz.
  //   if (this.status == 200 && this.readyState == 4) {
  //     //response hazır.
  //     console.log(this.responseText); //başarılı sonuç ancak bu eski bir yöntem.
  //   }
  // };
  //bağlantı açmamız gerekli.
  xhr.open("GET", "yazı.txt", true); //hangi requesti yapicaz onu belirtmeliyiz,nereden veri alıcaz,asynchronous işlem için true.

  xhr.onload = function () {
    if (this.status === 200) {
      //onload durumu zaten ready state 4 olduğunda gerçekleşir,o yüzden bunu belirtmedik.
      document.querySelector("#ajax").textContent = this.responseText;
    }
  };
  xhr.send(); //açtığımız bağlantıdan sonra send ile request göndermemiz gerekiyor.
});

//ready state - herhangi bir serverla arasındaki bağlantı durumunu gösterir.
// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
//response text - veri olarak bir text geldiğinde kullanıyoruz.
//response XML - gelen veri xml ise kullanıyoruz.

//HTTP status codları - yaptığımız belirli bir istek sonucu durumu görmemizi sağlar.
//200: okey
//403: forbidden
//404: not found
//505: internal server error
