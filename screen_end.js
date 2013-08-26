function screen_end(s){
	var txt, btn;
	var that = this;
	this.init("end");
	//bind events
	score = this.screenEl.find("#score");
	console.log(s);
	score.html(""+ s);
}

GAME.utils.inherits(screen_end, screen);