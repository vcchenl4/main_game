var level4 = {
    preload: function(){
        preloadall();
    },
//***********************************************************************************************//
    create: function(){
        createrules(100,5/6, 'bgGray');
		game.world.setBounds(0,0,width * 5, bottom + 300);
		
		//creates the enemies

		

		
        createBlueCollide(300,240,'wallB',1,1)
        
        createYellowCollide(300,585,'wallY',1,1)
        createYellowCollide(300,930,'wallY',1,1)
        
        createBlueCollide(700,240,'wallB',1,1)
        
        createGreenCollide(700,585,'wallG',1,1)
        createPinkCollide(700,930,'wallP',1,1)
        
        
        createPinkCollide(820,580,'stepP',1,1)
        
        
        createPlatform(817,925,'testwall',5.8,.05)
        createPlatform(1165,580,'testwall',.5,2)
        
		E1 = createEnemy(900,830,'enemyY');
		E2 = createEnemy(900,1150,'enemyB');        
        
        createBlueCollide(4600,675,'stepB',1,1)
        createGreenCollide(5300,425,'stepG',1,1)
        createYellowCollide(4250,800,'stepY',1,1)

		
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
        addmenu()
		
    },
//***********************************************************************************************//
    update:function(){
        updateall();
        exitLevel2();
        musicrestart();
		enemyMove(E1,850,950);
		enemyMove(E2,850,950);
        
    }
}