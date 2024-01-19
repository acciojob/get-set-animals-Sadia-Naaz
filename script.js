//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get mySpecies(){
		return this.species;
	}
	makeSound(){
		console.log("sound");
	}
}

class Dog extends Animal {
	super();
	makeSound(){
		console.log("woof");
	}
}

class Cat extends Animal {
	super();
	makeSound(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
