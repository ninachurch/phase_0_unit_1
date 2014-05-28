// I worked on this challenge [by myself, with:]
   ///I worked on this challenge with Ori Pleban
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

//Challenge Name: Rescue mission - busting the troops out of ogre prison
//PsuedoCode: 
    //move to villain
        //go down 2 spaces
            this.moveDown();
            this.moveDown();
        //go to the right 1 space
            this.moveRight();
        //go up 2 spaces
            this.moveUp();
            this.moveUp();
        //go the right 2 spaces
            this.moveRight();
            this.moveRight();
        //down two spaces
            this.moveDown();
            this.moveDown();
    //attack villain
            this.attackNearbyEnemy
//Final Code for "Rescue Mission"    
    this.moveDown();
    this.moveDown();
    this.moveRight();
    this.moveUp();
    this.moveUp();
    this.moveRight();
    this.moveRight();
    this.moveDown();
    this.moveDown();
    this.attackNearbyEnemy();
 


//Challenge Name: Grab the Mushroom
//PsuedoCode for Grab the Mushroom: 
    //get mushroom
        //move up 1
            this.moveUp();
        //move to the right once
            this.moveRight();
    //attack villain
        //go to the left once
            this.moveLeft();
        //go up once
            this.moveUp();
        //attack the enemy
            this.attackNearbyEnemy();      
//Final Code for "Grab the Mushroom"
    this.moveUp();
    this.moveRight():
    this.moveUp();
    this.moveLeft();
    this.moveUp();
    this.attackNearbyEnemy();

 

//Challenge Name: Drink Me
//PsuedoCode for Drink Me: 
    //kill Munchkin #1
        //attack the enemy
            this.attackNearbyEnemy();
    //drink potion
        //move right
            this.moveRight();
        //move down
            this.moveDown();
    //kill Munchkin #2
        //move up
            this.moveUp();
        //move one to the right
            this.moveRight();
        //attack the enemy
            this.attackNearbyEnemy();
//Final Code for "Drink Me"
    this.attackNearbyEnemy();
    this.moveRight();
    this.moveDown();
    this.moveUp();
    this.moveRight();
    this.attackNearbyEnemy();
 

 
 //Challenge Name: Taunt the Guard
 //PseudoCode for Taunt the Guard:
  //Get to the Ogres
    //get to the next passageway
      //move to the right x 2
        this.moveRight();
        this.moveRight();
      //move up
        this.moveUp();
    //taunt to the ogres
      //say "Hey there"
        this.say("Hey there");
    //Escape from ogres
        this.moveDown();
        this.moveRight();
        this.moveUp();
        this.moveRight();
 //Final Code for "Taunt the Guard"
   this.moveRight();
   this.moveRight();
   this.moveUp();
   this.say("Hey there");
   this.moveDown();
   this.moveRight();
   this.moveUp(); 
   this.moveRight();
  
 

 //Challenge Name: It's a Trap!
 //PseudoCode for It's A Trap!
 	//taunt the ogre
 		//move down twice
 			this.moveDown();
 			this.moveDown();
 		//say "hey you!"
 			this.say("Hey YOU!");
 	//run back back to the trap
 		//move up twice
 			this.moveUp();
 			this.moveUp();
 //Final Code for "It's a Trap"
 	this.moveDown();
 	this.moveDown();	
 	this.say("Hey YOU!");
 	this.moveUp();
 	this.moveUp();
 


 //Challenge Name: Taunt
 //PseudoCode for Tuant
 	//taunt the ogre four times
 		this.say("Over here!");
 		this.say("You're a bully!");
 		this.say("Come here you");
 		this.say("You're going to get what you deserve!");
 //Final Code for "Taunt"
 	this.say("Over here!");
 	this.say("You're a bully!");
 	this.say("Come here you");
	this.say("You're going to get what you deserve!");



//Challenge Name: Cowardly Taunt
 //PseudoCode for Cowardly Taunt
 	//run to ogres earshot
 		//move to {50, 16}
 			this.moveXY(50, 16);
 	//say something insulting
 			this.say("Over Here you big bully!");
 	//run for cover
 		//move to {69, 12}
 			this.moveXY(69, 12);
//Final Coad for "Cowardly Taunt"
	this.moveXY(50, 16);
 	this.say("Over Here you big bully!");
 	this.moveXY(69, 12);
 


 //Challenge Name: Commanding Followers
 //PseudoCode for Commanding Followers
 	//get soldiers to follow
 		//say, "follow me"
 			this.say("Follow me noble countrymen!");
 	//send soldiers to battle
 		//move to the battlefield
 			this.moveXY(61, 44);
 		//tell the soldiers to attack
 			this.say("attack the ogres!");
 //Final Code for "Commanding Followers"
 	this.say("Follow me noble countrymen!");
 	this.moveXY(61, 44);
 	this.say("attack the ogres!");
 			


//Challenge Name: Mobile Artillery
 //PseudoCode for Mobile Artillery
 	//position artillery towards first set of ogres
 			this.moveXY(39, 41);
 	//shoot ogres multiple times
 			this.attackXY(50,68);
			this.attackXY(48,55);
 	//position artillery towards second set of ogres
 			this.moveXY(50, 41);
 	//shoot second group of ogres
 			this.attackXY(67,55);
			this.attackXY(61,47);
 //Final Code for "Commanding Followers"
 	this.moveXY(39, 41);
 	this.attackXY(50,68);
	this.attackXY(48,55);
 	this.moveXY(50, 41);
 	this.attackXY(67,55);
	this.attackXY(61,47);
 	
//Release 3:
	//What is "this." referring to?
        //it is referring to the defined variable. Just like in English grammer we use "he/she" to avoid being redundant and also to be clear that we're referring to the prestated person, and not another individual with the same name, JavaScript uses "this." to call on already defined objects.
	//What does the "()" do in JavaScript?
        //The parentheses are used for execution. The first bracket signals the start of an expression that needs to be executed and the second bracket executes it. 
	//What is the point of semicolons?
        //the semicolon seperates statements that are on the same line.
 
// Reflection:
// Write your reflection here.

    //I've always been amazed at the complexity that must go into every little bit of video games. Today's challenge was an interesting foray if you will into just how complicated the world of gaming really is. While I've been exposed a bit to JavaScript basic navigating before through Karol the Robot, this was much better. I found it much easier to follow along when there was an actual storyline. It was pretty easy crusing until the Artillary challenge, where I had to play around with the best points to set the canon and target the enemies. I am still unclear if there was a specific way to go about doing that- I ended up doing quite a bit of trial and error before finally slaying all the ogres. It definitely helped to have the pseudocode, and I can see why this would be helpful in the future. However I found it annoying to organize the file in an easily readable way when using psuedo-code; I'd like to figure out a way to color comments or organize them better. Regardless of this type A desire, I felt like this challenge was great for getting my toes wet and I feel very confident in the learning competencies. 

