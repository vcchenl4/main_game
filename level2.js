var level2 = {
    preload: function(){
        preloadall();
    },
//***********************************************************************************************//
    create: function(){
		checkpoint = 'level2'
        createrules(100,5/6,"bgGray");
		game.world.setBounds(0,0,width * 5, bottom + 300);
		endWall=createPlatform(6000,0,'ground',100,100);
		
		//creates the ground
        ground=createPlatform(0,bottom + 280,'ground',1000,1);
		
		//creates the enemies
		E1 = createEnemy(1000,930,'enemyP');
		EA= createEnemy(700,935,'enemyG');
		EA.scale.x *= -1;
		EA.radar.scale.x *=-1;
		EB= createEnemy(2100,935,'enemyY');
		E2 = createEnemy(2500,1120,'enemyB');
		E3 = createEnemy(3100,1120,'enemyG');
		
		//set of blocks 1
		createBlueCollide(650,1025,'stepB',0.73,2.2);
		createYellowCollide(905,1025,'stepY',0.73,2.2);
		createYellowCollide(1160,1025,'stepY',0.73,2.2);
		createYellowCollide(1415,1025,'stepY',0.73,2.2);
		createYellowCollide(1670,1025,'stepY',0.73,2.2);
		createGreenCollide(1925,1025,'stepG',0.73,2.2);
	
		// create color floating platforms
		createPinkCollide(2400,750,'stepP',0.35,1);
		createGreenCollide(2600,550,'stepG',0.35,1);
		createBlueCollide(2800,750,'stepB',0.35,1);
		createYellowCollide(3000,550,'stepY',0.35,1);
		
		//first wall of colors
		createGreenCollide(3400,1040,'wallG',1,.70);
		createBlueCollide(3400,795,'wallB',1,.70);
		createPinkCollide(3400,500,'wallP',1,.70);
		createYellowCollide(3400,255,'wallY',1,.70);
		wall3=createPlatform(3360,bottom-500,'ground',.1,50);
		
		// second wall of colors
		createGreenCollide(3800,255,'wallG',1,.70);
		createYellowCollide(3800,500,'wallY',1,.70);		
		createPinkCollide(3800,795,'wallP',1,.70);
		createBlueCollide(3800,1040,'wallB',1,.70);
		createYellowCollide(3400,743,'wallY',4.5,.15);
		wall3=createPlatform(3918,bottom-1010,'ground',.1,50);
		
		
		//ground 1
		platform=createPlatform(3950,bottom + 8.30,'ground',2.8,1.5);
		createGreenCollide(4982,1008.5,'wallG',1.9,.09);
		EC= createEnemy(4400,1155,'enemyG');
		EC.scale.x *= -1;
		EC.radar.scale.x *=-1;
		
		//ground 2
		platform=createPlatform(4175,bottom - 258.30,'ground',2.8,1.5);
		createPinkCollide(3956,742,'wallP',1.9,.09);
		E4 = createEnemy(4400,830,'enemyY');
		ED= createEnemy(4800,830,'enemyB');
		
		//ground 3
		platform=createPlatform(3950,bottom -558.30,'ground',1.2,1.5);
		createYellowCollide(4391,442,'wallY',3.2,.09);
		platform2=createPlatform(4758,bottom -558.30,'ground',1.2,1.5);
		E5 = createEnemy(4450,630,'enemyB');
		
		
		//last platform + door
		wallexitx=createPlatform(5200,bottom - 550,'ground',.10,40);		
		wallexity=createPlatform(5200,bottom - 557,'ground',1.53,1.5);
		
		//2nd to last platform and enemy before exit
		platform=createPlatform(5550,bottom - 130,'ground',.60,1.5);
		EE = createEnemy(5700,750,'enemyG');
		
		//last platform and enemy before exit
		platform2=createPlatform(5550,bottom + 30,'ground',.60,1.5);
		EF = createEnemy(5700,1100,'enemyB');
		
		createBlueCollide(5200,102,'wallB',1,1);
		createPinkCollide(5500,102,'wallP',1,1);
		createYellowCollide(5765,102,'wallY',1,1);
		createYellowCollide(5885,102,'wallY',1,1);
		
		exit.create(5250,950,'exit');
        
        
        //add in the MC to the game
		mc = game.add.sprite(100,(bottom + 920) - 955 * .6  - 150,'stickB');
        guycolor='B';
		mc.animations.add('jump',[8]);
		mc.animations.add('slide',[9]);
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,])
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
        //musicrestart();
        exitLevel2();
        //musicrestart();
		enemyMove(E1,1100,1750);
		//enemyMove(E1A,700,700)
		enemyMove(E2,2400,2700);
		enemyMove(E3,2900,3100);
		enemyMove(E4,4300,4700);
		enemyMove(E5,4200,4900);
		
        enemyStill(EA)
		//code for green guard
		if (EA.radar.body.x>680){
            EA.radar.body.velocity.x=-550
        }
        else {
            EA.radar.body.velocity.x=0
        }
        
        if (EA.radar.body.y>770){
            EA.radar.body.velocity.y=-1000
        }
        else {
            EA.radar.body.velocity.y=0
        }

		
		//code for yellow guard
		if (EB.radar.body.x>2130){
            EB.radar.body.velocity.x=-340
        }
        else {
            EB.radar.body.velocity.x=0
        }
        
        if (EB.radar.body.y>770){
            EB.radar.body.velocity.y=-340
        }
        else {
            EB.radar.body.velocity.y=0
        }
		//code for green guard 2
				//code for yellow guard
		if (EC.radar.body.x>4390){
            EC.radar.body.velocity.x=-200
        }
        else {
            EC.radar.body.velocity.x=0
        }
        
        if (EC.radar.body.y>1025){
            EC.radar.body.velocity.y=-200
        }
        else {
            EC.radar.body.velocity.y=0
        }
		
		//code for green guard 2
		//code for yellow guard
		if (ED.radar.body.x>5815){
            ED.radar.body.velocity.x=-200
        }
        else {
            ED.radar.body.velocity.x=0
        }
        
        if (ED.radar.body.y>2505){
            ED.radar.body.velocity.y=-20
        }
        else {
            ED.radar.body.velocity.y=0
        }
		// code for blue guard
		if (EE.radar.body.x>5715){
            EE.radar.body.velocity.x=-200
        }
        else {
            EE.radar.body.velocity.x=0
        }
        
        if (EE.radar.body.y>610){
            EE.radar.body.velocity.y=-200
        }
        else {
            EE.radar.body.velocity.y=0
        }
		
				// code for blue guard
		if (EF.radar.body.x>5715){
            EF.radar.body.velocity.x=-200
        }
        else {
            EF.radar.body.velocity.x=0
        }
        
        if (EF.radar.body.y>1200){
            EF.radar.body.velocity.y=-200
        }
        else {
            EF.radar.body.velocity.y=0
        }
		
        
    }
}