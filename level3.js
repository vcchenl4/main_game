 var level3 = {
    preload: function(){
        preloadall();
    },
//***********************************************************************************************//
    create: function(){
		//intalization
		checkpoint = 'level3'
        createrules(100,5/6,"background");
		game.world.setBounds(0,0,width * 5, bottom + 300);
		endWall=createPlatform(4000,0,'ground',100,100);
		endWall2=createPlatform(1,100,'ground',.05,100);
		//creates the ground
        ground=createPlatform(0,bottom + 280,'ground',1000,1);
        
        ///////////////////All Level 3 code/////////////////////////
		//1) 1st set of walls
		createPlatform(20,415,'greywall',9.44,.1);
		var hold = object.create(425,460,'sml_rack');
		hold.scale.setTo(3/4,5/6);
		createPlatform(425,460,'invis',160,520);
		e1 = createEnemy(427,244,'enemyY');
		
		//2) 1stcolored wall
		createBlueCollide(910,890,'wallB',1,1.2);
		createYellowCollide(910,600,'wallY',1,0.82);
		createPinkCollide(910,410,'wallP',1,0.55);
		createGreenCollide(910,125,'wallG',1,0.825);
		
		//3)
		createPlatform(1026,500,'rack',1,0.785);
		createPlatform(1245,500,'rack',1,0.785);
		
		//4) top observation platform
		createPlatform(1740,350,'greywall',23,.1);
		createPinkCollide(1800,100,'wallP',1,.8);
		createYellowCollide(1950,100,'wallY',1,.8);
		e2 = createEnemy(2150,180,'enemyG');
		e3 = createEnemy(2150,180,'enemyB')
		createBlueCollide(2890,100,'wallB',1,.8);

		//5) first rack after obs platform
		createPlatform(3450,100,'rack',1,.6)
		hold = object.create(3450,690,'sml_rack')
		hold.scale.setTo(1,.6)
		createPlatform(3450,690,'invis',200,370)
		
		//6)
		createGreenCollide(2300,700,'stepG',1.38,.39)
		createYellowCollide(2780,700,'stepY',1,.39)
		createBlueCollide(3127,700,'stepB',.95,.39)
		e4 = createEnemy(2400,500,'enemyP')
		
		
		//7)
		createPlatform(1900,980,'greywall',25.9,.1)
		e5 = createEnemy(3137,750,'enemyP');
		e6 = createEnemy(2060,750,'enemyB');
		
		e7 = createEnemy(1550,700,'enemyP');
		e8 = createEnemy(1900,900,'enemyY');
		exit.create(3800,955,'exit');

        //add in the MC to the game
		mc = game.add.sprite(100,(bottom + 920) - 955 * .6  - 150,'stickB');
		//mc = game.add.sprite(2860,900,'stickB')
        guycolor='B';
		mc.animations.add('jump',[8]);
		mc.animations.add('slide',[9]);
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
		mc.anchor.x=.5;
        mc.anchor.y= .5;
		game.physics.arcade.enable(mc);
        mc.body.collideWorldBounds=true;
		mc.body.gravity.y = 600		
        game.camera.follow(mc)
		mc.body.setSize(100,170,0,0);
		addmenu()
		
    },
//***********************************************************************************************//
    update:function(){
        updateall();
		exitLevel3();
		enemyMove(e1,350,440);
		enemyMove(e2,2150,2800);
		enemyMove(e3,2150,2400);
		enemyMove(e4,2400,3200);
		enemyMove(e5,3137,3300);
		enemyMove(e6,2060,2750);
		enemyMove(e7,1550,2100)
		enemyMove(e8,1550,2100)
		
		exitLevel3()
        //musicrestart();
        //musicrestart();
    }	
}
