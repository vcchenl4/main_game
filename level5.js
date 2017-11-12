var level5 = {
    preload: function(){
        preloadall();
    },
//***********************************************************************************************//
    create: function(){
		checkpoint = 'level3'
        createrules(100,7/6,"bgGray");
		game.world.setBounds(0,0,width * 5, bottom + 300);
		endWall=createPlatform(4000,0,'ground',100,100);
		endWall2=createPlatform(1,100,'ground',.05,100);
		
		//creates the enemies
		//E1 = createEnemy(700,930,'enemyP');
		//E2 = createEnemy(2467,500,'enemyB');
		//E3 = createEnemy(2467,500,'enemyG');
		

		//last platform + door
		exit.create(3850,950,'exit');
			
		//creates the ground
        ground=createPlatform(0,bottom + 280,'ground',1000,1);
		//makes a ground
		ground2=createPlatform(25,350,'ground',1.4,2.2);
		blackblock=createPlatform(350,800,'ground',.315,16.5);
		blackblock2=createPlatform(350,935,'ground',.315,16.5);
        
        ///////////////////All Level 3 code/////////////////////////
		
		
		createYellowCollide(25,400,'wallY',1,1);
		createYellowCollide(145,400,'wallY',1,1);
		createYellowCollide(265,400,'wallY',1,1);
		createGreenCollide(425,400,'wallG',1,1);
		createGreenCollide(545,400,'wallG',1,1);
		
		createPinkCollide(1110,935,'wallP',1,1);
		createPinkCollide(750,935,'wallP',1,1);
		createPinkCollide(870,935,'wallP',1,1);
		createPinkCollide(990,935,'wallP',1,1);
		
		createGreenCollide(750,585,'wallG',1,1);
		createBlueCollide(870,585,'wallB',1,1);
		createBlueCollide(990,585,'wallB',1,1);
		createGreenCollide(1110,585,'wallG',1,1);

		//(120 x differnce and 350 y differnce
		createYellowCollide(1230,585,'wallY',1,1);
		createYellowCollide(1230,935,'wallY',1,1);
		createGreenCollide(1110,585,'wallG',1,1);
		createBlueCollide(990,585,'wallB',1,1);

		
		


		
		//createBlueCollide(750,400,'wallB',1,1);
		//createBlueCollide(1050,400,'wallB',1,1);

		
        //add in the MC to the game
		mc = game.add.sprite(10,(bottom + 920) - 955 * .6  - 150,'stickB');
        guycolor='B';
		mc.animations.add('jump',[8]);
		mc.animations.add('slide',[9]);
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,])
        mc.anchor.x=.5;
        mc.anchor.y= .5;
		game.physics.arcade.enable(mc);
        mc.body.collideWorldBounds=true;
		mc.body.gravity.y = 400		
        game.camera.follow(mc)
		addmenu()
		
    },
//***********************************************************************************************//
    update:function(){
        updateall();
        //exitLevel3();
        //musicrestart();
		//enemyMove(E1,550,1450);
		//enemyMove(E2,2500,3000);
		//enemyMove(E3,2750,3250);
        
    }
}