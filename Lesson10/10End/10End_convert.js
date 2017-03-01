(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"10End_convert_atlas_", frames: [[0,535,800,293],[0,830,443,289],[802,535,383,346],[1187,570,452,288],[0,0,1280,533],[445,883,473,212],[1187,860,386,56],[1282,0,536,568],[1641,570,294,416]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bottom_back = function() {
	this.spriteSheet = ss["10End_convert_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.carLeft = function() {
	this.spriteSheet = ss["10End_convert_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.carMiddle = function() {
	this.spriteSheet = ss["10End_convert_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.carRight = function() {
	this.spriteSheet = ss["10End_convert_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cityBG = function() {
	this.spriteSheet = ss["10End_convert_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.double_identity = function() {
	this.spriteSheet = ss["10End_convert_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.footer = function() {
	this.spriteSheet = ss["10End_convert_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.George_2 = function() {
	this.spriteSheet = ss["10End_convert_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.rachel = function() {
	this.spriteSheet = ss["10End_convert_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cityBG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1280,533), null);


(lib.movietitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BCBCBC").s().p("ArCCsQgYgKgOgVQgOgWgFgjQgFgiAAgxQAAgxAGgjQAGgjAPgVQAPgWAYgJQAYgKAjAAQAfAAAWAIQAVAIAOAOQAOAOAGAVQAGAUAAAaIAAAWIhYAAIAAgUQAAgegGgLQgGgLgOAAQgKAAgHAGQgGAFgDAOQgEAOgBAXIgBA5IABA6QABAYAEANQADAOAGAFQAHAGAKAAQAIAAAGgEQAFgFADgJQADgKACgRIABgpIBYAAIAAAaQAAAlgKAXQgKAYgQAOQgQAOgVAEQgVAFgWAAQgmAAgZgJgAKhCvQgDgHgCgJIgCgSIgBgSIAAgOIAAgYQAAgOgCgKQgBgKgEgFQgEgGgFgCQgGgCgIAAIgYAAIAACLIhcAAIAAldICOAAQAaAAASAHQATAHALAMQALANAGARQAFARAAAVQAAAjgOAWQgOAVgfAFIAAAAQAgADAMAUQANAUAAAjIAAAeIAAAOIAAAOIACAMIACAJIAEAFQACADAEACIAAAFgAJjgZIASAAQATAAAKgLQAJgMAAgTQAAgXgJgJQgJgKgUAAIgSAAgAESCvIAAldIDQAAIAABLIh0AAIAAA9IBtAAIAABGIhtAAIAABFIB5AAIAABKgABeCvIAAkQIhEAAIAAhNIDkAAIAABNIhEAAIAAEQgAhFCvQgEgHgBgJIgDgSIgBgSIAAgOIAAgYQAAgOgBgKQgCgKgDgFQgEgGgGgCQgFgCgIAAIgYAAIAACLIhcAAIAAldICOAAQAZAAATAHQASAHALAMQALANAFARQAFARAAAVQAAAjgNAWQgOAVgfAFIAAAAQAhADAMAUQALAUAAAjIAAAeIAAAOIABAOIABAMIACAJIAFAFQABADAFACIAAAFgAiDgZIASAAQATAAAJgLQAJgMAAgTQAAgXgJgJQgJgKgUAAIgRAAgAlPCvIgJg9IhJAAIgJA9IhgAAIBUldIBzAAIBVFdgAmWAtIAzAAIgZiTIgBAAg");
	this.shape.setTransform(317.6,56.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BCBCBC").s().p("AGqCxIgJgCIAAgdIANADIAGAAQAKAAAEgDQAFgDADgFIAGgQIAJgVIhLjLIAnAAIA1CgIA3igIAmAAIggBXIgfBSQgeBNgLARQgMAQgeAAIgLAAgADaBLQgYgcAAguQAAgqAWggQAWggAoAAQAWAAAPAJQAJAGALANIAAhjIAiAAIAAEQIggAAIAAgbQgMASgPAIQgQAIgUAAQggAAgYgcgAD1g5QgPATAAAmQAAAfANAWQANAWAdAAQAXAAAOgUQAPgUAAglQAAgmgPgTQgPgSgWAAQgZAAgPAUgAjHBMQgZgbAAgxQAAgwAageQAZgeAqAAQAVAAAUAKQAUAKAKAQQAKAPAEAVQADANAAAeIiSAAQABAfAOASQANATAcAAQAaAAAPgSQAJgKAEgOIAhAAQgCALgHAOQgHANgJAJQgPAPgXAFQgMADgPAAQglAAgagbgAirg/QgPARgBAbIBsAAQgCgWgHgOQgOgZgfAAQgXAAgPARgAB8BgIAAh/QAAgTgFgLQgJgTgXAAQgMAAgHADQgOAEgKAMQgIAKgDALQgCALAAAUIAABpIghAAIAAjGIAfAAIAAAZQAOgRAQgHQAPgHAUAAQApAAAPAeQAIAQAAAeIAACAgAlZBgIg/jiIg/DiIgnAAIhIkQIAnAAIA1DiIBAjiIAlAAIA/DgIA0jgIAoAAIhIEQg");
	this.shape_1.setTransform(317.6,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BCBCBC").s().p("AhWB7QgSgRAAgaQAAgcARgPQASgQAbgDIA1gHQALgCADgIQAEgDAAgIQAAgRgNgIQgMgIgWAAQgZAAgMAOQgFAIgDAPIgfAAQABgkAXgPQAXgOAfAAQAhAAAXANQAVAOAAAcIAABxQAAAGACADQACADAGAAIAFAAIAGgBIAAAaIgMADIgLAAQgRAAgIgNQgDgGgCgNQgKAOgTALQgTAKgWAAQgcAAgRgRgAALAlIgRADIgVADQgSADgJAFQgPAJABAUQAAAPAKAIQALAJAOAAQARAAAQgJQAbgPAAgfIAAgbQgGAEgKADgAFtCFIg9hlIgbAaIAABLIgiAAIAAkQIAiAAIAACeIBVhUIApAAIhLBJIBPB9gABzCFIAAjGIAhAAIAAAiQAEgLAOgOQAQgPATAAIADAAIAHABIAAAkIgFgBIgFAAQgZAAgNAQQgOARAAAUIAABzgAi0CFIAAigIAAgcIACgqIhPDmIglAAIhPjmIAAAJIAAAeIABAfIAACgIgiAAIAAkQIA0AAIBODmIBOjmIA0AAIAAEQg");
	this.shape_2.setTransform(145.4,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BCBCBC").s().p("ADOCwQgWgEgPgMQgPgMgHgTQgIgTAAgbIAAgMIBYAAIAAAIQAAAXAIAJQAIAJAOAAQAOAAAHgKQAIgKAAgOQAAgRgKgKQgLgKgQgHIgjgOQgSgIgQgMQgQgKgLgTQgKgTAAgfQAAg1AcgcQAcgcA6AAQA8AAAaAaQAbAZAAA5IhUAAIAAgJQAAgQgGgLQgHgLgNAAQgPAAgHAKQgHAKAAALQAAASALAKQALAKAQAHIAkAPQATAIARAMQARALALAUQALAUAAAgQAAA4ggAZQggAZg8AAQgcAAgWgFgAg7CvQgWgFgPgPQgPgOgIgZQgIgYAAglIAAjlIBcAAIAAD7QAAAaAHAIQAIAJAMAAQAMAAAHgJQAHgIAAgaIAAj7IBcAAIAADlQAAAlgIAYQgIAZgPAOQgPAPgWAFQgWAGgcAAQgcAAgXgGgAlTCsQgYgKgPgVQgOgWgGgjQgHgiAAgxQAAgwAHgjQAGgiAOgWQAPgWAYgKQAYgKAjAAQAiAAAYAKQAYAKAPAWQAOAWAHAiQAGAjAAAwQAAAxgGAiQgHAjgOAWQgPAVgYAKQgYAJgiAAQgjAAgYgJgAkphxQgGAFgDAOQgDAOgBAXIgBA5IABA6QABAYADANQADAOAGAFQAGAGALAAQAKAAAGgGQAGgFADgOQADgNABgYIABg6IgBg5QgBgXgDgOQgDgOgGgFQgGgGgKAAQgLAAgGAGgApZCwQgVgEgPgMQgPgMgIgTQgIgTAAgbIAAgMIBYAAIAAAIQAAAXAJAJQAIAJANAAQAOAAAIgKQAIgKAAgOQAAgRgLgKQgKgKgRgHIgigOQgTgIgQgMQgQgKgKgTQgLgTAAgfQAAg1AdgcQAcgcA6AAQA7AAAbAaQAbAZAAA5IhUAAIAAgJQAAgQgHgLQgGgLgOAAQgPAAgHAKQgHAKAAALQAAASALAKQALAKARAHIAkAPQATAIARAMQAQALALAUQALAUAAAgQAAA4gfAZQggAZg8AAQgdAAgWgFgAI8CvIgJg9IhJAAIgJA9IhgAAIBUldIBzAAIBVFdgAH1AtIAzAAIgZiTIgBAAg");
	this.shape_3.setTransform(145.4,56.3);

	this.instance = new lib.double_identity();
	this.instance.parent = this;
	this.instance.setTransform(0,79.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.movietitle, new cjs.Rectangle(0,0,473,291.3), null);


(lib.leftCar_Base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.carLeft();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,443,289);


(lib.Rachel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rachel();
	this.instance.parent = this;
	this.instance.setTransform(-147,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rachel, new cjs.Rectangle(-147,-208,294,416), null);


(lib.George = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.George_2();
	this.instance.parent = this;
	this.instance.setTransform(-311,-280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.George, new cjs.Rectangle(-311,-280,536,568), null);


(lib.Footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.footer();
	this.instance.parent = this;
	this.instance.setTransform(-192,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Footer, new cjs.Rectangle(-192,-29,386,56), null);


(lib.Head_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rays
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(120,153,157,0)","rgba(120,153,157,0.2)"],[0.373,1],-484.7,0,462.8,0).s().p("EhLugRgMCUBAACQBfAHA9A3QA6A0AGBHQAGBKg1A8Qg6BChzAaMiSdAckg");
	this.shape.setTransform(11,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-473.7,-112,969.5,224.2);


(lib.carRight_Base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.carRight();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.carRight_Base, new cjs.Rectangle(0,0,452,288), null);


(lib.carMiddle_Base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.carMiddle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,383,346);


(lib.bottom_back_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottom_back();
	this.instance.parent = this;
	this.instance.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bottom_back_1, new cjs.Rectangle(0,-1,800,293), null);


(lib.carRight_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lights
	this.instance = new lib.Head_1();
	this.instance.parent = this;
	this.instance.setTransform(960.4,63,0.852,0.69,0,2.6,-177.4);
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-476,-114,974,228);

	this.instance_1 = new lib.Head_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(789.5,69,0.852,0.69,0,2.6,-177.4,-0.1,-0.1);
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-476,-114,974,228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:69}},{t:this.instance,p:{y:63}}]}).to({state:[{t:this.instance_1,p:{y:70}},{t:this.instance,p:{y:64}}]},3).to({state:[{t:this.instance_1,p:{y:68}},{t:this.instance,p:{y:62}}]},4).wait(1));

	// smallRumble
	this.instance_2 = new lib.carRight_Base();
	this.instance_2.parent = this;
	this.instance_2.setTransform(362,2,1,1,0,0,0,226,144);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({y:3},0).wait(4).to({y:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(136,-142,1239.2,314.7);


(lib.carMiddle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.Head_1();
	this.instance.parent = this;
	this.instance.setTransform(192.2,480,0.994,0.994,-87.8,0,0,11,0.1);
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-476,-114,974,228);

	this.instance_1 = new lib.Head_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-476.9,343,0.996,0.996,-32.6,0,0,11,-0.1);
	this.instance_1.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance_1.cache(-476,-114,974,228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:343}},{t:this.instance,p:{y:480}}]}).to({state:[{t:this.instance_1,p:{y:345}},{t:this.instance,p:{y:482}}]},3).wait(3));

	// smallRumble
	this.instance_2 = new lib.carMiddle_Base("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.5,-7,1,1,0,0,0,191.5,173);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({y:-5},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-953.7,-180,1290.5,1158.1);


(lib.carLeft_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lights
	this.instance = new lib.Head_1();
	this.instance.parent = this;
	this.instance.setTransform(-469.9,135,1,1,-5.8,0,0,10.9,-0.1);
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-476,-114,974,228);

	this.instance_1 = new lib.Head_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-654.8,82,1,1,0,0,0,11,0);
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-476,-114,974,228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:82}},{t:this.instance,p:{y:135}}]}).to({state:[{t:this.instance_1,p:{y:84.2}},{t:this.instance,p:{y:137.1}}]},1).to({state:[{t:this.instance_1,p:{y:79.9}},{t:this.instance,p:{y:132.8}}]},2).wait(1));

	// smallRumble
	this.instance_2 = new lib.leftCar_Base("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.5,0.5,1,1,0,0,0,221.5,144.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:2.7},0).wait(2).to({y:-1.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1144.6,-144,1367.6,447.7);


// stage content:
(lib._10End_convert = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.movietitle();
	this.instance.parent = this;
	this.instance.setTransform(416.2,235,2.359,2.359,0,0,0,236.5,145.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).wait(1).to({scaleX:2.32,scaleY:2.32,y:235.1},0).wait(1).to({scaleX:2.28,scaleY:2.28},0).wait(1).to({scaleX:2.24,scaleY:2.24},0).wait(1).to({scaleX:2.2,scaleY:2.2},0).wait(1).to({scaleX:2.17,scaleY:2.17},0).wait(1).to({scaleX:2.13,scaleY:2.13},0).wait(1).to({scaleX:2.09,scaleY:2.09,y:235},0).wait(1).to({scaleX:2.05,scaleY:2.05,y:235.1},0).wait(1).to({scaleX:2.01,scaleY:2.01},0).wait(1).to({scaleX:1.97,scaleY:1.97},0).wait(1).to({scaleX:1.93,scaleY:1.93},0).wait(1).to({scaleX:1.89,scaleY:1.89},0).wait(1).to({scaleX:1.85,scaleY:1.85},0).wait(1).to({scaleX:1.82,scaleY:1.82},0).wait(1).to({scaleX:1.78,scaleY:1.78},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:416.1},0).wait(1).to({scaleX:1.7,scaleY:1.7},0).wait(1).to({scaleX:1.66,scaleY:1.66},0).wait(1).to({scaleX:1.62,scaleY:1.62},0).wait(1).to({scaleX:1.58,scaleY:1.58,y:235},0).wait(1).to({scaleX:1.54,scaleY:1.54},0).wait(1).to({scaleX:1.51,scaleY:1.51},0).wait(1).to({scaleX:1.47,scaleY:1.47},0).wait(1).to({scaleX:1.43,scaleY:1.43},0).wait(1).to({scaleX:1.39,scaleY:1.39},0).wait(1).to({scaleX:1.35,scaleY:1.35},0).wait(1).to({scaleX:1.31,scaleY:1.31},0).wait(1).to({scaleX:1.27,scaleY:1.27},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1,scaleY:1},0).wait(37));

	// Middle_car
	this.carMiddle = new lib.carMiddle_1();
	this.carMiddle.parent = this;
	this.carMiddle.setTransform(827.5,486.5,0.3,0.3,0,0,0,57.5,51.9);
	this.carMiddle.alpha = 0;
	this.carMiddle._off = true;

	this.timeline.addTween(cjs.Tween.get(this.carMiddle).wait(69).to({_off:false},0).wait(1).to({regX:-312.8,regY:400.2,scaleX:0.36,scaleY:0.36,x:702.4,y:621.7,alpha:0.391},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:689.1,y:651.1,alpha:0.765},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:676.3,y:679.2,alpha:1},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:664.2,y:705.8},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:652.7,y:731.2},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:641.9,y:755.1},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:631.6,y:777.7},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:622,y:798.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:613,y:818.7},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:604.6,y:837.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:596.8,y:854.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:589.7,y:870},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:583.2,y:884.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:577.3,y:897.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:572,y:909},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:567.4,y:919.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:563.3,y:928.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:559.9,y:935.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:557.1,y:941.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:555,y:946.6},0).wait(1).to({scaleX:1,scaleY:1,x:553.4,y:950},0).wait(1).to({scaleX:1,scaleY:1,x:552.4,y:952.1},0).wait(1).to({scaleX:1,scaleY:1,x:552.1,y:952.8},0).wait(1).to({regX:57.5,regY:51.8,x:922.5,y:604.5},0).wait(1).to({regX:-312.8,regY:400.2,x:552.2,y:952.9},0).wait(97));

	// Left_car
	this.instance_1 = new lib.carLeft_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(575.5,510.3,0.294,0.294,0,0,0,-458.4,75.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).wait(1).to({regX:-461.3,regY:79,scaleX:0.35,scaleY:0.35,x:540.5,y:520.1,alpha:0.078},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:507.8,y:528.7,alpha:0.154},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:476.5,y:536.9,alpha:0.226},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:446.6,y:544.7,alpha:0.294},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:418,y:552.2,alpha:0.36},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:390.9,y:559.3,alpha:0.422},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:365.2,y:566,alpha:0.482},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:340.8,y:572.4,alpha:0.538},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:317.9,y:578.4,alpha:0.59},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:296.3,y:584.1,alpha:0.64},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:276.1,y:589.4,alpha:0.686},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:257.3,y:594.3,alpha:0.73},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:239.9,y:598.8,alpha:0.77},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:224,y:603,alpha:0.806},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:209.3,y:606.8,alpha:0.84},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:196.1,y:610.3,alpha:0.87},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:184.3,y:613.4,alpha:0.898},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:173.8,y:616.1,alpha:0.922},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:164.8,y:618.5,alpha:0.942},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:157.2,y:620.5,alpha:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:150.9,y:622.1,alpha:0.974},0).wait(1).to({scaleX:1,scaleY:1,x:146,y:623.4,alpha:0.986},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:142.6,y:624.3,alpha:0.994},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:140.5,y:624.9,alpha:0.998},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:139.8,y:625,alpha:1},0).wait(1).to({regX:-458.2,regY:75.9,x:142.8,y:621.8},0).wait(1).to({regX:-461.3,regY:79,x:139.7,y:624.9},0).wait(90));

	// Right_car
	this.carRight = new lib.carRight_1();
	this.carRight.parent = this;
	this.carRight.setTransform(740,478.5,0.3,0.3,0,0,0,-49.9,-57.9);
	this.carRight.alpha = 0;
	this.carRight._off = true;

	this.timeline.addTween(cjs.Tween.get(this.carRight).wait(77).to({_off:false},0).wait(1).to({regX:754.1,regY:13.4,scaleX:0.35,scaleY:0.35,x:1022.1,y:504.7,alpha:0.393},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:1061.5,y:509.2,alpha:0.771},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:1099.3,y:513.6,alpha:1},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:1135.8,y:517.9},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:1170.7,y:521.9},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:1204.2,y:525.8},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:1236.1,y:529.5},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:1266.6,y:533.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:1295.6,y:536.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:1323.1,y:539.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:1349.1,y:542.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:1373.7,y:545.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:1396.7,y:548.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:1418.3,y:550.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1438.3,y:553.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1456.9,y:555.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1474,y:557.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1489.6,y:559.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1503.7,y:560.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1516.4,y:562.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1527.5,y:563.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1537.2,y:564.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1545.3,y:565.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1552,y:566.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1557.2,y:567},0).wait(1).to({scaleX:1,scaleY:1,x:1561,y:567.4},0).wait(1).to({scaleX:1,scaleY:1,x:1563.2,y:567.7},0).wait(1).to({scaleX:1,scaleY:1,x:1563.9},0).wait(1).to({regX:-50,regY:-58,x:760,y:496.5},0).wait(1).to({regX:754.1,regY:13.4,x:1564.1,y:567.9},0).wait(84));

	// man
	this.instance_2 = new lib.George();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1029,172.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(1).to({regX:-43,regY:4,x:987.7,y:176.5,alpha:0.04},0).wait(1).to({x:989.3,alpha:0.08},0).wait(1).to({x:990.9,alpha:0.119},0).wait(1).to({x:992.5,alpha:0.158},0).wait(1).to({x:994.2,alpha:0.197},0).wait(1).to({x:995.8,alpha:0.236},0).wait(1).to({x:997.4,alpha:0.274},0).wait(1).to({x:998.9,alpha:0.312},0).wait(1).to({x:1000.5,alpha:0.35},0).wait(1).to({x:1002.1,alpha:0.388},0).wait(1).to({x:1003.6,alpha:0.426},0).wait(1).to({x:1005.2,alpha:0.463},0).wait(1).to({x:1006.7,alpha:0.5},0).wait(1).to({x:1008.2,alpha:0.537},0).wait(1).to({x:1009.7,alpha:0.573},0).wait(1).to({x:1011.2,alpha:0.61},0).wait(1).to({x:1012.7,alpha:0.646},0).wait(1).to({x:1014.2,alpha:0.681},0).wait(1).to({x:1015.7,alpha:0.717},0).wait(1).to({x:1017.1,alpha:0.752},0).wait(1).to({x:1018.6,alpha:0.788},0).wait(1).to({x:1020,alpha:0.822},0).wait(1).to({x:1021.5,alpha:0.857},0).wait(1).to({x:1022.9,alpha:0.891},0).wait(1).to({x:1024.3,alpha:0.926},0).wait(1).to({x:1025.7,alpha:0.96},0).wait(1).to({x:1027.1,alpha:0.993},0).wait(1).to({x:1027.4,alpha:1},0).wait(141));

	// woman
	this.instance_3 = new lib.Rachel();
	this.instance_3.parent = this;
	this.instance_3.setTransform(903.1,191.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance_3.cache(-149,-210,298,420);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).wait(1).to({x:900.9,alpha:0.038},0).wait(1).to({x:898.8,alpha:0.076},0).wait(1).to({x:896.7,alpha:0.114},0).wait(1).to({x:894.7,alpha:0.152},0).wait(1).to({x:892.6,alpha:0.189},0).wait(1).to({x:890.6,alpha:0.227},0).wait(1).to({x:888.5,alpha:0.264},0).wait(1).to({x:886.5,alpha:0.3},0).wait(1).to({x:884.5,alpha:0.337},0).wait(1).to({x:882.5,alpha:0.373},0).wait(1).to({x:880.5,alpha:0.409},0).wait(1).to({x:878.5,alpha:0.445},0).wait(1).to({x:876.6,alpha:0.481},0).wait(1).to({x:874.6,alpha:0.516},0).wait(1).to({x:872.7,alpha:0.551},0).wait(1).to({x:870.8,alpha:0.586},0).wait(1).to({x:868.8,alpha:0.621},0).wait(1).to({x:866.9,alpha:0.655},0).wait(1).to({x:865.1,alpha:0.689},0).wait(1).to({x:863.2,alpha:0.723},0).wait(1).to({x:861.3,alpha:0.757},0).wait(1).to({x:859.5,alpha:0.791},0).wait(1).to({x:857.6,alpha:0.824},0).wait(1).to({x:855.8,alpha:0.857},0).wait(1).to({x:854,alpha:0.89},0).wait(1).to({x:852.2,alpha:0.923},0).wait(1).to({x:850.4,alpha:0.955},0).wait(1).to({x:848.7,alpha:0.987},0).wait(1).to({x:848,alpha:1},0).wait(140));

	// city
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(640,356.5,1,1,0,0,0,640,266.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(1).to({y:353.5,alpha:0.033},0).wait(1).to({y:350.5,alpha:0.067},0).wait(1).to({y:347.5,alpha:0.1},0).wait(1).to({y:344.5,alpha:0.133},0).wait(1).to({y:341.5,alpha:0.167},0).wait(1).to({y:338.5,alpha:0.2},0).wait(1).to({y:335.5,alpha:0.233},0).wait(1).to({y:332.5,alpha:0.267},0).wait(1).to({y:329.5,alpha:0.3},0).wait(1).to({y:326.5,alpha:0.333},0).wait(1).to({y:323.5,alpha:0.367},0).wait(1).to({y:320.5,alpha:0.4},0).wait(1).to({y:317.5,alpha:0.433},0).wait(1).to({y:314.5,alpha:0.467},0).wait(1).to({y:311.5,alpha:0.5},0).wait(1).to({y:308.5,alpha:0.533},0).wait(1).to({y:305.5,alpha:0.567},0).wait(1).to({y:302.5,alpha:0.6},0).wait(1).to({y:299.5,alpha:0.633},0).wait(1).to({y:296.5,alpha:0.667},0).wait(1).to({y:293.5,alpha:0.7},0).wait(1).to({y:290.5,alpha:0.733},0).wait(1).to({y:287.5,alpha:0.767},0).wait(1).to({y:284.5,alpha:0.8},0).wait(1).to({y:281.5,alpha:0.833},0).wait(1).to({y:278.5,alpha:0.867},0).wait(1).to({y:275.5,alpha:0.9},0).wait(1).to({y:272.5,alpha:0.933},0).wait(1).to({y:269.5,alpha:0.967},0).wait(1).to({y:266.5,alpha:1},0).wait(152));

	// footer
	this.instance_5 = new lib.Footer();
	this.instance_5.parent = this;
	this.instance_5.setTransform(669,730.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).wait(1).to({regX:1,regY:-1,x:670,y:729.5,alpha:0.017},0).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.117},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.183},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.283},0).wait(1).to({alpha:0.3},0).wait(54));

	// ground
	this.instance_6 = new lib.bottom_back_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(436,639.5,1,1,0,0,0,400,146.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regY:145.5,y:638.5,alpha:0.019},0).wait(1).to({alpha:0.038},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.076},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.114},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.17},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.227},0).wait(1).to({alpha:0.245},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.283},0).wait(1).to({alpha:0.301},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.339},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.376},0).wait(1).to({alpha:0.394},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.431},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.468},0).wait(1).to({alpha:0.487},0).wait(1).to({alpha:0.505},0).wait(1).to({alpha:0.523},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.578},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.651},0).wait(1).to({alpha:0.669},0).wait(1).to({alpha:0.687},0).wait(1).to({alpha:0.705},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.758},0).wait(1).to({alpha:0.776},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.845},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.879},0).wait(1).to({alpha:0.896},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.928},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:1},0).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 1280,
	height: 787,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/10End_convert_atlas_.png", id:"10End_convert_atlas_"}
	]
};





})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;