function receptor(gameplay, isTarget){
	var pos = {x:100,y:250};
	var vel = {x:0,y:0};
	var a = 0;
	var r = 8;
	var angularSpeed = .1;
	var speed = 5;
	var slowing = .9;

	//randomize in top two thirds
	pos.x = r + (Math.random() * gameplay.cw - 2*r);
	if(!isTarget){
		pos.y = (Math.random() * gameplay.ch * 2/3);
	}
	else{
		pos.y = (Math.random() * gameplay.ch * 1/4);
	}

	//based on level, change speed
	var speed = (gameplay.level + 1) * .4;
	vel.x = (2 * Math.random() - 1) * speed;
	vel.y = (2 * Math.random() - 1) * speed;
	this.update = function(){
		pos.x += vel.x;
		pos.y += vel.y;

		if(pos.x - r < 0){
			pos.x = r;
			vel.x *= -1;
		}
		if(pos.x  + r > gameplay.cw){
			pos.x = gameplay.cw - r;
			vel.x *= -1;
		}
		if(pos.y - r < 0){
			pos.y = r;
			vel.y *= -1;
		}
		if(pos.y + r > gameplay.ch){
			pos.y = gameplay.ch - r;
			vel.y *= -1;
		}
	}

	this.render = function(ctx){
		ctx.save();
		ctx.beginPath();
		ctx.translate(pos.x,pos.y);
		ctx.fillStyle = "#FFF";
		if(isTarget){
			ctx.strokeStyle = "#0F0";
		}
		else{
			ctx.strokeStyle = "#F00";
		}
		ctx.arc(0,0,r,0,Math.PI*2);
		ctx.fill();
		ctx.stroke();
		ctx.restore();
	}

	this.getPos = function(){return pos;};
	this.getVel = function(){return vel;};
	this.getR = function(){return r;};
}