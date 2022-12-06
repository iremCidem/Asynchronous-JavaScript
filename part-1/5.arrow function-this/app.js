const person = {
  age: 24,
  tellAge: function () {
    console.log(this.age);
  },
};

person.tellAge(); //24 olarak geldi. this-person
