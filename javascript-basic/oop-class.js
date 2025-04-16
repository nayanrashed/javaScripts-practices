// class in Javascript
class child {
  constructor(name, school, birthYear) {
    this.name = name;
    this.school = school;
    this.birthYear = birthYear;
  }

  currentAge() {
    const curretYear = new Date().getFullYear();
    const age = curretYear - this.birthYear;
    console.log(`${this.name} is ${age} years old `);
    
  }
}
const musab = new child('musab','New Blown', 2018)
console.log(musab);
console.log(musab.currentAge());
