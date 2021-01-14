// let calculator = {
// 	read(){
// 		this.a = Number(prompt(`What is the first number?`, 0));
// 		this.b = Number(prompt(`What is the second nuber?`, 0));
// 	},
// 	sum(){
// 		return this.a + this.b
// 	},
// 	mul(){
// 		return this.a * this.b
// 	}
// }

// calculator.read();
// console.log(`The sum of ${calculator.a} + ${calculator.b} = ${calculator.sum}`);
// console.log(`The product of ${calculator.a} * ${calculator.b} = ${calculator.mul}`);

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////



let ladder = {
	step: 0,
	height(rung) {
		this.rungs = rung
		return this
	},
	up() {
		if (this.step < this.rungs) {
			this.step++;
		}
		return this

	},
	down() {
		if (this.step > 0) {
			this.step--;
		}
		return this
	},
	showStep() {
		console.log(this.step);
		return this
	}
	
}

ladder.height(4).up().up().up().up().up().up().up().up().up().down().down().up().up().showStep()

