(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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


(lib.mountains = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00CC33","#003333"],[0,1],-23.2,-39.8,-23.2,93.5).s().p("Eh8/AMKIAA2GQejFqSmjBQSmjBP+hZQP8haZDDLIATADIAAgDQejFqSnjBQSljBP+hZQP8haZDDLIAUADIAAWDg");
	this.shape.setTransform(800,76.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,1600,155.6);


(lib.feathercopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A0000").s().p("AhmQLQBRwZDwtWQBGj6AFiNQAEhlgagKQgjAAhGBbQhWBxhfDPQj5IbgcJBQgVGyCWMWIhWlPQh4nZAUmiIAAgBQAdpLD+omQBhjWBah1QBiiBA+ARIAAAAQBMAGgHCjQgECShJEDQjyNaiBWPQgSh6ANkQg");
	this.shape.setTransform(16.3,-8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AhyV/QgWhGgThFIgehwIAAAAQgRhDgPhBQALgDgKgdQgLgdgyj1Qgzj2AmnwQAmnwD5ocQBejOBXhyQBGhbAjABQAaAKgCB3QgCB3iJIuQiJIug5ItQg6IuACAEQACADAMABIgCAbIgKCVIgDA4IgHCVIgDBKIgVhBg");
	this.shape_1.setTransform(15.2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-150.9,70.4,300.1);


(lib.feather = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A0000").s().p("ABJuTQhEmLgyhSIgKAZQgfBVgdC+QhlKvD9dzQglgUgThzQk16YB2sRQAejMAihbQAWg5AXgVQAugsAwAhQBWArBZIEQCmO/jIUiQgTCNgnAWQCJ5EiMswg");
	this.shape.setTransform(0.2,-3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AAlWmQj89zBlqvQAci+AfhVIAKgZQAyBSBEGLQCMMwiJZEg");
	this.shape_1.setTransform(0.2,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-154.2,48.7,301);


(lib.eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPBQQgggigBguQABgtAggiQAiggAtgBQAuABAiAgQAgAiAAAtQAAAuggAiQgiAgguAAQgtAAgiggg");
	this.shape.setTransform(21.2,-3.5,0.556,0.556);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhPBQQgggiAAguQAAguAgghQAiggAtgBQAuABAiAgQAgAhABAuQgBAuggAiQgiAgguAAQgtAAgiggg");
	this.shape_1.setTransform(4.3,-24.2,1.222,1.222);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjsDtQhihjAAiKQAAiKBihiQBjhiCJAAQCLAABiBiQBiBiAACKQAACKhiBjQhiBiiLAAQiJAAhjhig");
	this.shape_2.setTransform(30,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AhSHAQhmgShUg+QgbgVgagaQgmglgagqQg2hTgMhkQgDgdAAgeQAAhnAphYQAhhHA7g7QAQgQARgOQAsglAygYQBZgqBpAAQAiAAAiAEQBnAOBWA8QAhAYAfAfQAqAqAdAuQA0BWAJBnQACAWAAAWQAABMgWBEQggBihQBPIgHAIQhtBqiTARQgcADgeAAQgqAAgogHg");
	this.shape_3.setTransform(30,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004081").s().p("AhSHAQhmgShUg+QgbgVgagaQgmglgagqQg2hTgMhkQgDgdAAgeQAAhnAphYQAhhHA7g7QAQgQARgOQAsglAygYQBZgqBpAAQAiAAAiAEQBnAOBWA8QAhAYAfAfQAqAqAdAuQA0BWAJBnQACAWAAAWQAABMgWBEQggBihQBPIgHAIQhtBqiTARQgcADgeAAQgqAAgogHg");
	this.shape_4.setTransform(30,7,1.102,1.102);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAEAEA").s().p("Ap9D3IgkgmQjkj7AAlbIAAgYQPfJOMkqwQAIA7AAA/QAAF2kJEGQkIEJl1AAQl1AAkIkJg");
	this.shape_5.setTransform(0,39);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AuBEuQAJllD+j/IABgBQEIkHF0AAQFXAAD6DeQAXAUAWAWQDcDcAlEmQmxFznmAAQmiAAnKkRg");
	this.shape_6.setTransform(-0.3,-32.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8A0000").s().p("ArILJIgkgmQkEkcABmHIAAgSQAGmVEhkhQEnkoGhABQGCgBEaD9QAWAUAXAXQD5D5AnFQQAHA+AABBQAAGhknEnIgBABQknEnmhAAQmhAAknkngAp9p9IAAAAQj/EAgJFlIAAAYQAAFbDkD8IAkAmQEIEIF1ABQF1AAEIkJQEJkIAAl1QAAg+gIg7QglkojcjcQgWgWgWgUQj7jelWAAQl1AAkIEIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.8,-100.8,201.6,201.6);


(lib.body_feathers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F0000").s().p("AgCDxQiEg1ggh1QgfhzBZhwQA4hHBSgrQgcAbgWAhQhVB8AjCEQAkCFCHBAQAkARAmAKIgWABQhRAAhKgeg");
	this.shape.setTransform(21.3,90.6,1,1,0,0,0,-3.2,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7F0000").s().p("AgCDxQiEg1ggh1QgfhzBZhwQA4hHBSgrQgcAbgWAhQhVB8AjCEQAkCFCHBAQAkARAmAKIgWABQhRAAhKgeg");
	this.shape_1.setTransform(53.3,54.6,1,1,0,0,0,-3.2,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7F0000").s().p("AgCDxQiEg1ggh1QgfhzBZhwQA4hHBSgrQgcAbgWAhQhVB8AjCEQAkCFCHBAQAkARAmAKIgWABQhRAAhKgeg");
	this.shape_2.setTransform(14.3,30.6,1,1,0,0,0,-3.2,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.1,114.1);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F0000").ss(8.7,1,1).p("A5mOeQkgmbhan7QiKsHKHpCQKGpCOXAsQOXAsH8JgQH7JhAuK+QAeHMjpGKQh7DQjFC+QhyBuh9BYQntFeqKAAQr9AAo/nnQgkgfgkggQjPi/iYjZg");
	this.shape.setTransform(204.1,188.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5E5E5").s().p("AwBArQglgegjggQjQi/iYjZQGbhmHmAAQOfAAKQF0QETCcCgC1QnuFeqKAAQr8AAo/nng");
	this.shape_1.setTransform(186,323.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("ANKVaQqQl0ufAAQnmAAmbBmQkgmahan8QiKsHKHpCQKGpCOXAsQOXAsH8JhQH7JgAuK+QAeHMjpGKQh7DRjFC9QhyBvh9BYQigi3kSicg");
	this.shape_2.setTransform(204.1,170.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.3,416.9,385.3);


(lib.beak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// beak
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C99B00").ss(5,1,1).p("AKsE7QqijQsHhPQA9kzDggjQFiAHFMAsQCGATCCAYQHFBTjvHEg");
	this.shape.setTransform(74.6,39.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("Ar9AcQA9kzDggjQFiAHFMAsQCGATCCAYQHFBTjvHEQqijQsHhPg");
	this.shape_1.setTransform(74.6,39.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C99B00").ss(5,1,1).p("AFJDVQj0AmjlgoQjlgohbhxQhbhxAMhWQAHgxA1gpQHeCSIiACQAhEBj1Ang");
	this.shape_2.setTransform(57.9,53.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AiQDTQjlgohbhxQhbhxAMhWQAHgxA1gpQHeCSIiACQAhEBj1AnQh3ATh1AAQh4AAh1gVg");
	this.shape_3.setTransform(57.9,53.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.beak, new cjs.Rectangle(-4.5,5.1,158.3,73.9), null);


(lib.wing_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.feathercopy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(280.8,436.1,1.532,1.532,-28.8,0,0,-0.1,149.2);

	this.instance_1 = new lib.feathercopy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(270.5,431.5,1.388,1.388,-36.2,0,0,-0.1,149.1);

	this.instance_2 = new lib.feathercopy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(216,390.4,1.249,1.249,-42,0,0,-9.2,102.4);

	this.instance_3 = new lib.feathercopy("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(214.2,395,1.083,1.083,-48.6,0,0,-9.2,102.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A0000").s().p("ARRe3QgzgegwgfQpRmGkpq4QhLivhGiuQj7pigoqoQghotBbobQhKg0hLBgQg7BLgwCSQjmLACILlQCJLrHxJQQGAHHHHFeIBHA1QhEgYhCgeQlyipkflgQkmlrjwmVQl+qEAPrsQAImYB7l3IgOgLIgEgEQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQivBXhjFQQhfFFAlFKQBIJ0E4ItQDUF6EyE7QDfDlG+EgIA7AmIhhgzQs6nGmSrCQj6m3hqnoQhOllA1laQh+FTBxJXQBwJYFpG6QFoG7FEC8QDqCICRBGQAxAXAnAQIAKAEIgMgEIhHgaQqwkBmSn1QmsoShboYQhcoXAikXQAikWBvgZIAFABIABgGIAFgFIgFACQAciAAuh/QBUjmC2iTQAXACAWAFQAQAFAQAFQAIACAIAFQA/ivBZioQAohNBUgPQAXAAAWADQAUADATAHQAPAGAOAKQANAKAMALQhJKLAwKXQA0K+EmJ6QEuKIH6HYQBJBEBLBEIAZAXIBUBKQgvgZgtgbg");
	this.shape.setTransform(164.8,211.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("ALjepQhSgLhUgBIgNAAQgngQgxgYQiShFjqiIQlDi9lpm6Qlpm7hwpXQhwpXB+lUQg1FbBNFlQBqHoD7G3QGSLBM6HHIBgAzIg7gmQm+khjejlQkzk6jTl6Qk4othIp0QgmlKBglFQBjlQCuhXQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABIADADIAPAMQh7F3gIGYQgPLtF+KDQDwGVEmFrQEeFgFzCpQBBAeBEAYIhGg1QnIlel/nIQnxpPiJrrQiIrlDmrAQAwiSA7hLQBLhgBJA0QhbIbAhItQApKoD6JiQBGCuBLCvQEpK4JRGFQAxAgAzAeIgCAFIgDAEQhyAch5AAQhCAAhDgIgAHmeDIBIAaQgrgEgdgWgARGdfIAOAGQAIADADAJIAAAEIAAAAIgZgWg");
	this.shape_1.setTransform(164.2,216.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("ALgbOQg+gfhBgaQBXAXBbARQgCgEgDgBQhGgPhBgmIgVgNQhQg0hdgQQgRgngtgSQhMgfhJgpQhig3hugXQm+jEkfmTQkzmvAMoVQAIliBulDQg1FHA6FfQCRNhK1IqQGgFNHmBlQBUARBWAKQgwASg7ACQgtADgsANQglAMgjAAQgSAAgRgDgAOvaFIgagJQrOj1nyo2Qnxo1gPrlQgPsCH0oFQANBvgcBuQh1HEAiHrQAsJtEPIhQFdLBLEEkIAMALIAQAMQApAdA2ANIAdAHIACAIQgdAVgiANQgngJg5gTgAnASiQngksh7ogQhonJBzmqQgSB5gHB8QghI3FAHCQE0GyGlEAQjMhnjDh6g");
	this.shape_2.setTransform(166.1,242.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8A0000").s().p("AtrORQhahggxiAQiWmBAUmtQANkTB+jsQAzj8BjjwQA1iBBkhVQB9kFDXi/QAmAAAmAEQAKABAKADQALGwg2HLQglE7AuExQBeJzF2IUQF6IXJWEZQADAAAAAGQgGAAgFgCIgagGIgdgHQg2gNgpgdIgQgMIgMgMQrEkjldrBQkPohgsptQginsB1nDQAchugNhvQn0IEAPMDQAPLlHxI1QHyI2LOD1IAaAJQA5ASAnAJIAFABIgFAAQhWgLhUgQQnmhlmglNQq1oqiRthQg6lfA1lHQhuFDgIFiQgMIVEzGuQEfGTG+DFQBuAWBiA3QBJApBMAfQAtATARAnQBdAPBQA0IAVAOQBBAmBGAPQADABACADQhbgQhXgXQBBAaA+AeIAUAKQvIigqhrRgAwRGBQB7IgHgEsQDDB6DMBmQmlkAk0mxQlAnCAho4QAHh8ASh5QhzGrBoHJg");
	this.shape_3.setTransform(165.1,238.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AsUOFQm2jYknmIQjIkKgllFQgQiKACiIQAVCFAfCBQCSJiIrFNQNcIEP+gyQDZgLDFgxQCVglCKg7QglAcgjAeQgdAZggAUQhgAEhqAWQhgAThnAjQiyA7i/ALQhXAFhWAAQqcAApgksgAVmQwQgsASgpAFIBVgXgAoAMiIi/hKQo0jbj+odQkLo4B3pYQCxBKBrDSQDFGEDxFlQBcCHCABpQLvJyPZBzQCTASCSAXQCjAbCQgfQBWgTBOgnQhGA5hPA2IhXAIQiQAQiVAdQk+A9k3AAQpBAAomjUg");
	this.shape_4.setTransform(94.6,331.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8A0000").s().p("ADzUDQsDhZpjm5Qi3iFiaipQlCligsnWQgWjrA5jaQAJgiALggIgChHQgFjQCEh4QDyBAB2D7QEkJsHdHqQBABCBPAwQDxCREGBpQJ6D+KyAbQDbAJDBggQgcARgcAOQhPAnhVASQiQAgikgbQiSgYiTgRQvYh0rwpxQiAhqhbiHQjylljFmEQhqjSiyhJQh2JXEKI4QD/IdIzDbIC/BKQNQFIONixQCVgdCPgPIBXgJIAmgDQgwAZgyAVQiKA8iUAlQjGAxjYAKQv/AytboDQorlNiTpjQgfiAgViFQgCCHAQCLQAmFFDIEKQEnGHG2DZQKuFSL6grQC/gLCzg8QBngiBfgUQBqgWBhgDQAagCAZABIhlAbIhUAWQkPBIkSBNQi4Azi7AAQhOAAhQgJg");
	this.shape_5.setTransform(92.6,331.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("A7+NxQjThLAFi4QIzBEJEg3QK3hDJ0kiQKUkwICn2QCfibBoitQA0hWAmhaQAEBQgdBSQgeBWgEBbQgEBagqBFQgGAJgIABQAwhzASh9Ig/B0Qh6DWiYDUQhqCUiKBzQnSGFoTEgQpeFKp6AAQnDAAnRingA20JIIgUgHIi6g9Qhcgfg7hHQAvgmA8gFQC0gOC2AAQFPABFNgWQJ0goIxkAQCkhKCdhVQHvkJFhmTQAwg3Aug6Qh1Bth8BpIgPANIhdBMIAAABIgLAJIgVAQIhpBTQh4Bch8BSQrqHruDBEQnMAjnPAHIgDgIQgEgIgIgGQgMgJgJgKQgEgEAAgHQAog0BHggQCKg8CggCQG3gGG5gWQHBgYGfiiQGdijFEkcQArglAqgoIgVAMQB7hSByhdQBCg2BLgnQB3g+BfhQIAKADIAGADIAAABQguA7gwA6QnJIqp2F+QuzJBxLAAQhyAAhzgGg");
	this.shape_6.setTransform(70.9,510);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8A0000").s().p("A7HOyQkVhfgUkCQgGhEBFgEQB3gGB5AGQhGgsg9hOQgZgfAZgiQA9hVBrgBIBUAAQgMjnEkgMQKRgZKOhCQElgeEUhsQDshcDkhwQAmgTAkgYQCghuCnhgIAVgMQgqAogrAlQlEEcmdCjQmfCjnBAXQm5AWm3AGQigACiKA8QhHAggoA0QAAAHAEAEQAJAKAMAJQAIAGAEAIIADAIQHPgHHMgjQODhELqnrQB8hSB4hcIBphTIAVgQIALgJIAAgBIBdhMIAPgNQB8hpB1htQguA6gwA3QlhGTnvEJQidBVikBKQoxEAp0AoQlNAWlPgBQi2AAi0AOQg8AFgvAmQA7BHBcAfIC6A9IAUAHQTNBCQWp8QJ2l/HJoqQAwg6Aug7IAIgLIgHATQgmBag0BWQhoCtifCbQoCH2qUEwQp0Eiq3BDQpEA3ozhEQgFC4DTBLQReGSQOo1QITkgHSmFQCKhzBqiUQCYjUB6jWIA/h0QgSB9gwBzQhACch2CMQmgHuoxFoQmoEQnfCFQltBllnAAQmvAAmpiSg");
	this.shape_7.setTransform(68,514);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("AoveUQiuqkGBpSQGKpgFQp2QEtozCnpWQAYhYAWhZQhSBggrCEIgDAIQgoB+gwB6QiqGpjTGcQkAH1lNHIQnLJzBAMJQADAhAGAfIgHAHQgLAMgOAGQgPgFgFgJQiBjugNkZQgYoKFWl4QG3nhE7osQD7m6CynRQAwh8Aqh+QhDCWhHCVQigFNi2FGQlmKGoJIgQg/BCgrBQQkCHbBDIPQgqgxgVhEQi3pjHGnSQGamlFFnsQEnm+DsnQIAyhkIgwBNIABgGQACgMAFgMQAEgHACgJQBJhdBGhdQAdgnAogeQBjhLBfhQQAmggAQgxIAFgDIACAAIAHgBIAAgBIAKADIAAAAIgiC+QhpIaipIWQgzCig+CbQjwJYkxJIQlKJ6ikK1IgSAAQhdAAgbhrgAQS/6IADACQANAfgMAiQgMAjAAAoQAAAUgHAMQAJhXAGhXg");
	this.shape_8.setTransform(166.7,611.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8A0000").s().p("EgHLAglQhehOgrhrQghAmh2hQQhKgygVhXQgQhAgLhAQhbAMg7iMQhoj1AnkWQAnkTCsjgQEjl7E9ljQEflCDdlrQCwkgCukRIAwhNIgyBkQjsHPknG+QlFHtmaGkQnGHSC3JkQAVBDAqAyQhDoQECnbQArhPA/hCQIJogFmqHQC2lFCglOQBHiUBDiWQgqB9gwB8QiyHRj7G6Qk7Ism3HiQlWF4AYIKQANEZCBDtQAFAKAPAFQAOgHALgMIAHgGQgGgfgDgiQhAsIHLp0QFNnIEAn0QDTmcCqmqQAwh5Aoh+IADgIQAriFBShfQgWBYgYBYQinJXktIzQlQJ1mKJhQmBJRCuKlQAeB1BsgLQCkq0FKp7QExpHDwpZQA+ibAzihQCpoXBpoaIAii9IAFgaIgCAbQgGBXgJBWQg9Jwi8JtQhqFei3FBQlvKHkDK6QhZDtglD3QgaCmiDBRQgXANgVAAQgZAAgWgSg");
	this.shape_9.setTransform(161.5,615.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0000").s().p("EAJOAhXQm9lZhqosQiHrJB5rUQAukOAzkMQB4p+gbp0QgDhOgGhNQAgACASAaQABAhAIAiIAJAmQCCJBgyJgQgqH9AbH9QAlK8DiKSQAVA/AcA4QCDEFhYD6IgUABQguAAgmgcgACRf8QjxiPhqkHQi1nCAvnuQBAqRCyp6QCcorAVo5QADhWAAhVIAAAAIAUhJQAZhdAwhJQgSAmACA0IAEBNQANHDhVG6QiMLghILwQhMMsGbKmIAQAaQADAfgGAeQgGAggCAiIgOAAQglAAgbgQgAl7dOQj+oOBUpkQBQpCC/onQCZm8A3nIQAMhpAHhoIBhkIQAWg8ASg+QgWCUgaCYQgaCageCdQgxD0hADvQi0KihjKyQhnLXFrJsIABADIgDAFQgHALgEALQgFAOgNAHQgbAGgZAAQhiAAgwhkgArNK6QA0nPCwmrQCXlvBYl1QAPhDAOhDQgKgCgDAIIgTA0QAHhPAwhQQA5hgAnhqIASguIgCAFQgjCjgpChQhjGDiFF6QjYJignKPQgTE8BHEjQiqmVAynAgEAEGghNQANAYAEAdIgRg1g");
	this.shape_10.setTransform(247.2,620.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8A0000").s().p("AEefLIAAACQAAA8glAvIgJAIQjeAJiIikQgTA2iSgMQiggNhEiaQgWgxgTgxQg/gMgvhjQjHmlAtniQAvn4C7nPQCimRCQmMIATg0QADgIAKACQgOBDgPBDQhYF1iXFvQiwGrg0HPQgyHACqGVQhHkjATk8QAnqPDYpiQCFl6BjmDQApihAjijIACgFQANg/AWgxIgCAVQgHBogMBpQg3HIiZG8Qi/InhQJCQhUJkD+IOQA9B9CJgfQANgHAFgOQAEgLAHgLIADgFIgBgDQlrpsBnrXQBjqyC0qiQBAjvAxj0QAfidAZiaQAaiYAWiUQAABWgDBVQgVI5icIrQiyJ6hAKRQgvHuC1HCQBqEHDxCPQAgATAugDQACgiAGggQAGgegDgfIgQgaQmbqmBMssQBIrwCMrgQBVm6gNnDIgEhNQgCg0ASgmQAKgWARgSIAAAJQAGBNADBOQAbJ0h4J+QgzEMguEOQh5LUCHLJQBqIsG9FZQAuAjA6gIQBYj6iDkFQgcg4gVg/QjiqSglq8Qgbn9Aqn9QAypgiCpBIgJgmQgIgigBghIAAgIIAGARIARA1QAuCVAZCGQAfCkAYGqQAYGpgQIuQgRItCMIrQCLIqB7EjQB7EkizDTQkHgYiqi9g");
	this.shape_11.setTransform(249.5,624.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("Aj7fOQltnIg3pnQg0pGA+pDQAynXgynOQgLhdgOhdQAOiBAWiAQAJg4AFg4QAKCLAICPQAICNAECRQAHD5gID3QgZK4A7K4QA+LbHuILIACADIgDAFQgEANgCAMQgBAOgLAKQguAWgoAAQhJAAg4hFgEAEsAgCQkNhWihjnQkVmPhBnsQhVqPAfqRQAco2hnolQgPhRgShRIACgpQAFhjAUhcQACAVAGAWIAXBSQBxGxAQG+QAbLtBjLtQBsMoIpI5IAWAVQAKAeAAAeQABAhAGAhQgYAIgVAAQgSAAgQgFgALyf2Qn/jsjloGQkjqYgrrdQgRkSgKkQQgcqvi5p/IgYhOQABgCAFgBQAYAAAUAQIAGAFQAIAfAPAeIAOAdQECIXBZJhQBJH5CMHqQDBKiFwJOQAjA5AoAwQC5DhgdEIQgYAJgZAAQgdAAgdgNgAtKOjQg2nPBMnIQBDmZgBmPQAAgzgCgzQgJgBgBAJIgHA0QgFggAMgqQAsiaAWigQABCDgDCDQgIGggvGeQhJKDBtKHQA0E4CHEMQkAlkg0nBg");
	this.shape_12.setTransform(323.3,613.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8A0000").s().p("AAhfjQgHA5iQAVQifAXhliGQgggrgdgsQhBAChDhWQkhlthAnfQhEn2BPntQBEmuAzmjIAHg0QABgJAJABQACAzAAAzQABGPhDGaQhMHHA2HPQA0HBEAFkQiHkMg0k4QhtqHBJqDQAvmeAImgQADiDgBiDIgBgmQgBhEALg3IAFAiQAOBdALBdQAyHOgyHXQg+JDA0JGQA3JnFtHIQBYBsB/g9QALgKABgOQACgMAEgNIADgFIgCgDQnuoLg+rbQg7q4AZq4QAIj3gHj5QgEiRgIiNQgIiPgKiLIgEg0IAGAbQASBRAPBRQBnIlgcI2QgfKRBVKPQBBHsEVGPQChDnENBWQAjALAsgOQgGghgBghQAAgegKgeIgWgVQopo5hssoQhjrtgbrtQgQm+hxmxIgXhSQgGgWgCgVQgEg0AZgoIACAIIAYBOQC5J/AcKvQAKEQARESQArLdEkKYQDkIGH/DsQA1AYA2gUQAdkIi5jhQgogwgjg5QlwpOjBqiQiMnqhJn5QhZphkCoXIgOgdQgPgegIgfIgDgKIANAWIAIANQBaCWA8CKQBDCZB3GZQB3GaBsIjQBtIjEFH9QEEH8C5EBQC6EAiAD2QkFAkjRiSIABACQAOA6gaA2QgDAGgEAEQhDASg/AAQiKAAh0hYg");
	this.shape_13.setTransform(325.4,616.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0000").s().p("AjcahQnBlqhWpAQhGncghnjQgcmigumfIgajcIALgsIAgh6QgBAnAGAuIAHA0QA3GdAZGhQAIB9ACB3QAIJGD7H/QCyFpERErQBwB7CMBOIgBACIgGAOIgGAOIgFAOQgnAGglAAQiXAAh8hjgAFzbSQl5ilj2lWQijjhhpkCQjLnvgjoXQgjovhaogIgRhhIAniPQAWhPAUhQIADCmQAFDEANDNQAmJpCwJIQDiLpH6JaQC3DaDqBpQgNBthVAAQgoAAg4gZgArTWXQhSi/gxjFQhznRAUnxQASmxglmrIgMh7QgVAwgHA6QgLgnAPgyQAQg1ABg7QABhzAWhwQAAC5AMDHIAFBWQAiHTAFHZQAIKCEmIsQCCD2DSCDQlAgMiJk+gAEpVzQnhnfjnp3QiLl7g/mQQhcpLhapFIgTh5IABgDIADgDIAGgDIAKgDIAAAAQA2AGAVAuQATArAMAtQAMAsAPArQAEANgCANIgBABIgnh3QgPAzAJAzIABADQBVHzDCHUQByEUCCEUQEtKDHqIPQArAuAzAiQESC0AoEaIgxABQmBAAkbkag");
	this.shape_14.setTransform(343.9,578.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8A0000").s().p("AgZcnQhNgThGgdQiVB6jKiQQlOjwhmmaQh7nvAcoVQAWmYgRmZQgDg5AHgyQAIg6AUgwIAMB7QAlGrgRGxQgUHxBzHRQAwDFBSC/QCJE+FAAMQjSiDiCj2QkmosgHqCQgGnZghnTIgGhWQgMjHABi5IAAhLIAGAuIAaDcQAtGfAdGiQAhHjBGHcQBVJAHCFqQCZB7DFgeIAGgOIAGgOIAGgOIABgCQiMhOhxh7QkRkrixlpQj7n/gJpGQgCh3gHh9Qgamhg2mdIgHg0QgHguACgnQABgqAKgiIAEAVIAQBhQBaIgAkIvQAiIXDLHvQBqECCiDhQD3FWF4ClQCvBMATigQjphpi4jaQn6pajhrpQixpIgmppQgMjNgGjEIgDimIAAgUIACANIATB5QBZJFBcJLQA/GQCLF7QDoJ3HgHfQEtEsGggTQgnkakTi0QgygigrguQnqoPkuqDQiBkUhzkUQjCnUhVnzIAAgDQgJgzAPgzIAnB3QBlE3BeFEQBcE+CUEjQEuJXGSIfQC/EBD9DBQEIDJiBEKQjeABi/hFQgRDRkAhFQhNgVhIggQgNBqhwAAQglAAgugLg");
	this.shape_15.setTransform(347.5,582.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC0000").s().p("AkMalQm0l7g/pDQg0negOnkQgNmigdmhIgSjdIAMgrIAlh5QgDAnAFAuIAFA1QAnGeAJGiQADB9gDB2QgOJHDoIIQCjFwEFE1QBtB/CIBTIgBACIgGAOIgHAOIgGAOQgdADgcAAQijAAh+hugAFAbtQlyizjplgQiajnhgkFQi4n3gOoYQgOowhFojIgNhhIAtiNQAZhPAWhPQgCBSgBBUQgCDEAEDNQAPJqCaJOQDFLyHiJsQCwDhDkBzQgQBohQAAQgqAAg6gcgAr6WIQhKjCgpjGQhhnWAnnwQAimwgVmrIgHh8QgWAvgKA6QgJgnARgyQASg0ADg7QAGhzAahvQgIC5AFDHIACBWQAQHVgNHYQgRKCEQI3QB5D6DNCLQlAgYh9lDgAEDWLQnNnwjQqAQh8mAgwmSQhGpOhDpIIgOh6IAAgDIAEgDIAGgDIAKgCIAAAAQA2AIATAvQARAsAKAtQALAsANArQAEANgDAOIAAAAIgjh3QgRAyAHAyIABADQBBH3CxHbQBoEYB2EZQEVKOHVIhQApAwAyAjQELC/AdEbIgIAAQmbAAkfk0g");
	this.shape_16.setTransform(338,586.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8A0000").s().p("Ag7c0QhMgWhFggQiaB0jEiYQlEj8hWmeQhpnzAxoUQAmmXgCmZQAAg5AJgyQAJg6AXguIAHB7QAVGsgjGwQgnHwBiHVQAoDHBLDBQB9FEE/AYQjNiLh4j7QkRo3ARqCQANnYgQnUIgChXQgEjHAHi4IAEhLIAEAtIARDeQAeGgAMGjQAOHkA0HeQA/JDG0F7QCUCBDHgWIAGgOIAGgOIAHgOIABgCQiJhThsiAQkFk1iklwQjnoHAOpHQACh3gDh9QgJmhgmmfIgFg1QgFguADgnQACgqAMghIADAVIANBhQBEIjAPIxQAOIYC4H2QBfEGCaDnQDpFfFyC0QCrBSAaifQjlhyivjhQnjptjFrxQiapOgOpqQgFjOACjDQABhUADhTIAAgUIABANIAPB6QBDJIBFJOQAwGSB9GAQDPKAHOHxQEhE3GggDQgckckMi+QgxgkgpgvQnWohkUqPQh3kYhokZQiwnahCn3IAAgDQgHgzARgyIAiB4QBZE7BSFHQBQFBCIEpQEXJiF+IuQC0EJD2DKQEADTiLEEQjegHi8hMQgZDQj9hPQhNgYhGgiQgRBmhoAAQgnAAg0gPg");
	this.shape_17.setTransform(339.5,591.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0000").s().p("An5ZKQjljihpkyQjkqXCJqvQAQhTAThXQg4GOAZGaQAsLFH0HsQEBD8E8BbQmMgBkskrgABfcVQhHgeg/gpQkri6jFkdQmKo9A7rDQAmnTBMnDQAjjRAsjNQgdBWgaBZQAeiGA3h/QB0kKCkjYQAGACAFADIADADQgXBGgUBIQhPERghEmQhAJEBkI0QCVNGLTIHQFFDoECEcQl3ATlajKQjciCi5ioQnwnChdqIQgulDAZlGQAim/BumlQA/j0BajrQhKBhguCJQgfBegcBhQg6DEgoDHQhcHPABHjQACFeCDE7QENKKJcFmQDGB1DWA2QhXAVhZAAQifAAikhEgAlg9sIAGAHQACACAAADIgWA4IAOhEg");
	this.shape_18.setTransform(312.5,593.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8A0000").s().p("AABeOQrsjVjBroQgqijgXirQhRphCOpLQAsi0BYjaQAgiCAmh+QAahYAdhWQgsDNgjDRQhMHDgmHTQg7LDGKI9QDFEdErC6QA/AoBHAeQD+BrD1g7QjWg2jGh1QpclmkNqKQiDk7gCldQgBnkBcnPQAojHA6jEQAchhAfheQAuiJBKhhQhaDrg/D0QhuGlgiG/QgZFGAuFDQBdKIHwHCQC5CoDcCBQFaDLF3gTQkCkclFjpQrToGiVtGQhko0BApEQAhkmBPkSQAUhHAXhGIAEgMIgDANIgOBEQiBJjALKQQANLDGDJAQArBAA2A8QGZG9H8FVQCmBwhKCRQgLAXgeAAQh4AAhzgRQgJA9hPAFQi/AMivgjQg2A8hhAAQg6AAhIgUgAusk4QiJKvDkKXQBpExDlDjQEsErGMABQk8hbkBj9Qn0nrgsrFQgZmaA4mOQgTBXgQBTg");
	this.shape_19.setTransform(313.5,597.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0000").s().p("ADJdQQrniJhXrgQgmlDBElAQBrn3D1nQQDpm5FAluQB9iOCLiEQjxC2jCDhQjDDiiVEOQihEjiLEtQkoKCCNK4QAiCkBRCQQCtEzEcB9QgagCgbgHQrrjGAJsCQAJq6FOpfQEioPGXm7QA3g7A4g6QghAYggAbQAeghArgdQDeiaDkiKICahdQAFAVgCAUQhnBXhgBdQhiBfhcBkIjPDzQlSGsjKINQjqJdCbKAQAnChBkCGQD6FLFBEeIgdAAQhLAAhJgNgANz8zQgJBDhfA4IgUAMQA9hEA/hDg");
	this.shape_20.setTransform(189.1,591.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8A0000").s().p("ABCdKQgoA4iWggQqkiPhYqQQhaqhEMpkQEOpsHRnsQBjhpBshXQAggbAhgYQg4A6g3A7QmXG7kiIPQlOJfgJK6QgJMCLrDGQAbAHAaACQkch9itkzQhRiQgiikQiNq4EoqCQCLktChkjQCVkODDjiQDCjhDxi2QiLCEh9COQlBFujoG5Qj1HQhrH3QhEFAAmFDQBXLgLnCJQBWAQBbgDQlBkej6lLQhkiGgnihQibqADqpdQDKoNFSmsIDPjzQBchkBihfQBghdBnhXQg/BDg9BEQjeD4jNEPQiTDCh9DOQhlC6hZDEQkZJmCLKeQBgHQGIEmQAwAkA1AgQCcBeguCKQgKAegkABIgjAAQinAAiOgng");
	this.shape_21.setTransform(186.2,597.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC0000").s().p("A5vTQQiIj6BpkTQD3qEJPmHQI7l7KPjRQHuidHxhyQCpgnCqgiQAFADAEAFQgCBEgjArIAAAAIgBAAQgzA8h6AEIgIABIC1hBQinAViuAoIgYgCIACAHQh9AdiAAmQlEBgk5CCQqGELoKHOQoZHajDKfQgeBmhVA5QgPAKgNAAQgWAAgQgdgA2JBLQHBoQJ+kbQHpjZIKh0QqRC0pZFGQpEE6lwIRQhsCcg/CqQBHkeDQj1g");
	this.shape_22.setTransform(101.8,533.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8A0000").s().p("A5rT1QhphEADiEQABhJAIhHQgihNAMhuQAoleDYkgQGeooJ8kuQM2mIOUhaIgXAMQDogwDpgkQAJADAJAFIAQAKIgCAAQipAiipAnQnxBynuCdQqPDRo8F7QpOGHj3KEQhqETCID6QAaAuApgbQBVg5AehmQDDqfIYnaQILnOKGkLQE4iCFFhgQCAgmB8gdIAWgFQCugoCogVIi2BBQmZCPmjCHQolCxnPFWQpGGslYJ2Qh0DVhPDkQgqB3hSAAQgvAAg9gogAkdr+Qp/EbnAIQQjQD1hIEeQBAiqBsicQFwoRJDk6QJZlGKSi0QoKB0npDZg");
	this.shape_23.setTransform(97.3,536.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC0000").s().p("AepMQQhTgMg3glIgBACQorl3mXipQlviXl4iGQu4lUuhFkQhRAfhQAbQg0ARgLgYQg5iEB2hnIAFgBIAJgEQAEgDADgDIAFgFIAEgHQAOgLARgKQOYo2QAG+QKNEcJDGoQDuCuDsCYQBqBEBqBAIABAAIAAAAQAcArgtAAIgTgBgAb5JmIABgBIgCgDgAakHqQgFgKABgLIgIAMQiXh3iehxQmzk2nVkDQpclNq5goQjRAGjRAkQknA0joCYQEBkQGqgyQJHhEIPD0QJ+EnJNF5QA/ApA2AwQCsCYCzB/QA1AlA1AjQBZBgBIBsQiLh3iRhyg");
	this.shape_24.setTransform(74.2,341.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8A0000").s().p("AVoIjQjBhuo1j/Qo2j/rxgUQrygUmaDbQhVAthEg2Qh9hjByiHQAtg2AygwQgTguAlgvQCfjEDlhtQEjiMFCgkQLJgNJZFgQHCEGG7EaQFUDZENErIglgYQg1gjg0glQi0h/iriYQg3gwg+gpQpOl5p9knQoQj0pGBEQmqAykBEQQDoiYEng0QDRgkDRgGQK5AoJcFNQHUEDGzE2QCeBxCXB3IANAJQCRByCLB3IAqAlIgegSIAAAAQhqhAhqhEQjsiYjuiuQpDmoqNkcQwAm+uYI2QgRAKgPALIgEAHIgEAFQgDADgFADIgJAEIgEABQh3BnA6CDQAKAYA0gRQBRgaBRgfQOglkO4FUQF5CGFuCXQGXCpIsF3IAzAiQlaiejBhtg");
	this.shape_25.setTransform(69.3,337.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.5,-0.2,245.3,432);


(lib.scrollinglandscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mountains("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(800,-78.7,1,1,0,0,0,800,76.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},29).wait(1));

	// Layer 2
	this.instance_1 = new lib.mountains("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1000,-101.4,1.25,1.286,0,0,0,800,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:0},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-201.2,2000,200.3);


(lib.head_feathers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.feather("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(46,126.6,0.562,0.305,0,-21.2,-22.6,0.1,148.8);

	this.instance_1 = new lib.feather("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(53.9,142.2,0.67,0.465,0,-13.1,-17.3,-0.2,148.7);

	this.instance_2 = new lib.feather("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(58.1,145.3,0.533,0.422,0,-5.8,-8,-0.2,149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,5.6,60.1,138.3);


(lib.bird_flight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wing_right
	this.instance = new lib.wing_right("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(269.6,435.7,1,1,0,0,0,269.6,411.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:157.6,regY:420.3,x:157.6,y:443.8,startPosition:1},0).wait(1).to({y:442.5,startPosition:2},0).wait(1).to({y:439.6,startPosition:3},0).wait(1).to({y:436.8,startPosition:4},0).wait(1).to({y:435.5,startPosition:5},0).wait(1).to({regX:269.6,regY:411.9,x:269.6,y:426.9,startPosition:6},0).wait(1).to({regX:157.6,regY:420.3,x:157.6,y:435.5,startPosition:7},0).wait(1).to({y:436.3,startPosition:8},0).wait(1).to({y:438.3,startPosition:9},0).wait(1).to({y:441.2,startPosition:10},0).wait(1).to({y:443.1,startPosition:11},0).wait(1).to({y:443.9,startPosition:12},0).wait(1).to({regX:269.6,regY:411.9,x:269.6,y:435.7,startPosition:13},0).wait(1));

	// body_feathers
	this.instance_1 = new lib.body_feathers("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(254.1,563,1,1,0,0,0,37,57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:561.4},0).wait(1).to({y:554.5},0).wait(1).to({y:539.2},0).wait(1).to({y:524.2},0).wait(1).to({y:517.7},0).wait(1).to({y:516.2},0).wait(1).to({y:517.3},0).wait(1).to({y:521.9},0).wait(1).to({y:532.4},0).wait(1).to({y:547.5},0).wait(1).to({y:557.5},0).wait(1).to({y:561.9},0).wait(1).to({y:563},0).wait(1));

	// eye
	this.instance_2 = new lib.eye("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(442.9,473);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:471.4},0).wait(1).to({y:464.5},0).wait(1).to({y:449.2},0).wait(1).to({y:434.2},0).wait(1).to({y:427.7},0).wait(1).to({y:426.2},0).wait(1).to({y:427.3},0).wait(1).to({y:431.9},0).wait(1).to({y:442.4},0).wait(1).to({y:457.5},0).wait(1).to({y:467.5},0).wait(1).to({y:471.9},0).wait(1).to({y:473},0).wait(1));

	// beak
	this.instance_3 = new lib.beak();
	this.instance_3.parent = this;
	this.instance_3.setTransform(645.9,579.9,1,1,0,0,0,110.6,66.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:74.6,regY:42,x:609.9,y:553.7},0).wait(1).to({y:546.8},0).wait(1).to({y:531.5},0).wait(1).to({y:516.5},0).wait(1).to({y:510},0).wait(1).to({regX:110.6,regY:66.6,x:645.9,y:533.1},0).wait(1).to({regX:74.6,regY:42,x:609.9,y:509.6},0).wait(1).to({y:514.2},0).wait(1).to({y:524.7},0).wait(1).to({y:539.8},0).wait(1).to({y:549.8},0).wait(1).to({y:554.2},0).wait(1).to({regX:110.6,regY:66.6,x:645.9,y:579.9},0).wait(1));

	// body
	this.instance_4 = new lib.body("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(375.6,521.1,1,1,0,0,0,204.1,188.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:519.4},0).wait(1).to({y:512.6},0).wait(1).to({y:497.2},0).wait(1).to({y:482.3},0).wait(1).to({y:475.8},0).wait(1).to({y:474.2},0).wait(1).to({y:475.4},0).wait(1).to({y:480},0).wait(1).to({y:490.4},0).wait(1).to({y:505.5},0).wait(1).to({y:515.5},0).wait(1).to({y:519.9},0).wait(1).to({y:521.1},0).wait(1));

	// head_feathers
	this.instance_5 = new lib.head_feathers("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(525.1,363.3,1,1,0,0,0,35.5,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:73.1,y:361.7},0).wait(1).to({y:354.9},0).wait(1).to({y:339.5},0).wait(1).to({y:324.6},0).wait(1).to({y:318.1},0).wait(1).to({regY:73,y:316.4},0).wait(1).to({regY:73.1,y:317.7},0).wait(1).to({y:322.3},0).wait(1).to({y:332.7},0).wait(1).to({y:347.8},0).wait(1).to({y:357.8},0).wait(1).to({y:362.2},0).wait(1).to({regY:73,y:363.3},0).wait(1));

	// backwing
	this.instance_6 = new lib.wing_right("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(349.1,443.2,0.95,0.95,0,-28.2,151.8,269.6,411.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:157.6,regY:420.3,x:446.7,y:399.3,startPosition:1},0).wait(1).to({y:396.6,startPosition:2},0).wait(1).to({y:390.4,startPosition:3},0).wait(1).to({y:384.4,startPosition:4},0).wait(1).to({y:381.8,startPosition:5},0).wait(1).to({regX:269.6,regY:411.9,x:349.1,y:424.4,startPosition:6},0).wait(1).to({regX:157.6,regY:420.3,x:446.7,y:381.7,startPosition:7},0).wait(1).to({y:383.5,startPosition:8},0).wait(1).to({y:387.7,startPosition:9},0).wait(1).to({y:393.8,startPosition:10},0).wait(1).to({y:397.8,startPosition:11},0).wait(1).to({y:399.5,startPosition:12},0).wait(1).to({regX:269.6,regY:411.9,x:349.1,y:443.2,startPosition:13},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.5,23.6,645.6,690.2);


// stage content:
(lib._10End_build = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.movieClip_2.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			alert("Mouse clicked");
			/* Stop a Movie Clip
			Stops the specified movie clip on stage.
		
			Instructions:
			1. Use this code for movie clips that are currently playing.
			*/
		
			this.movieClip_2.stop();
			// End your custom code
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bird
	this.movieClip_2 = new lib.bird_flight();
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(308.9,184,0.318,0.318,0,0,0,342.2,342.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1));

	// landscape
	this.instance = new lib.scrollinglandscape();
	this.instance.parent = this;
	this.instance.setTransform(1000,298.8,1,1,0,0,0,1000,-101.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#33CCFF","#000099"],[0.553,1],0,0,0,0,0,458.3).s().p("Eg+fAfQMAAAg+fMB8/AAAMAAAA+fg");
	this.shape.setTransform(400,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,200,2000,400);
// library properties:
lib.properties = {
	width: 800,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};





})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;