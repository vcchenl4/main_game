var level4 = {
    preload: function(){
        preloadall();
    },
//***********************************************************************************************//
    create: function(){
        createrules(100,5/6);
		game.world.setBounds(0,0,width * 5, bottom + 300);
		
		//creates the enemies
		//E1 = createEnemy(644,1100,'enemyP');
		//E2 = createEnemy(2467,240,'enemyB');
		

		
		//boxes
		createCrate(750,(bottom + 260) - 100,'largecrate');
		createCrate(1000,(bottom + 260) - 100,'largecrate');
		createCrate(2017,(bottom + 260) - 287,'crate');

		
		//last platform + door
		exit.create(4650,20,'exit');
			
		//creates the ground
        ground=createPlatform(0,bottom + 280,'ground',1000,1);
        
        
        //add in the MC to the game
		mc = game.add.sprite(0,(bottom + 910) - 955 * .6  - 150,'stickB');
        guycolor='B';
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        mc.anchor.x=.5;
        mc.anchor.y= .5;
		game.physics.arcade.enable(mc);
        mc.body.collideWorldBounds=true;
		mc.body.gravity.y = 400
        game.camera.follow(mc)
		
    },
//***********************************************************************************************//
    update:function(){
        updateall();
        exitLevel2();
        musicrestart();
		//enemyMove(E1,300,1450);
		//enemyMove(E2,2467,2967);
        
    }
}