function wall(gameplay,stg){
	var pos = {x:100,y:200};
	var w = 200;
	var h = 10;
	if(stg){
		pos.x = stg.x;
		pos.y = stg.y;
		w = stg.w;
		h = stg.h;
	}
	var vel = {x:0,y:0};


	this.render = function(ctx){
		ctx.save();
		ctx.translate(pos.x,pos.y);
		ctx.fillStyle = "#000";	
		ctx.fillRect(0,0,w,h);
		ctx.restore();
	}

	this.update = function(delta){}

	this.getPos = function(){return pos;};
	this.getVel = function(){return vel;};
	this.getW = function(){return w;};
	this.getH = function(){return h;};
}