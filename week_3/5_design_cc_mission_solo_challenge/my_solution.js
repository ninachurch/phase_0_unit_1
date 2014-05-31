// This is a solo challenge

// Your mission description:
// 
// Find a horse! You've been travelling a long time, and you need to rest.
// Luckily, there are some horses hanging out nearby. you need to lure them over by calling them a friendly name.
// You need to get close enough for the horse to hear you, call the horse to you, and mount the horse.
// Objectives:
//	-keep Tharin alive
//	-grab the carrots
//	-call the horse
//	-mount the horse

// Pseudocode
// 	create object Tharin
//	create horse object
//	move Tharin to the left
//	create method to callHorse
//		create method this.say(...); to call horse
//		create function for horse to move to you
//	create method mountHorse
// 	create winning plan
//		Tharin move.Left
//		Tharin callHorse
//		Tharin mountHorse


// Initial Code
	
	//objects
var tharin = "Tharin";

var horse1 = new name ("Ole Horse")

	//spells
function callHorse(name) {
	this.horse1 = name;
	this.say = function() {
		alert( "come here" + this.horse1 + "!")
	}
}

function moveHorse(horse1, callHorse) {
	if (callHorse = true) {
		this.moveRight();
		this.moveRight();
	}
}

function mountHorse(horse1, tharin) {
	if (moveHorse = true) {
		this.moveUp();
	}
}

	//winning plan
this.moveRight();
this.callHorse();
this.mountHorse();


// Refactored Code

	//objects
var tharin = "Tharin";

var horse = new name ("Ole Horse")

	//spells
function callHorse(name) {
	this.horse = name;
	this.say = ("come here" + this.horse1 + "!")
	}
}

function moveHorse(horse1, callHorse) {
	if (callHorse = true) {
		this.moveRight();
		this.moveRight();
	}
}

function mountHorse(horse1, tharin) {
	if (moveHorse = true) {
		this.moveUp();
	}
}

	//winning plan
this.moveRight();
this.callHorse();
this.mountHorse();




// Reflection
// 
// This solo challenge was very confusing for me. I did not like not being able to test my code as I was writing it, and even now am unclear whether I even remotely did this correctly. 
// It did help me develop a sense of "where to start" when I have no idea. Diving into the mission objectives then pseudocode step by step and building the neceessary correspsonding items was helpful.
// If I had more time to spend, I would have like to actually work through the Code Combat site and try to find the open source code for their challenges, to help see the various ways I could've designed my own.
// 
// 
// 
// 
// 