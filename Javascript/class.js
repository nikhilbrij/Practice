class Player {
	constructor(name, type){
		this.name = name;
		this.type = type;
	}

	introduce() {
		console.log(`hey i am ${this.name} and i am a ${this.type}`);
	}
}

class Cricket extends Player {
	constructor(name, type){
		super(name, type)
	}

	play(){
		console.log(`I love to play cricket and i am a ${this.type}`)
	}
}

const Cricket1 = new Cricket("Virat", "Batsman")
Cricket1.play()
Cricket1.introduce()


 