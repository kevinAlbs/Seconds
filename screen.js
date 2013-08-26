function screen(){
	this.screenEl = null;
	this.init = function(name){
		this.screenEl = $("#screen_" + name);
		this.screenEl.show();
		GAME.container.append(this.screenEl);
	}
	this.dispose = function(){
		this.screenEl.hide();
	}
	this.update = function(delta){}
}