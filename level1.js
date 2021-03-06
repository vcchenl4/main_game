var level1 = {
    preload: function(){
        preloadall();
    },
//***********************************************************************************************//
    create: function(){
		checkpoint = "level1"
        createrules(100,5/6,'background');
		game.world.setBounds(0,0,width * 5, bottom + 300);
		
		//creates the enemies
		E1 = createEnemy(644,1100,'enemyG');
		E2 = createEnemy(2467,240,'enemyY');
		
		//create racks --> platforms --> crates
		//1st 2 racks
        createPlatform(0,(bottom + 260) - 955 * .6,'rack',0.6,0.6);
		var hold = object.create(500,(bottom + 260) - 955 * .6,'sml_rack');
		hold.scale.setTo(0.75,0.6);
		createPlatform(500,(bottom + 260) - 955 * .6, 'invis',215 * .75, (955-320) * .6);
		
		//2nd group of racks
		hold = object.create(1050,(bottom + 260) - 955 * .6,'sml_rack');
		hold.scale.setTo(0.75,0.6);
		createPlatform(1050,(bottom + 260) - 955 * .6, 'invis',215 * .75,(955-320) * .6);
		
		hold = object.create(1050 + 215 * 0.75,(bottom + 260) - 955 * .6,'sml_rack');
		hold.scale.setTo(0.75,0.6);
		createPlatform(1050 + 215 * 0.75,(bottom + 260) - 955 * .6, 'invis',215 * .75,(955-320) * .6);
		
		//boxes
		createCrate(1955,(bottom + 260) - 100,'largecrate');
		createCrate(2017,(bottom + 260) - 287,'crate');
		createCrate(2205,(bottom + 260) - 100,'largecrate');
		createCrate(2205,(bottom + 260) - 350,'largecrate');
		
		//3rd group of racks
		createPlatform(2335,(bottom + 260) - 955 * .6,'rack',0.75,0.6);
		createPlatform(2335 + 215 * .75,(bottom + 260) - 955 * .6,'rack',0.75,0.6);
		createPlatform(2335 + 215 * 2 * .75,(bottom + 260) - 955 * .6,'rack',0.75,0.6);
		createPlatform(2335 + 215 * 3 * .75,(bottom + 260) - 955 * .6,'rack',0.75,0.6);
		createPlatform(2335 + 215 * 4 * .75,(bottom + 260) - 955 * .6,'rack',0.75,0.6);
		createPlatform(2335 + 215 * 5 * .75,(bottom + 260) - 955 * .6,'rack',0.75,0.6);
		
		//guard platform + guard
		createCrate(2460 + 215 * 5 * .75 ,(bottom + 260) - 635,'crate')
		//createPlatform(2275 + 215 * .75, 420,'testwall',10,.1)
		createBlueCollide(3900,300,'stepB',1,1);
		createYellowCollide(3300,425,'stepY',1,1);
		
		//last platform + door
		createPlatform(3600,(bottom + 260) - 955 * .75,'rack',0.75,0.75);
		createPlatform(4246,300,'testwall',15,.25);
        createPlatform(3770,500,'testwall',10,20);
        createPlatform(4246,300,'testwall',5,10);
		exit.create(4650,20,'exit');
		
		
		

		//creates the ground
        ground=createPlatform(0,bottom + 280,'ground',1000,1);
        
        
        
		mc = game.add.sprite(0,(bottom + 280) - 955 * .6  - 150,'stickB');
        guycolor='B';
		
		//make sure the animation adds are in this order or the character starts as the 1st frame of that animation
		mc.animations.add('jump',[8]);
		mc.animations.add('slide',[9]);
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        mc.anchor.x=.5;
        mc.anchor.y= .5;
		game.physics.arcade.enable(mc);
        mc.body.collideWorldBounds=true;
        game.camera.follow(mc)
		mc.body.gravity.y = 600
		mc.body.setSize(100,170,0,0);
		addmenu();
    },
//***********************************************************************************************//
    update:function(){
        updateall();
		if (walltouchL == true){
			console.log(walltouchR,walltouchL)}
		exitLevel1();
        musicrestart();
		enemyMove(E1,300,1450);
		enemyMove(E2,2467,2967);
        
    }
}

