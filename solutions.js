// Part One

class Cat {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Meow`);
  }
}

const garfield = new Cat('Garfield', 8);
const sylvester = new Cat('Sylvester', 4);

console.log('Garfield:', garfield);
console.log('Sylvester:', sylvester);

// Part Two

const ageCat = (cat) => cat.age++;

ageCat(garfield);
console.log('Garfield:', garfield);

const catsArray = [];
const catsArrayLength = 6;
const catNames = [
  'Ricki',
  'Ronnie',
  'Mike',
  'Bobby',
  'Ralph',
  'Johnny'
];

for (let i = 0; i < catsArrayLength; i++) {
  const newCat = new Cat(catNames[i], 1);
  catsArray.push(newCat);
}

console.log(catsArray[3]);

const catPerson = {
  name: 'Jane',
  cats: catsArray
}

console.log('Cat person:', catPerson);

// Part Three

class Pirate {
  constructor (name, rank, age) {
    this.name = name;
    this.rank = rank;
    this.age = age;
  }
  greeting() {
    console.log('aarrghh matey');
  }
  ageUp() {
    this.age++;
  }
  drink() {
    console.log('drinks rum');
  }
}

const pirate1 = new Pirate('jim', 'captain', 43);
const pirate2 = new Pirate('rick', 'first mate', 24);
const pirate3 = new Pirate('joe', 'gunner', 13);
const pirate4 = new Pirate('ron', 'captain', 43);
const pirate5 = new Pirate('fred', 'cook', 40);
const pirate6 = new Pirate('syd', 'sommelier', 34);

const blackPearl = [pirate1, pirate2, pirate3];
const redCrow = [pirate4, pirate5, pirate6];

const rollCall = (ship) => {
  console.log({ship});
}

rollCall(blackPearl);
rollCall(redCrow);
