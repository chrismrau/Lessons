(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/01End_atlas_.png?1467061092443", id:"01End_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"01End_atlas_", frames: [[0,0,800,600],[402,602,400,500],[0,602,400,500],[0,1104,400,500]]}
];


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
	this.shape.graphics.f("#FFFF00").s().p("EAkgAjvIpBijIIojrIgXpYIGKHEIIzjPIk0IDIFzHYIpJiGIlOHygA9nXwIthFHIHTseIpDrRIOIDFIH7sDIBbOWIN9D0ItPFzIAsOcgAnrbnImEhPIFfi3IgumJIEbEVIFmikIivFiIEKEkImFg7IjDFZgEgzdAWoImUB4IDvlbIjvlbIGUB3IEAlOIALGmIGNCMImNCMIgLGmgEAvlgUTImLBJIEFkxIi/liIFzCbIEVkjIggGRIFqCuImHBcIg1GOgAc19qInCBZIEmlgIjgmRIGqCrIE4lQIgfHJIGgDCIm9BvIg2HIgEAs/gjfIlkhfIFRiWIgTlwID2ESIFYiEIi5E/IDoEeIlohNIjJE1gEgvkgjHIk1iLIFIhWIAklRIC4EdIFMhGIjXEHICpEmIk8h6IjkD7g");
	this.shape.setTransform(386.1,296.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(35).to({_off:false},0).wait(13));

	// photo3
	this.instance = new lib.photo3();
	this.instance.setTransform(360,79,1,1,-2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(25));

	// photo2
	this.instance_1 = new lib.photo2();
	this.instance_1.setTransform(227.2,20.5,1,1,6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(37));

	// photo1
	this.instance_2 = new lib.photo1();
	this.instance_2.setTransform(2.4,97.1,1,1,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48));

	// background
	this.instance_3 = new lib.background();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,300,800,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;