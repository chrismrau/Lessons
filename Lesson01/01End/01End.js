(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"01End_atlas_", frames: [[0,0,800,600],[0,602,400,500],[0,1104,400,500],[402,602,400,500]]}
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



(lib.background = function() {
	this.spriteSheet = ss["01End_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo1 = function() {
	this.spriteSheet = ss["01End_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.photo2 = function() {
	this.spriteSheet = ss["01End_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.photo3 = function() {
	this.spriteSheet = ss["01End_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib._01End = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stars
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("EAkhAjwIpBikIInjrIgWpXIGKHEIIzjPIk0IDIFzHXIpJiFIlOHygA9nXwIthFIIHTseIpDrRIOHDFIH7sEIBcOWIN8D0ItPFzIAtOdgAnsboImEhPIFfi3IgtmJIEaEVIFnilIivFjIELEjImHg6IjCFYgEgzeAWoImUB5IDvlcIjvlbIGUB4IEBlOIAKGlIGOCMImOCNIgKGlgEAvlgUTImLBJIEGkxIi/liIFzCbIEVkjIghGQIFrCuImIBdIg1GOgAc19rInCBZIEnlgIjgmQIGqCrIE3lRIgfHKIGhDBIm9BwIg3HHgEAtAgjfIlkhgIFRiVIgUlwID2ERIFYiEIi4FAIDoEeIlphOIjIE1gEgvkgjIIk1iLIFHhWIAllRIC3EeIFMhGIjWEGICoEnIk8h7IjkD7g");
	this.shape.setTransform(386.1,296.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(35).to({_off:false},0).wait(13));

	// photo3
	this.instance = new lib.photo3();
	this.instance.parent = this;
	this.instance.setTransform(360,79,1,1,-2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(25));

	// photo2
	this.instance_1 = new lib.photo2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(227.2,20.5,1,1,6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(37));

	// photo1
	this.instance_2 = new lib.photo1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.4,97.1,1,1,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48));

	// background
	this.instance_3 = new lib.background();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,300,800,600);
// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/01End_atlas_.png", id:"01End_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;