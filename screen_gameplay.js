function screen_gameplay(){
	this.init("gameplay");

	var that = this;
	var cnv = this.screenEl.find("canvas")[0];
	var ctx = cnv.getContext("2d");
	var stat = this.screenEl.find("#status");
	var img = this.screenEl.find("#img_container img");
	var time = this.screenEl.find("#timer");
	var neuronTip = this.screenEl.find("#neuronTip");
	var receptorTip = this.screenEl.find("#receptorTip");
	var overlay = this.screenEl.find("#overlay");
	var nextLvlButton = this.screenEl.find("#next");
	var qFb = this.screenEl.find("#quality");
	var timer = 0;
	var isUpdating = false;
	var roundMessage = "";//message to user on how they did
	var won = false;
	var quality = 0;
	var qualityInc = 0;
	var readyForNextLvl = false;
	var player = new neuron(this);
	var rs = [], ws = [];
	var totalScore = 0;
	var targetR = null;
	this.level = 0;
	this.round = 0;
	this.cw = cnv.width;
	this.ch = cnv.height;
	this.readied = false;

	
	ctx.fillStyle = "#fceaea";
	ctx.fillRect(0,0,this.cw,this.ch);
	nextLvlButton.on("click", function(){that.startLevel()});

	this.readyUp = function(){
		//show press space to start
		that.readied = true;
		overlay.find("p#msg").css("color", "#000").html("Press space to begin round");
		overlay.show();
	}
	this.render = function(){
		//show tutorial stuff
		if(this.round == 0 && this.level == 0){
			//show tips
			neuronTip.show().css({
				top: player.getPos().y - 10,
				left: player.getPos().x + 20
			});
			receptorTip.show().css({
				top: targetR.getPos().y - 10, 
				left: targetR.getPos().x + 20
			});
		}
		else{
			neuronTip.hide();
			receptorTip.hide();
		}

		time.html(Math.ceil(timer));
		ctx.save();
		ctx.fillStyle = "#fceaea";
		ctx.fillRect(0,0,this.cw,this.ch);
		ctx.fillStyle = "#000";

		
		for(var i = 0; i < rs.length; i++){
			rs[i].render(ctx);
		}
		for(var i = 0; i < ws.length; i++){
			ws[i].render(ctx);
		}
		player.render(ctx);
		ctx.restore();
	}

	//bind events
	this.update = function(delta){
		if(this.readied && GAME.keys[32] && !isUpdating){
			overlay.hide();
			this.readied = false;
			this.startRound();
		}
		if(isUpdating){
			if(!player.isDead()){
				timer -= delta;
				var scale = timer/10;
				if(scale < .25){
					scale = .25;
				}
				player.scale(scale);
				if(timer <= 0){
					//time up
					roundMessage = "You ran out of time!";
					player.die();
				}
			}
			player.update(delta, ws);
			for(var i = 0; i < rs.length; i++){
				rs[i].update(delta);
			}
			for(var i = 0; i < ws.length; i++){
				ws[i].update(delta);
			}

			this.render();
			checkCollisions();
			if(player.isDead()){
				if(player.deathTimerFinished()){
					endRound();
				}
			}
		}
	}

	function checkCollisions(){
		if(player.isDead()){return;}
		var pPos = player.getCollisionPoint();
		var pVel = player.getVel();
		for(var i = 0; i < rs.length; i++){
			var rPos = rs[i].getPos();
			var dist = GAME.utils.dist(pPos.x, pPos.y, rPos.x, rPos.y);
			if(dist < rs[i].getR()){
				//colliding
				if(rs[i] == targetR){
					//stop timer
					player.die();
					won = true;
					roundMessage = "Great!";
				}
				else{
					player.die();
					roundMessage = "You went into the wrong receptor!";
				}
			}
		}
	}

	function genR(isTarget){
		var r = new receptor(that, isTarget);
		//randomize, add speed based on level
		return r;
	}

	this.startRound = function(){
		player.reset();
		timer = 10;
		scale = 1;
		won = false;
		//initialize the number of receptors
		rs = [];
		targetR = genR(true);
		rs.push(targetR);
		for(var i = 1; i <= this.round + this.level; i++){
			rs.push(genR(false));
		}
		isUpdating = true;
		qualityInc = 100 / GAME.data.levels[this.level].rounds.length;
	};

	function endLevel(){
		totalScore += quality;
		
		that.round = 0;
		ws = [];
		that.level++;
		readyForNextLvl = true;
		nextLvlButton.show();
		console.log(that.level);
		if(that.level == 10){
			nextLvlButton.html("Finish >>");
		}
		qFb.show();
		qFb.find("span").html("" + Math.round(quality));
		quality = 0;
	}

	function endRound(){
		isUpdating = false;

		var p = overlay.find("p#stat").html(roundMessage);

		if(won){
			p.css('color', "#0F0");
			quality += qualityInc;
			overlay.find("p#msg").html(GAME.data.levels[that.level].rounds[that.round].c);
		}
		else{
			p.css('color', "#F00");
			overlay.find("p#msg").html(GAME.data.levels[that.level].rounds[that.round].i);
		}
		overlay.show();

		
		that.round++;
		//check if this is the last round, if it is show the continue button
		if(that.round >= GAME.data.levels[that.level].rounds.length){
			endLevel();
		}
		else{
			//maybe read message
			window.setTimeout(function(){that.giveRoundIntro();}, 2000);
		}
	}
	this.startLevel = function(){
		qFb.hide();
		nextLvlButton.hide();
		if(that.level == 10){
			GAME.setScreen(new screen_end(totalScore));
			this.dispose();
			return;
		}
		var wallData = GAME.data.levels[that.level].walls;
		if(wallData){
			
			for(var i = 0; i < wallData.length; i++){
				ws.push(new wall(that, wallData[i]));
			}
		}
		//load name and stuff
		var words = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"];
		that.screenEl.find("h2").html(words[that.level] + " Second");
		that.screenEl.find("h1").html(GAME.data.levels[that.level].name);
		that.giveRoundIntro();
	};

	this.giveRoundIntro = function(){
		img.attr("src", "img/" + that.level + "_" + that.round + ".png").show();
		stat.html(GAME.data.levels[that.level].rounds[that.round].stat);
		//read the stuff, call readyUp when done
		window.setTimeout(that.readyUp, 1000);

	};
	
	this.startLevel();
}

GAME.utils.inherits(screen_gameplay, screen);
