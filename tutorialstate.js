var tutorialstate = {
    preload: function(){
        preloadall();
    },
//***********************************************************************************************//
    create: function(){
		checkpoint = 'tutorialstate'
        createrules(undefined,undefined, 'background');
        
		exit1 = exit.create(5651,50,'exit');
        exit1.body.immovable=true;
		
		createCrate(300,920,'crate');
        
		createCrate(675,920,'crate');
		createCrate(800,920,'crate');
        createCrate(926,920,'crate');
		createCrate(800,795,'crate');  
		
        createCrate(1400,860,'largecrate');
		createCrate(1462,673,'crate');
        createCrate(1652,860,'largecrate');
		createCrate(1652,613,'largecrate');
        
		var walkrack1=object.create(1777,4,'walkrack');
        walkrack1.scale.setTo(.98,.98);
		//top invis wall
		createPlatform(1777,-190,'testwall',.0001,1)
        createPlatform(1777,488,'testwall',3.5,.0001)
		createPlatform(1777,260,'testwall',3.5,.0001)
        createPlatform(1988,488,'testwall',.0001,3)   
        createPlatform(1988,-190,'testwall',.0001,1)
        
        createPlatform(2277,260,'rack',.98,.98)
		createPlatform(2485,260,'rack',.98,.98)
		createPlatform(2980,485,'rack',.60,.68)
		
		createPlatform(2975,466,'testwall',18.8,.04)
        
        createPinkCollide(3050,119,'wallP',1,1)
        createBlueCollide(3360,119,'wallB',1,1)
        createGreenCollide(3670,119,'wallG',1,1)
        createYellowCollide(3983,119,'wallY',1,1)
        
        createPinkCollide(4950,550,'stepP',1,1)
        createBlueCollide(4600,675,'stepB',1,1)
        createGreenCollide(5300,425,'stepG',1,1)
        createYellowCollide(4250,800,'stepY',1,1)

        createCrate(4124,920,'crate')

        createPlatform(5650,360,'testwall',3,3)
        		
        createPlatform(0,bottom-20,'ground',1000,1)
        
		mc = game.add.sprite(0,800,'stickB');
        guycolor='P';
		mc.animations.add('jump',[8]);
		mc.animations.add('slide',[9]);
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        mc.anchor.x=.5;
        mc.anchor.y= .5;
		game.physics.arcade.enable(mc);
        mc.body.collideWorldBounds=true;
		mc.body.gravity.y =600;
        game.camera.follow(mc);
        //music.play('',0,1,true);     
        addmenu();
		
    },
//***********************************************************************************************//
    update:function(){
        updateall();
        exitTutorialstate();
        //musicrestart();
        
		
	}
}
