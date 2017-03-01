(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"05End_atlas_", frames: [[0,0,720,1200],[0,1202,484,439]]}
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
	this.spriteSheet = ss["05End_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BitmapSuit = function() {
	this.spriteSheet = ss["05End_atlas_"];
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
(lib._05End = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// China
	this.instance = new lib.CHINA();
	this.instance.parent = this;
	this.instance.setTransform(-180.9,312,1,1,0,0,0,102,102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({regX:17.4,regY:193.7,x:-257.9,y:403.7},0).wait(1).to({x:-250.2},0).wait(1).to({x:-242.4},0).wait(1).to({x:-234.2},0).wait(1).to({x:-225.4},0).wait(1).to({x:-215.5},0).wait(1).to({x:-204.2},0).wait(1).to({x:-190.8},0).wait(1).to({x:-174.9},0).wait(1).to({x:-155.7},0).wait(1).to({x:-132.5},0).wait(1).to({x:-104.3},0).wait(1).to({x:-70.3},0).wait(1).to({x:-29.4},0).wait(1).to({x:19.4},0).wait(1).to({regX:102,regY:102,x:104,y:311.7},0).wait(35));

	// US
	this.instance_1 = new lib.USA();
	this.instance_1.parent = this;
	this.instance_1.setTransform(240,566.9,1,1,0,0,0,34.5,34.5);
	this.instance_1.alpha = 0.988;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:43.6,regY:32.6,x:249.1,y:555,alpha:0.99},0).wait(1).to({y:544.7},0).wait(1).to({y:534.6},0).wait(1).to({y:524.5},0).wait(1).to({y:514.3},0).wait(1).to({y:504.2},0).wait(1).to({y:494.1},0).wait(1).to({y:483.9},0).wait(1).to({y:445.1},0).wait(1).to({y:406.3},0).wait(1).to({y:367.3},0).wait(1).to({y:328.5},0).wait(1).to({y:289.7},0).wait(1).to({y:250.8},0).wait(1).to({y:211.9},0).wait(1).to({y:173.1},0).wait(1).to({y:134.2},0).wait(1).to({y:95.3},0).wait(1).to({y:56.4},0).wait(1).to({y:17.6},0).wait(1).to({y:81},0).wait(1).to({y:144.5},0).wait(1).to({y:208},0).wait(32).to({regX:34.5,regY:34.5,x:240,y:210,alpha:0.988},0).wait(1).to({regX:43.6,regY:32.6,rotation:5.3,x:270.1,y:210.4,alpha:0.99},0).wait(1).to({rotation:10.6,x:289.6,y:216},0).wait(1).to({rotation:15.9,x:307.7,y:224.8},0).wait(1).to({rotation:21.2,x:324.4,y:236.7},0).wait(1).to({rotation:26.5,x:339.9,y:251.7},0).wait(1).to({rotation:31.8,x:354.2,y:269.8},0).wait(1).to({rotation:37.1,x:367.4,y:291.1},0).wait(1).to({rotation:42.4,x:379.5,y:315.5},0).wait(1).to({rotation:47.6,x:390.7,y:343},0).wait(1).to({rotation:52.9,x:401,y:373.7},0).wait(1).to({rotation:58.2,x:410.5,y:407.3},0).wait(1).to({rotation:63.5,x:419.1,y:444.2},0).wait(1).to({rotation:68.8,x:427.2,y:484.1},0).wait(1).to({rotation:74.1,x:434.6,y:527},0).wait(1).to({rotation:79.4,x:441.4,y:573.1},0).wait(1).to({rotation:84.7,x:447.7,y:509.5},0).wait(1).to({rotation:90,x:453.6,y:467.1},0).wait(1).to({rotation:95.3,x:459.1,y:446},0).wait(1).to({rotation:100.6,x:464.1},0).wait(1).to({rotation:105.9,x:468.9,y:467.3},0).wait(1).to({rotation:111.2,x:473.5,y:509.8},0).wait(1).to({rotation:116.5,x:477.8,y:573.5},0).wait(1).to({rotation:121.8,x:482.1,y:542.5},0).wait(1).to({rotation:127.1,x:486.1,y:526.8},0).wait(1).to({rotation:132.4,x:490.1,y:526.4},0).wait(1).to({rotation:137.6,x:494,y:541.3},0).wait(1).to({rotation:142.9,x:497.8,y:571.5},0).wait(1).to({rotation:148.2,x:501.7,y:557.7},0).wait(1).to({rotation:153.5,x:505.4,y:552.6},0).wait(1).to({rotation:158.8,x:509.3,y:556.3},0).wait(1).to({rotation:164.1,x:513.3,y:568.8},0).wait(1).to({rotation:169.4,x:517.2,y:562.2},0).wait(1).to({rotation:174.7,x:521.3,y:561.4},0).wait(1).to({rotation:180,x:525.4,y:566.4},0).wait(1));

	// Euro
	this.instance_2 = new lib.EU();
	this.instance_2.parent = this;
	this.instance_2.setTransform(240,637,1,1,0,0,0,34.5,34.5);
	this.instance_2.alpha = 0.988;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:43.6,x:249.1,y:630.5,alpha:0.99},0).wait(1).to({y:623.8},0).wait(1).to({y:617.2},0).wait(1).to({y:610.5},0).wait(1).to({y:603.9},0).wait(1).to({y:597.3},0).wait(1).to({y:590.7},0).wait(1).to({y:584},0).wait(1).to({y:547.4},0).wait(1).to({y:510.7},0).wait(1).to({y:474.1},0).wait(1).to({y:437.4},0).wait(1).to({y:400.7},0).wait(1).to({y:364},0).wait(1).to({y:327.4},0).wait(1).to({y:290.7},0).wait(1).to({y:254},0).wait(1).to({y:217.3},0).wait(1).to({y:180.7},0).wait(1).to({y:144},0).wait(1).to({y:189.3},0).wait(1).to({y:234.6},0).wait(1).to({y:279.9},0).wait(32).to({regX:34.5,x:240,y:280,alpha:0.988},0).wait(1).to({regX:43.6,rotation:2.6,x:271.6,y:281.4,alpha:0.99},0).wait(1).to({rotation:5.3,x:292.5,y:285.2},0).wait(1).to({rotation:7.9,x:312,y:291.2},0).wait(1).to({rotation:10.6,x:330.1,y:299.4},0).wait(1).to({rotation:13.2,x:346.9,y:309.9},0).wait(1).to({rotation:15.9,x:362.4,y:322.5},0).wait(1).to({rotation:18.5,x:376.9,y:337.3},0).wait(1).to({rotation:21.2,x:390.2,y:354.4},0).wait(1).to({rotation:23.8,x:402.6,y:373.6},0).wait(1).to({rotation:26.5,x:414.1,y:395.2},0).wait(1).to({rotation:29.1,x:424.7,y:418.9},0).wait(1).to({rotation:31.8,x:434.6,y:444.8},0).wait(1).to({rotation:34.4,x:443.7,y:472.9},0).wait(1).to({rotation:37.1,x:452.3,y:503.3},0).wait(1).to({rotation:39.7,x:460.2,y:535.9},0).wait(1).to({rotation:42.4,x:467.6,y:570.6},0).wait(1).to({rotation:45,x:474.6,y:525.2},0).wait(1).to({rotation:47.6,x:481,y:492.7},0).wait(1).to({rotation:50.3,x:487.2,y:473.4},0).wait(1).to({rotation:52.9,x:492.9,y:467.1},0).wait(1).to({rotation:55.6,x:498.5,y:473.8},0).wait(1).to({rotation:58.2,x:503.7,y:493.7},0).wait(1).to({rotation:60.9,x:508.7,y:526.7},0).wait(1).to({rotation:63.5,x:513.6,y:572.7},0).wait(1).to({rotation:66.2,x:518.3,y:548.2},0).wait(1).to({rotation:68.8,x:522.9,y:536},0).wait(1).to({rotation:71.5,x:527.3,y:536.1},0).wait(1).to({rotation:74.1,x:531.7,y:548.6},0).wait(1).to({rotation:76.8,x:536.1,y:573.4},0).wait(1).to({rotation:79.4,x:540.4,y:562.8},0).wait(1).to({rotation:82.1,x:544.6,y:559.3},0).wait(1).to({rotation:84.7,x:548.9,y:562.9},0).wait(1).to({rotation:87.4,x:553.1,y:573.6},0).wait(1).to({rotation:90,x:557.4},0).wait(1));

	// Yen
	this.instance_3 = new lib.JAPAN();
	this.instance_3.parent = this;
	this.instance_3.setTransform(240,706.9,1,1,0,0,0,34.5,36.4);
	this.instance_3.alpha = 0.988;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:43.6,x:249.1,y:700.3,alpha:0.99},0).wait(1).to({y:693.7},0).wait(1).to({y:687},0).wait(1).to({y:680.4},0).wait(1).to({y:673.8},0).wait(1).to({y:667.2},0).wait(1).to({y:660.6},0).wait(1).to({y:653.9},0).wait(1).to({y:619.2},0).wait(1).to({y:584.4},0).wait(1).to({y:549.6},0).wait(1).to({y:514.8},0).wait(1).to({y:480},0).wait(1).to({y:445.2},0).wait(1).to({y:410.4},0).wait(1).to({y:375.6},0).wait(1).to({y:340.8},0).wait(1).to({y:306},0).wait(1).to({y:271.2},0).wait(1).to({y:236.4},0).wait(1).to({y:274.1},0).wait(1).to({y:311.9},0).wait(1).to({y:349.8},0).wait(32).to({regX:34.5,x:240,alpha:0.988},0).wait(1).to({regX:43.6,rotation:5.3,x:268.5,y:351.2,alpha:0.99},0).wait(1).to({rotation:10.6,x:286.6,y:353.9},0).wait(1).to({rotation:15.9,x:303.3,y:357.6},0).wait(1).to({rotation:21.2,x:318.7,y:362.6},0).wait(1).to({rotation:26.5,x:333,y:368.7},0).wait(1).to({rotation:31.8,x:346.1,y:375.9},0).wait(1).to({rotation:37.1,x:358.3,y:384.3},0).wait(1).to({rotation:42.4,x:369.4,y:393.8},0).wait(1).to({rotation:47.6,x:379.7,y:404.5},0).wait(1).to({rotation:52.9,x:389.1,y:416.3},0).wait(1).to({rotation:58.2,x:397.8,y:429.2},0).wait(1).to({rotation:63.5,x:405.8,y:443.3},0).wait(1).to({rotation:68.8,x:413.2,y:458.4},0).wait(1).to({rotation:74.1,x:420,y:474.7},0).wait(1).to({rotation:79.4,x:426.2,y:492},0).wait(1).to({rotation:84.7,x:432,y:510.5},0).wait(1).to({rotation:90,x:437.5,y:530.1},0).wait(1).to({rotation:95.3,x:442.5,y:550.8},0).wait(1).to({rotation:100.6,x:447.2,y:572.6},0).wait(1).to({rotation:105.9,x:451.7,y:541.3},0).wait(1).to({rotation:111.2,x:456,y:517.7},0).wait(1).to({rotation:116.5,x:460,y:501.9},0).wait(1).to({rotation:121.8,x:464,y:493.6},0).wait(1).to({rotation:127.1,x:467.8,y:493.2},0).wait(1).to({rotation:132.4,x:471.6,y:500.4},0).wait(1).to({rotation:137.6,x:475.3,y:515.3},0).wait(1).to({rotation:142.9,x:478.9,y:538},0).wait(1).to({rotation:148.2,x:482.7,y:568.4},0).wait(1).to({rotation:153.5,x:486.4,y:551.6},0).wait(1).to({rotation:158.8,x:490.1,y:541.1},0).wait(1).to({rotation:164.1,x:493.9,y:537.1},0).wait(1).to({rotation:169.4,x:497.8,y:539.5},0).wait(1).to({rotation:174.7,x:501.7,y:548.3},0).wait(1).to({rotation:180,x:505.7,y:563.6},0).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AK7IPQgsgHgpgPIApiCQASAcAbARQAbARAZAAQANAAAIgGQAIgGAAgKQAAgLgLgIQgMgIgYgKQg8gWgWgbQgWgaAAgnQAAhBAughQAvggBcAAIBSAIIBJASIgqB6QgUgbgZgOQgZgQgbABQgQAAgHAGQgHAHAAAJQAAAJAOAIQAOAJAdALQBLAbAWAcQAWAbAAAoQAAA9gvAhQgvAhhcAAQgxAAgrgHgAGrIPQgGhMgRgiQgRghgjAAIgBAAIAACPIirAAIAAmDIEAAAQApAAAgAQQAgAPARAbQAQAaAAAgQAAAbgLAWQgMAWgVAPQAfAkATAuQATAvAGA4gAFfEnIAEAAQAZAAALgJQALgJAAgTQAAgRgKgLQgLgKgUAAIgKAAgAgdIPIgWhBIh+AAIgXBBIirAAICGmDID0AAICGGDgAhTFyIgfheIgBAAIgfBeIA/AAgAp2IPIg9iZIg5CZIh+AAIiJmDICoAAIAtB+IAvh+IB3AAIAxB+IArh+ICnAAIiCGDgAPcifQgxgZgaguQgbguAAg3QAAg6AdgwQAdguAxgZQAygZA7AAQApAAAsAMQAqAKAdATIhICIQgPgEgSgEIgkgCQgcAAgNAIQgOAHAAAOQAAAPAPAIQAPAIAdAAQASAAARgEQARgDANgHIBICSQgeATgrALQgrALgoAAQhBAAgxgagAzMifQgugZgYgtQgYgsAAhSIAAisICsAAIAAC2QAAAYAEAJQAFAIALABQAHgBAEgCQAEgEADgGIADgRIABjCICrAAIAACzQAAAigFAdQgGAdgLAXQgLAWgRASQgSATgXAOQguAbg4AAQgzAAgvgagA5fifQgxgZgaguQgbguAAg3QAAg6AdgwQAdguAxgZQAygZA7AAQApAAAsAMQAqAKAdATIhICIQgPgEgSgEIgkgCQgcAAgNAIQgOAHAAAOQAAAPAPAIQAPAIAdAAQASAAARgEQARgDANgHIBICSQgeATgrALQgrALgoAAQhBAAgxgagAK0iIIhSh5IgBAAIAAB1IisAAIAAmDIB7AAIBZCCIABAAIAAiCICsAAIAAGHgAWHiMIAAipIiUjaICtAAIA8BYIA8hYICuAAIiUDaIAACpgAA/iMIAAmDIFCAAIAABhIiWAAIAAAwIBoAAIAABhIhoAAIAAAwICWAAIAABhgAiaiMQgGhMgRgiQgRghgjAAIgBAAIAACPIirAAIAAmDIEAAAQApAAAgAQQAgAQARAaQAQAaAAAgQAAAbgLAWQgMAWgVAPQAfAjATAwQASAuAGA4gAjml1IAEAAQAZABALgJQALgJAAgTQAAgSgKgKQgLgKgUAAIgKAAgApsiMQgFhMgRgiQgSghgiAAIgBAAIAACPIisAAIAAmDIEAAAQApAAAhAQQAgAQAQAaQAQAaAAAgQAAAbgLAWQgLAWgWAPQAgAjATAwQASAuAGA4gAq3l1IAEAAQAYABAMgJQALgJAAgTQAAgSgLgKQgKgKgUAAIgKAAg");
	this.shape.setTransform(251.3,84.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.9,331.5,930.6,711.7);
// library properties:
lib.properties = {
	width: 500,
	height: 600,
	fps: 24,
	color: "#666666",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/05End_atlas_.png", id:"05End_atlas_"}
	]
};





})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;