class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  presentation() {
    console.log(`Jag är en ${this.brand} ${this.model} från ${this.year}`);
  }
}

module.exports = Car;
