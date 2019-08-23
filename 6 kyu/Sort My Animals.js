//Consider the following class:
//
// var Animal = {
//     name: "Cat",
//     numberOfLegs: 4
// }
// Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the
// original list, sorted first by the animal's number of legs, and then by its name.
//
// If null is passed, the method should return null. If an empty list is passed, it should return an empty list back.

function sortAnimal(animal) { //No native methods challenge
    if (animal == null) return null;
    let temp;
    for(let i = 0; i < animal.length - 1; i++)
        for (let j = i + 1; j < animal.length; j++)
            if (animal[i].numberOfLegs > animal[j].numberOfLegs ||
                (animal[i].numberOfLegs == animal[j].numberOfLegs &&
                    animal[i].name > animal[j].name)) {
                temp = animal[i];
                animal[i] = animal[j];
                animal[j] = temp;
            }
    return animal;
}