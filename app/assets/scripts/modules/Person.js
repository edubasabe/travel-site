class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log("Hi there, my name is " + this.name + " and my favorite color is " + this.favoriteColor);
  }
}

// Modo de exportar con NodeJS + Webpack
// module.exports = Person;

export default Person;
