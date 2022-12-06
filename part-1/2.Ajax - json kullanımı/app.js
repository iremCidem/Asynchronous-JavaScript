document.querySelector("#ajax").addEventListener("click", getEmployees);

function getEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "employees.json", true);
  xhr.onload = function () {
    let list = document.querySelector("#employees");
    if (this.status == 200) {
      //veriler string olarak geldi bunu json objesine dönüştürelim-JSON.PARSE
      const employees = JSON.parse(xhr.responseText);
      employees.forEach(function (employee) {
        list.innerHTML += `
    <tr> 
        <td>${employee.name}</td> 
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
    </tr> `;
      });
    }
  };
  xhr.send();
}
