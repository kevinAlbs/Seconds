function neuron(gameplay){
	var pos = {x:100,y:300};
	var vel = {x:0,y:0};
	var a = 0;
	var origW = 12;
	var origH = 12;
	var w = origW;
	var h = origH;
	var angularSpeed = .15;
	var speed = 4.5;
	var slowing = .9;
	var DEATH_TIME = 1.5;
	var deathTimer = DEATH_TIME;
	var dead = false;

	this.update = function(delta, ws){
		if(dead){
			deathTimer -= delta;
			return;
		}
		if(GAME.keys[37]){
			//left
			a -= angularSpeed;
		}
		if(GAME.keys[39]){
			a += angularSpeed;
		}

		if(GAME.keys[38]){
			//set velocity
			vel.y = -1 * Math.cos(a) * speed;
			vel.x = Math.sin(a) * speed;
		}
		else{
			vel.x *= slowing;
			vel.y *= slowing;//slow down
		}
		var cPos = this.getCollisionPoint();
		pos.x += vel.x;
		pos.y += vel.y;

		for(var i = 0; i < ws.length; i++){
			var wPos = ws[i].getPos();
			var wW = ws[i].getW();
			var wH = ws[i].getH();
			if(cPos.x >= wPos.x && cPos.x <= wPos.x + wW){
				//within x
				if(cPos.y >= wPos.y && cPos.y <= wPos.y + wH){
					//inside
					//get shortest perp. dist
					var sides = [];
					sides.push({
							dist: Math.abs(wPos.x - cPos.x),
							newX : wPos.x,
							newY : cPos.y
						});
					sides.push({
							dist: Math.abs(wPos.x + wW - cPos.x),
							newX : wPos.x + wW,
							newY : cPos.y
						});
					sides.push({
							dist: Math.abs(wPos.y - cPos.y),
							newX : cPos.x,
							newY : wPos.y
						});
					sides.push({
							dist: Math.abs(wPos.y + wH - cPos.y),
							newX : cPos.x,
							newY : wPos.y + wH
						});
					var shortest = {
						dist: 1000000
					};
					if(sides.length > 0){
						for(var i = 0; i < sides.length; i++){
							if(sides[i].dist < shortest.dist){
								shortest = sides[i];
							}
						}
						console.log("2");
						//have to set pos.x based on collision point
						pos.x = shortest.newX - (h/2 * Math.sin(a));
						pos.y = shortest.newY + (h/2 * Math.cos(a));
						vel.x *= 0;
						vel.y *= 0;
						break;
					}
				}
			}

		}

		if(pos.x - w/2 < 0){
			pos.x = w/2;
		}
		if(pos.x  + w/2 > gameplay.cw){
			pos.x = gameplay.cw - w/2;
		}
		if(pos.y - h/2 < 0){
			pos.y = h/2;
		}
		if(pos.y + h/2> gameplay.ch){
			pos.y = gameplay.ch - h/2;
		}

	}

	this.render = function(ctx){
		ctx.save();

		if(dead){
			if(deathTimer > 0){
				//draw explosion
				var length = (DEATH_TIME-deathTimer) * 30;
				for(var i = 0; i < 8; i++){
					var angle = Math.PI * 2 / 8 * i;
					var s = 5;
					s *= (deathTimer/DEATH_TIME);
					ctx.fillStyle = "#0F0";
					ctx.fillRect(pos.x + Math.cos(angle) * length - s/2, pos.y + Math.sin(angle) * length - s/2, s, s);
				}
				//ctx.fillRect(pos.x, pos.y, origW * (2-deathTimer), origH * (2 - deathTimer));
			}
		}
		else{
			ctx.beginPath();
			ctx.translate(pos.x,pos.y);
			ctx.rotate(a);
			ctx.moveTo(0, -1 * h/2);
			ctx.lineTo(w/2, h);
			ctx.lineTo(-1 * w/2, h);
			ctx.lineTo(0, -1 * h/2);
			ctx.fill();
		}
		ctx.restore();
	}
	this.getPos = function(){return pos;};
	this.getCollisionPoint = function(){
		return {
			x : pos.x + (h/2 * Math.sin(a)),
			y : pos.y - (h/2 * Math.cos(a))
		}
	};
	this.getVel = function(){return vel;};
	this.getW = function(){return w;};
	this.getH = function(){return h;};
	this.scale = function(scale){
		w = origW * scale;
		h = origH * scale;
	};

	this.reset = function(){
		w = origW;
		h = origH;
		pos.x = gameplay.cw / 2 - w/2;
		pos.y = gameplay.ch - h * 1.8;
		vel.x = 0;
		vel.y = 0;
		dead = false;
	}

	this.die = function(){
		dead = true;
		deathTimer = DEATH_TIME;
		GAME.data.sounds.pop.snd.play();
	}
	this.isDead = function(){
		return dead;
	}
	this.deathTimerFinished = function(){
		return deathTimer <= 0;
	}
	this.reset();
}