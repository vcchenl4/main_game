var level2 = {
    preload: function(){
        preloadall();
    },
//***********************************************************************************************//
    create: function(){
		checkpoint = 'level2'
        createrules(100,5/6,"bgGray");
		game.world.setBounds(0,0,width * 5, bottom + 300);
		endWall=createPlatform(4000,0,'ground',100,100);
		
		//creates the enemies
		E1 = createEnemy(700,930,'enemyP');
		E2 = createEnemy(2467,500,'enemyB');
		E3 = createEnemy(2467,500,'enemyG');
		

		
		//boxes
		createCrate(750,(bottom + 260) - 100,'largecrate');
		createCrate(1000,(bottom + 260) - 100,'largecrate');
		createCrate(1250,(bottom + 260) - 100,'largecrate');
		createCrate(1500,(bottom + 260) - 100,'largecrate');
		createCrate(1750,(bottom + 260) - 100,'largecrate');
		createCrate(2050,(bottom + 260) - 287,'crate');
		createPinkCollide(2200,750,'stepP',0.35,1);
		createGreenCollide(2400,550,'stepG',0.35,1);
		createBlueCollide(2600,750,'stepB',0.35,1);
		createYellowCollide(2800,550,'stepY',0.35,1);
		
		createGreenCollide(3600,950,'wallG',1,.5);
		createBlueCollide(3600,750,'wallB',1,.5);
		createYellowCollide(3600,550,'wallY',1,.5);
		createPinkCollide(3600,350,'wallP',1,.5);


		
		//last platform + door
		exit.create(0,-50,'exit');
			
		//creates the ground
        ground=createPlatform(0,bottom + 280,'ground',1000,1);
		ground2=createPlatform(0,250,'ground',10,2.5);
        
        
        //add in the MC to the game
		mc = game.add.sprite(0,(bottom + 920) - 955 * .6  - 150,'stickB');
        guycolor='B';
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        mc.anchor.x=.5;
        mc.anchor.y= .5;
		game.physics.arcade.enable(mc);
        mc.body.collideWorldBounds=true;
		mc.body.gravity.y = 600
        game.camera.follow(mc)
		addmenu()
		
    },
//***********************************************************************************************//
    update:function(){
        updateall();
        musicrestart();
        exitLevel2();
        //musicrestart();
		enemyMove(E1,550,1450);
		enemyMove(E2,2500,3000);
		enemyMove(E3,2750,3250);
        
    }
}