var level3 = {
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
		E1 = createEnemy(500,210,'enemyP');
		E2 = createEnemy(475,1100,'enemyG');
		E3 = createEnemy(800,1100,'enemyB');
		E3.scale.setTo(-1,1)
		E3.radar.scale.setTo(-1,1)

		//last platform + door
		exit.create(3850,950,'exit');
			
		//creates the ground
        ground=createPlatform(0,bottom + 280,'ground',1000,1);
        
        ///////////////////All Level 3 code/////////////////////////
		
		
		createGreenCollide(25,400,'wallG',1,1);
		createPinkCollide(25,750,'wallP',1,1);
		createGreenCollide(425,400,'wallG',1,1);
		createPinkCollide(425,750,'wallP',1,1);
		ground2=createPlatform(25,350,'ground',1.4,2.2);
		
		createBlueCollide(750,400,'wallB',1,1);
		createPinkCollide(750,750,'wallP',1,1);
		createBlueCollide(1150,400,'wallB',1,1);
		createPinkCollide(1150,750,'wallP',1,1);
		
		createPinkCollide(1550,400,'wallP',1,1);
		createYellowCollide(1550,750,'wallY',1,1);
		createPinkCollide(1950,400,'wallP',1,1);
		createYellowCollide(1950,750,'wallY',1,1);
		
		
		
		
        //add in the MC to the game
		mc = game.add.sprite(10,(bottom + 920) - 955 * .6  - 150,'stickB');
        guycolor='B';
		mc.animations.add('jump',[8]);
		mc.animations.add('slide',[9]);
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
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
        musicrestart();
        exitLevel3();
        //musicrestart();
		//enemyMove(E1,550,1450);
		//enemyMove(E2,2500,3000);
		//enemyMove(E3,2750,3250);
        
    }

	
}