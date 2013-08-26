function game(){
	var curScreen = null;
	var prevTime = (new Date()).getTime();
	var that = this;
	this.name = "Default";
	this.keys = [];
	this.setScreen = function(screen){
		curScreen = screen;
	};
	this.utils = (function(){
		return {
			inherits : function(childClass, parentClass){
				childClass.prototype = new parentClass();
			},
			dist : function(x1,y1,x2,y2){
				return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
			}
		}
	}());
	this.tick = function(){
		var curTime = (new Date()).getTime();
		var diff = curTime - prevTime;
		curScreen.update(diff/1000);
		prevTime = curTime;
	}
	this.container = $("#container");
	this.globalTimer = window.setInterval(this.tick, 30);

	$("body").on("keydown", function(e){
		if((e.keyCode >= 37 && e.keyCode <= 40) || e.keyCode == 32){
			that.keys[e.keyCode] = true;
			e.preventDefault();
			return false;
		}
	}).on("keyup", function(e){
		if((e.keyCode >= 37 && e.keyCode <= 40) || e.keyCode == 32){
			that.keys[e.keyCode] = false;
			e.preventDefault();
			return false;
		}
	}).focus();

	
}

var GAME = new game();