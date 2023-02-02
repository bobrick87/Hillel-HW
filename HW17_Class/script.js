class Human {
    constructor (name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Flat {
    residents = [];
    addResident(Human) {
        this.residents.push(Human);
    }
}

class House {
    flats = [];
    constructor (maxOfFlats) {
        this.maxFlats = maxOfFlats;
    }
    addFlat(Flat) {
        if(this.flats.length < this.maxFlats) {
            this.flats.push(Flat);
        } else {
            alert("Це вже лишня");
        }
    }
}

const ivan = new Human ('Ivan', 'male');
const masha = new Human('Masha', 'female');
const onufriy = new Human('Onufriy', 'male');
const dozdraperma = new Human('Dozdraperma', 'female');
const vitalka = new Human('Vitalka','male');
const innokentiy = new Human('Innokentiy', 'male');

const flat1 = new Flat;
const flat2 = new Flat;
const flat3 = new Flat;
const flat4 = new Flat;

flat1.addResident(ivan);
flat1.addResident(masha);
flat2.addResident(onufriy);
flat2.addResident(dozdraperma);
flat3.addResident(vitalka);
flat4.addResident(innokentiy);

const house1 = new House(2);

house1.addFlat(flat1);
house1.addFlat(flat2);
house1.addFlat(flat3);
house1.addFlat(flat4);

console.log(masha);
console.log(flat2);
console.log(house1);