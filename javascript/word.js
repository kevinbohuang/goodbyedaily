// Bezier Easing
let easing = function (t) { return (--t)*t*t+1 }

// Copyright SuperHi
class Word {
	constructor(x, y, text){
		let randomAngle = random(-0.25 * PI, 0.25 *PI)
		// let mass = 0.25 + random(0, 0.5)

		this.position = createVector(x, y)
		this.speed = createVector(0, -5)
		this.speed = this.speed.rotate(randomAngle)
		this.acc = createVector(0, 0.5) //can be mass instead of 0.5 to fall objects faster or slower than others

		this.friction = 0.99
		this.elastic = 0.8
		this.time = 0

		//this.size = size
		this.text = text
		this.fontSize = random(64, 128)
	}

	move(){
		this.speed = this.speed.add(this.acc)
		this.speed = this.speed.mult(this.friction)
		this.position = this.position.add(this.speed)

		if (this.position.y > windowHeight){
			this.speed.y = this.speed.y * - 1 * this.elastic
		}

		this.position.y = constrain(this.position.y, -1000, windowHeight)
		this.time = this.time + 0.005
	}

	draw(){
		this.move()

		let alpha = 255 - 255 * easing(this.time)

		//circle(this.position.x, this.position.y, this.size)
		fill(255, 255, 255, alpha)
		noStroke()
		textSize(this.fontSize)
		textFont("Montserrat")
		textAlign(CENTER, BASELINE)
		text(this.text, this.position.x, this.position.y)
	}
}