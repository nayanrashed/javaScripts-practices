// class in Javascript Example
class child2 {
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
  const musab = new child2('musab','New Blown', 2018)
  const mira = new child2('mira','N', 2023)
  console.log(musab);
  console.log(musab.currentAge());
  console.log(mira.currentAge());
  