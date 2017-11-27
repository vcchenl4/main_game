var level4 = {
    preload: function(){
        preloadall();
    },
//***********************************************************************************************//
    create: function(){
		checkpoint = 'level4'
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
		ground2=createPlatform(25,50,'ground',1.98,16.5);
		ground3=createPlatform(25,60,'ground',11,8);
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
		
		//blackblock=createPlatform(1230,235,'ground',.315,16.5);
		//blackblock2=createPlatform(1350,235,'ground',.315,16.5);
		blackblock=createPlatform(1110,235,'ground',.315,16.5);
		blackblock2=createPlatform(990,235,'ground',.315,16.5);
		blackblock2=createPlatform(870,235,'ground',.315,16.5);
		blackblock2=createPlatform(750,235,'ground',.315,16.5);
		

		//(120 x differnce and 350 y differnce
		createGreenCollide(1110,585,'wallG',1,1);
		createBlueCollide(990,585,'wallB',1,1);
		
		createYellowCollide(1230,585,'wallY',1,1);
		createYellowCollide(1230,935,'wallY',1,1)
		createYellowCollide(1350,585,'wallY',1,1);
		createYellowCollide(1350,935,'wallY',1,1);
		createYellowCollide(1350,585,'wallY',1,1);
		createYellowCollide(1350,935,'wallY',1,1);
		createYellowCollide(1350,235,'wallY',1,1);
		createYellowCollide(1230,235,'wallY',1,1);
		

		blackblock=createPlatform(1470,585,'ground',.315,16.5);
		blackblock2=createPlatform(1470,935,'ground',.315,16.5);
		createPinkCollide(1470,235,'wallP',1,1)
		
		createGreenCollide(1590,235,'wallG',1,1);
		createGreenCollide(1590,585,'wallG',1,1);
		createGreenCollide(1590,935,'wallG',1,1);
		
		createGreenCollide(1710,235,'wallG',1,1);
		createGreenCollide(1710,585,'wallG',1,1);
		createGreenCollide(1710,935,'wallG',1,1);
			
		
		blackblock=createPlatform(1830,235,'ground',.315,16.5);
		blackblock2=createPlatform(1830,585,'ground',.315,16.5);
		createPinkCollide(1830,935,'wallP',1,1);
		
		blackblock=createPlatform(1950,235,'ground',.315,16.5);
		blackblock2=createPlatform(1950,585,'ground',.315,16.5);
		createPinkCollide(1950,935,'wallP',1,1);
		
		createBlueCollide(2070,235,'wallB',1,1);
		createBlueCollide(2070,585,'wallB',1,1);
		createBlueCollide(2070,935,'wallB',1,1);
		
		createBlueCollide(2190,235,'wallB',1,1);
		createBlueCollide(2190,585,'wallB',1,1);
		createBlueCollide(2190,935,'wallB',1,1);
		
		blackblock=createPlatform(2310,235,'ground',.315,16.5);
		createPinkCollide(2310,585,'wallP',1,1);
		blackblock2=createPlatform(2310,935,'ground',.315,16.5);
		
		blackblock=createPlatform(2430,235,'ground',.315,16.5);
		createPinkCollide(2430,585,'wallP',1,1);
		blackblock2=createPlatform(2430,935,'ground',.315,16.5);
		
		

		createPinkCollide(2550,935,'wallP',1,1);
		createPinkCollide(2550,585,'wallP',1,1);
		createPinkCollide(2550,235,'wallP',1,1);
		
		createPinkCollide(2670,935,'wallP',1,1);
		createPinkCollide(2670,585,'wallP',1,1);
		createPinkCollide(2670,235,'wallP',1,1);
		
		
		createYellowCollide(2790,235,'wallY',1,1);
		createYellowCollide(2790,585,'wallY',1,1);
		blackblock2=createPlatform(2790,935,'ground',.315,16.5);
		
		createYellowCollide(2910,235,'wallY',1,1);
		createYellowCollide(2910,585,'wallY',1,1);
		blackblock2=createPlatform(2910,935,'ground',.315,16.5);
		
		createBlueCollide(3030,235,'wallB',1,1);
		createBlueCollide(3030,585,'wallB',1,1);
		createGreenCollide(3030,935,'wallG',1,1);
		
		createBlueCollide(3150,235,'wallB',1,1);
		createBlueCollide(3150,585,'wallB',1,1);
		createGreenCollide(3150,935,'wallG',1,1);
		
		createGreenCollide(3270,235,'wallG',1,1);
		createGreenCollide(3270,585,'wallG',1,1);
		createGreenCollide(3270,935,'wallG',1,1);
		
		createGreenCollide(3390,235,'wallG',1,1);
		createGreenCollide(3390,585,'wallG',1,1);
		createGreenCollide(3390,935,'wallG',1,1);
		
		createBlueCollide(3510,235,'wallB',2,1);
		createYellowCollide(3750,235,'wallY',2,1);
		createPinkCollide(3750,585,'wallP',2,1);
		
		blackblock2=createPlatform(3510,935,'ground',.315,16.5);
		blackblock2=createPlatform(3630,935,'ground',.315,16.5);
		blackblock2=createPlatform(3510,585,'ground',.315,16.5);
		blackblock2=createPlatform(3630,585,'ground',.315,16.5);

		
        //add in the MC to the game
		mc = game.add.sprite(10,(bottom + 920) - 955 * .6  - 150,'stickB');
		//this.sprite.body.width = 110;
        guycolor='B';//10 x 920 y
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
        exitLevel4();
        //musicrestart();
		//enemyMove(E1,550,1450);
		//enemyMove(E2,2500,3000);
		//enemyMove(E3,2750,3250);
        
    }
}