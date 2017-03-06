(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"05Start_atlas_", frames: [[0,0,720,1200],[0,1202,484,439]]}
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



(lib.BitmapHand = function() {
	this.spriteSheet = ss["05Start_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BitmapSuit = function() {
	this.spriteSheet = ss["05Start_atlas_"];
	this.gotoAndStop(1);
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


(lib.USA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(34.5,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002860").s().p("AiFixIELgPIAAAAIAAA2IAAA2IAAA3IAAA1IAAA2IAAA3IAAA2IkLAGgAh0CTIgIAAIAGAJIgCAPIAGgJIAGAIIgCgPIAGgJIgHAAIgDgOgAhJCqIgCgQIAGgJIgIAAIgCgOIgDAPIgIAAIAHAJIgDAPIAHgJgAgwCaIgDAPIAHgJIAGAJIgDgPIAHgJIgIAAIgCgPIgDAPIgIAAgAgNCZIgDAPIAHgKIAGAJIgDgOIAGgJIgHAAIgCgPIgDAPIgIAAgAAVCYIgDAPIAHgKIAGAJIgCgOIAGgJIgIAAIgCgPIgDAPIgHAAgAA4CXIgCAPIAGgKIAHAJIgDgOIAHgJIgIAAIgDgPIgCAPIgIAAgABmClIgCgPIAGgKIgIABIgCgPIgDAPIgIAAIAHAJIgDAPIAHgKIAGAKgAhjBhIgIABIAGAJIgCAOIAGgJIAHAJIgDgPIAHgJIgIAAIgDgOgAg4B4IgCgPIAGgKIgIABIgCgOIgCAOIgIAAIAGAKIgCAOIAGgJIAGAJgAgUB3IgDgPIAGgKIgIAAIgCgOIgCAPIgIAAIAGAJIgCAPIAGgJgAAFBdIgHABIAFAJIgCAPIAGgJIAHAJIgDgQIAGgJIgIAAIgCgOgAAoBcIgIABIAHAIIgDAQIAGgJIAHAJIgDgQIAHgJIgIAAIgDgOgABKBlIgCAPIAGgJIAGAJIgCgQIAGgJIgIABIgCgQIgDAQIgHAAgAB4BzIgCgPIAGgKIgIAAIgCgPIgDAQIgIAAIAHAJIgDAPIAHgJgAhsBJIgCgPIAGgKIgHAAIgDgOIgCAOIgIABIAGAJIgCAPIAGgJgAhTA5IgDAPIAHgJIAGAIIgCgPIAGgJIgIAAIgCgPIgDAQIgIAAgAgvAvIgIAAIAHAIIgDAQIAHgKIAGAJIgDgPIAHgJIgIAAIgCgPgAgMAtIgIABIAHAIIgDAPIAHgKIAGAJIgDgOIAGgJIgHAAIgCgPgAAVA1IgDAPIAHgKIAGAJIgCgOIAGgKIgIABIgCgQIgDAQIgHAAgAA6ArIgIAAIAGAJIgCAOIAGgJIAHAJIgDgOIAHgKIgIABIgDgPgABcAyIgDAPIAHgJIAGAJIgCgPIAGgKIgIABIgCgPIgDAPIgIAAgAhjAAIgIAAIAGAIIgCAPIAGgKIAHAJIgDgOIAHgIIgIAAIgDgPgAhAgBIgIAAIAGAIIgCAOIAGgJIAGAJIgCgOIAGgJIgIABIgCgPgAgdgDIgIAAIAGAIIgCAPIAGgJIAHAIIgDgOIAGgJIgIABIgCgOgAAOATIgDgPIAGgJIgIAAIgCgOIgCAPIgHAAIAFAIIgCAPIAGgJgAAogGIgIABIAHAHIgDAQIAGgKIAHAJIgDgPIAHgIIgIAAIgDgPgABKABIgCAPIAGgJIAGAJIgCgPIAGgIIgIAAIgCgPIgDAPIgHAAgABvgIIgIAAIAHAIIgDAPIAHgKIAGAJIgCgOIAGgJIgIAAIgCgPgAh0gxIgIABIAGAJIgCAPIAGgKIAGAJIgCgPIAGgJIgHAAIgDgOgAhJgaIgCgPIAGgKIgIABIgCgOIgDAOIgIAAIAHAJIgDAPIAHgJIAGAJgAgvg0IgIABIAHAJIgDAPIAHgJIAGAIIgDgOIAHgKIgIAAIgCgPgAgMg1IgIABIAHAIIgDAPIAHgJIAGAIIgDgOIAGgJIgHAAIgCgPgAAfgfIgCgOIAGgKIgIAAIgCgOIgDAPIgHAAIAGAJIgDAOIAHgJIAGAJgAA6g5IgIABIAGAKIgCAOIAGgJIAHAIIgDgOIAHgKIgIAAIgDgOgABdg6IgIAAIAHAKIgDAOIAHgIIAGAIIgCgPIAGgJIgIAAIgCgPgAhjhiIgIAAIAGAJIgCAOIAGgJIAHAJIgDgOIAHgKIgIABIgDgPgAhAhkIgIABIAGAJIgCAOIAGgKIAGAJIgCgOIAGgJIgIAAIgCgPgAgdhmIgIABIAGAIIgCAPIAGgJIAHAIIgDgOIAGgJIgIAAIgCgOgAADheIgCAPIAGgJIAHAIIgDgPIAGgJIgIAAIgCgOIgCAPIgHAAgAAohpIgIAAIAHAJIgDAPIAGgJIAHAJIgDgPIAHgKIgIABIgDgPgABKhhIgCAPIAGgKIAGAJIgCgOIAGgKIgIABIgCgQIgDAQIgHAAgABvhsIgIAAIAHAJIgDAPIAHgKIAGAJIgCgOIAGgKIgIABIgCgPgAh0iTIgIABIAGAIIgCAPIAGgJIAGAJIgCgPIAGgJIgHAAIgDgOgAhSiVIgIABIAHAIIgDAQIAHgJIAGAIIgCgPIAGgJIgIAAIgCgOgAgviWIgIAAIAHAJIgDAPIAHgJIAGAJIgDgQIAHgIIgIAAIgCgPgAgMiYIgIABIAHAIIgDAQIAHgKIAGAIIgDgOIAGgJIgHAAIgCgPgAAWiaIgHABIAGAJIgDAOIAHgJIAGAJIgCgPIAGgJIgIAAIgCgPgAA6icIgIABIAGAIIgCAPIAGgJIAHAJIgDgPIAHgJIgIAAIgDgOgABdieIgIABIAHAJIgDAPIAHgJIAGAJIgCgQIAGgJIgIAAIgCgOg");
	this.shape_1.setTransform(13.4,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BC123F").s().p("AlYFsIAAg1IKxgEIAAA5gAlYDMIKxgIIAAA4IqxAGgAlYBiIKxgOIAAA4IqxALgAhNgOIGmgNIAAA3ImmALgAhNh7IGmgQIAAA4ImmAOgAhNjoIGmgTIAAA4ImmASgAhNlUIGmgWIAAA3ImmAVg");
	this.shape_2.setTransform(34.5,32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660033").s().p("AhaFsIAArXIC1AmIAAKxg");
	this.shape_3.setTransform(78.1,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AlYFsIAAqxIKxgmIAALXg");
	this.shape_4.setTransform(34.5,32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.USA, new cjs.Rectangle(0,-3.7,87.3,72.8), null);


(lib.JAPAN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhdFGIAAqxIC7AAIAALXg");
	this.shape.setTransform(9.4,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ah4B1QgxgwgBhFQABhEAxgwQAzgxBFAAQBHAAAyAxQAxAwAABEQAABFgxAwQgyAxhHgBQhFABgzgxg");
	this.shape_1.setTransform(54.8,35.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlWlrIKsAAIAAKxIqsAmgAhmh/QgxAxgBBEQABBEAxAwQAzAxBFAAQBHAAAygxQAxgwAAhEQAAhEgxgxQgygwhHAAQhFAAgzAwg");
	this.shape_2.setTransform(53,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.JAPAN, new cjs.Rectangle(0,0,87.3,72.8), null);


(lib.EU = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgED6IgUAPIAHgYIgVgPIAagBIAIgYIAIAYIAZABIgUAPIAHAYgABrDgIgVAPIAHgYIgTgQIAZgBIAIgXIAJAXIAYABIgTAQIAHAYgAh8DbIgUAOIAGgYIgTgPIAZgBIAIgYIAJAYIAZABIgUAPIAHAYgADICOIgVAPIAHgYIgVgQIAagBIAJgXIAIAXIAaABIgVAQIAHAYgAjGCBIgWAPIAIgYIgTgQIAYgBIAJgXIAIAXIAZABIgUAQIAHAYgADqAbIgWAPIAHgZIgTgPIAZgBIAJgXIAHAXIAZABIgUAPIAIAZgAjnAJIgVAOIAGgYIgUgPIAaAAIAJgYIAHAYIAaAAIgVAPIAHAYgADPhaIgVAOIAHgYIgUgPIAZAAIAJgYIAIAYIAZAAIgVAPIAIAYgAjGhqIgWAOIAIgYIgTgPIAYAAIAJgYIAIAYIAZAAIgUAPIAHAYgAB9i2IgVAOIAHgYIgUgPIAagBIAIgYIAIAYIAZABIgUAPIAIAYgAhri8IgWAOIAIgYIgUgPIAZAAIAJgYIAIAYIAZAAIgUAPIAHAYgAAKjWIgUAOIAHgYIgUgPIAYgBIAJgYIAIAYIAZABIgVAPIAIAYg");
	this.shape.setTransform(39.4,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AmKEHIAAoNIMVAAIAAINg");
	this.shape_1.setTransform(39.5,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0033CC","#000066"],[0,1],-57.8,-6.4,-40.2,-1.7).s().p("AgoFZIAAqxIBRAAIAAKxg");
	this.shape_2.setTransform(83.1,34.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AmKFZIAAqxIMVAAIAAKxg");
	this.shape_3.setTransform(39.5,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.EU, new cjs.Rectangle(0,0,87.3,69), null);


(lib.CHINA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ADVJoIhHAZIAnhAIgtg7IBJARIAqg9IAGBKIBIAVIhFAdIACBLgAIpEKIg/AoIAYhHIg5gwIBLABIAahFIAXBHIBLAEIg9AsIASBIgAndiTIj6i6IE3gMIBjknIBsEkIE1ACIjyDBIBdEoIkCirIj9CzgAJbiPIhLABIA6gwIgYhHIA/AoIA8gsIgSBIIA9ArIhLAFIgWBHgAGWoWIhJASIAtg8IgnhAIBGAZIAxg5IgCBLIBFAcIhIAWIgFBKg");
	this.shape.setTransform(63.9,61.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.instance = new lib.BitmapSuit();
	this.instance.parent = this;
	this.instance.setTransform(-32.4,177.3,0.471,0.471,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.BitmapHand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6,-37.9,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("EgiyghqMBE6AAAQCmGYndFLUgAeAtvgdgAJbMgiFAApg");
	this.shape_1.setTransform(-0.4,178.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CHINA, new cjs.Rectangle(-223,-37.9,481,463.3), null);


// stage content:
(lib._05Start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// China
	this.instance = new lib.CHINA();
	this.instance.parent = this;
	this.instance.setTransform(-180.9,312,1,1,0,0,0,102,102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// US
	this.instance_1 = new lib.USA();
	this.instance_1.parent = this;
	this.instance_1.setTransform(240,567.1,1,1,0,0,0,34.5,34.5);
	this.instance_1.alpha = 0.988;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Euro
	this.instance_2 = new lib.EU();
	this.instance_2.parent = this;
	this.instance_2.setTransform(240,637.1,1,1,0,0,0,34.5,34.5);
	this.instance_2.alpha = 0.988;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Yen
	this.instance_3 = new lib.JAPAN();
	this.instance_3.parent = this;
	this.instance_3.setTransform(240,705,1,1,0,0,0,34.5,34.5);
	this.instance_3.alpha = 0.988;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AK7IPQgsgHgpgPIApiCQASAcAbARQAbARAZAAQANAAAIgGQAIgGAAgKQAAgLgLgIQgMgIgYgKQg8gWgWgbQgWgaAAgnQAAhBAughQAvggBcAAIBSAIIBJASIgqB6QgUgbgZgOQgZgQgbABQgQAAgHAGQgHAHAAAJQAAAJAOAIQAOAJAdALQBLAbAWAcQAWAbAAAoQAAA9gvAhQgvAhhcAAQgxAAgrgHgAGrIPQgGhMgRgiQgRghgjAAIgBAAIAACPIirAAIAAmDIEAAAQApAAAgAQQAgAPARAbQAQAaAAAgQAAAbgLAWQgMAWgVAPQAfAkATAuQATAvAGA4gAFfEnIAEAAQAZAAALgJQALgJAAgTQAAgRgKgLQgLgKgUAAIgKAAgAgdIPIgWhBIh+AAIgXBBIirAAICGmDID0AAICGGDgAhTFyIgfheIgBAAIgfBeIA/AAgAp2IPIg9iZIg5CZIh+AAIiJmDICoAAIAtB+IAvh+IB3AAIAxB+IArh+ICnAAIiCGDgAPcifQgxgZgaguQgbguAAg3QAAg6AdgwQAdguAxgZQAygZA7AAQApAAAsAMQAqAKAdATIhICIQgPgEgSgEIgkgCQgcAAgNAIQgOAHAAAOQAAAPAPAIQAPAIAdAAQASAAARgEQARgDANgHIBICSQgeATgrALQgrALgoAAQhBAAgxgagAzMifQgugZgYgtQgYgsAAhSIAAisICsAAIAAC2QAAAYAEAJQAFAIALABQAHgBAEgCQAEgEADgGIADgRIABjCICrAAIAACzQAAAigFAdQgGAdgLAXQgLAWgRASQgSATgXAOQguAbg4AAQgzAAgvgagA5fifQgxgZgaguQgbguAAg3QAAg6AdgwQAdguAxgZQAygZA7AAQApAAAsAMQAqAKAdATIhICIQgPgEgSgEIgkgCQgcAAgNAIQgOAHAAAOQAAAPAPAIQAPAIAdAAQASAAARgEQARgDANgHIBICSQgeATgrALQgrALgoAAQhBAAgxgagAK0iIIhSh5IgBAAIAAB1IisAAIAAmDIB7AAIBZCCIABAAIAAiCICsAAIAAGHgAWHiMIAAipIiUjaICtAAIA8BYIA8hYICuAAIiUDaIAACpgAA/iMIAAmDIFCAAIAABhIiWAAIAAAwIBoAAIAABhIhoAAIAAAwICWAAIAABhgAiaiMQgGhMgRgiQgRghgjAAIgBAAIAACPIirAAIAAmDIEAAAQApAAAgAQQAgAQARAaQAQAaAAAgQAAAbgLAWQgMAWgVAPQAfAjATAwQASAuAGA4gAjml1IAEAAQAZABALgJQALgJAAgTQAAgSgKgKQgLgKgUAAIgKAAgApsiMQgFhMgRgiQgSghgiAAIgBAAIAACPIisAAIAAmDIEAAAQApAAAhAQQAgAQAQAaQAQAaAAAgQAAAbgLAWQgLAWgWAPQAgAjATAwQASAuAGA4gAq3l1IAEAAQAYABAMgJQALgJAAgTQAAgSgLgKQgKgKgUAAIgKAAg");
	this.shape.setTransform(251.3,84.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.9,331.5,930.6,711.8);
// library properties:
lib.properties = {
	width: 500,
	height: 600,
	fps: 24,
	color: "#666666",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/05Start_atlas_.png", id:"05Start_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;