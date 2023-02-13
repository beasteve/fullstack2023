const Person = function (name) {
  // atributo público porque está declarado con this
  this.name = name || "";
  // atributo privado porque está declarado con const
  const lastname = "González";
  // atributo privado porque está declarado con const
  const myName = this.name;
  // método privado porque está declarado con const
  const fullName = () => {
    return myName + " " + lastname;
  };
  // método público porque está declarado con this
  this.introduce = () => {
    return "Hola, mi nombre es " + fullName();
  };
};
const oscar = new Person("Óscar");
// Óscar
console.log(oscar.name);
// Hola, mi nombre es Óscar González
console.log(oscar.introduce());
// undefined porque el atributo es privado
console.log(oscar.lastname);
// error porque el método no privado y no se puede acceder a él (es undefined) e invocar
//a undefined genera un error
console.log(oscar.fullName());
