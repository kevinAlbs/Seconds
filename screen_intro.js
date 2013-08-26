function screen_intro(){
	var txt, btn;
	var that = this;
	this.init("intro");
	//bind events
	txt = this.screenEl.find("input[type=text]");
	btn = this.screenEl.find("button");
	btn.on("click", function(){
		GAME.setScreen(new screen_gameplay());
		that.dispose();
	});
}

GAME.utils.inherits(screen_intro, screen);