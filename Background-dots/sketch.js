function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  	canvas = createCanvas(windowWidth, windowHeight);
  	canvas.position(0,0);
  	canvas.style('z-index', '-1')
  	background(51);
  	
  	myDots = [];
  
  	for (var i = 0 - 1; i < 30; i++) {
		myDots.push(new Particle(random(windowWidth), random(windowHeight)));
	}
	myDots[0].mahboi = true;
  	
}


function draw() {
	background(20);

	myDots.forEach(function(dot){
		dot.draw();
	})
	
	counter = 0;

	//Only compairing against partiles that have not already been compaired to current particle
	//for performance sake
	for (var i = 0; i < myDots.length - 2 ; i++) {
		for (var j = i+1; j <= myDots.length - 1 ; j++) {
			counter++
			distance = (Math.pow((myDots[i].x - myDots[j].x), 2) + Math.pow((myDots[i].y - myDots[j].y), 2));
		
			if(distance < 50000){
				weight = map(distance, 1, 50000, 1.5, .1)
				strokeWeight(weight);
				stroke('grey');
				line(myDots[i].x, myDots[i].y, myDots[j].x, myDots[j].y);
			}
		}
	}
	//console.log(counter);
}


function Particle(myX, myY){
	this.x = myX;
	this.y = myY;
	this.vx = random(-1, 1);
	this.vy = random(-1, 1);
	this.mahboi = false;
	fill('#FFFFFFF');
	
	


	this.draw = function(){
		if(this.xflip){
			fill('red');
		}
		else{
			fill('white');
		}

		if (this.mahboi){
			fill('#39FF14');
		}

		if(this.x >= width || this.x <= 0){
			this.vx *= -1;
		}

		if(this.y >= height || this.y <= 0){
			this.vy *= -1;
		}

		// if(this.mahboi){
		// 	console.log('X - ' + this.x + ' Y - ' + this.x);
		// }
		
		this.x += this.vx;
		this.y += this.vy;

		if(this.mahboi){
			ellipse(this.x,this.y,10,10);
		}else{
			ellipse(this.x,this.y,5,5);
		}
		
	}
}
