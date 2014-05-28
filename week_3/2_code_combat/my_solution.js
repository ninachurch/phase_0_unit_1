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
 			



// Reflection:
// Write your reflection here.