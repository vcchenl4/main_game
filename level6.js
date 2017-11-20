
var level6 = {
    preload: function(){
        preloadall();
    },
//***********************************************************************************************//
    create: function(){
		checkpoint = 'level6'
        createrules(100,5/6, 'bgGray');
		game.world.setBounds(0,0,width * 5, bottom + 300);
		
		//creates the enemies

		

		
        createBlueCollide(300,215,'wallB',1,1)
        
        createYellowCollide(300,585,'wallY',1,1)
        createYellowCollide(300,930,'wallY',1,1)
        
        createBlueCollide(600,215,'wallB',1,1)
        //createBlueCollide(600,-100,'wallB',1,1)
        createGreenCollide(600,585,'wallG',1,1)
        createPinkCollide(600,930,'wallP',1,1)
        createBlueCollide(1069,580,'wallB',1,1)
        
        createPinkCollide(720,580,'stepP',1,1)
        
        
        createPlatform(600,925,'testwall',9.8,.05)
        createPlatform(300,563,'testwall',6.9,.05)
        createPlatform(1,0,'testwall',.01,5)
        
        
        createPlatform(1185,580,'testwall',.2,.815)
        
        createPinkCollide(1080,950,'wallP',1,1)
        createYellowCollide(1200,950,'wallY',1,1)
        
        
        createPlatform(0,1000,'testwall',5,.05)
		E1 = createEnemy(900,830,'enemyY');
		E2 = createEnemy(900,1150,'enemyB');        
        enemy3 = createEnemy(1400,1150,'enemyG')
        enemy4 = createEnemy(1700,1150,'enemyP')
        enemy5 = createEnemy(2000,1150,'enemyB')
        enemy6 = createEnemy(2000,1150,'enemyY')
        enemy6.turn=-1
        createGreenCollide(1197,580,'stepG',1,1)
        createBlueCollide(1547,580,'stepB',1,1)
        createPinkCollide(1897,580,'wallP',1,1)
        enemy7 = createEnemy(1200,400,'enemyY')
        enemy8 = createEnemy(1500,400,'enemyP')
        
        
        enemy3a = createEnemy(2400,1150,'enemyG')
        enemy4a = createEnemy(2700,1150,'enemyP')
        enemy5a = createEnemy(3000,1150,'enemyB')
        enemy6a = createEnemy(3000,1150,'enemyY')
        enemy6a.turn=-1
        
        
        createPinkCollide(2015,580,'wallP',1,1)
        createGreenCollide(2135,580,'wallG',1,1)
        createGreenCollide(2255,580,'wallG',1,1)
        createGreenCollide(2375,580,'wallG',1,1)
        createPlatform(2570,580,'testwall',2,.05)
        e4=createEnemy(2625,380,'enemyG')
        e4.scale.setTo(-1,1)
        e4.radar.scale.setTo(-1,1)
        
        ///////////////////////////////////this is the change
        
        createPlatform(3000,700,'testwall',5,.05)
        createPinkCollide(2800,220,'wallP',1,1)
        createPinkCollide(2800,580,'wallP',1,1)
		createBlueCollide(2940,220,'wallB',1,1)
        createBlueCollide(2940,580,'wallB',1,1)
		createGreenCollide(3080,220,'wallG',1,1)
        createGreenCollide(3080,580,'wallG',1,1)
		createYellowCollide(3220,220,'wallY',1,1)
        createYellowCollide(3220,580,'wallY',1,1)
        
        enemyA=createEnemy(3220,50,'enemyG')
        
		
		//last platform + door
		exit.create(3300,980,'exit');
			
		//creates the ground
        ground=createPlatform(0,bottom + 280,'ground',1000,1);
        
        
        //add in the MC to the game
		//mc = game.add.sprite(0,(bottom + 910) - 955 * .6  - 150,'stickB');
        mc = game.add.sprite(3100,500,'stickB');
        guycolor='B';
		mc.animations.add('jump',[8]);
		mc.animations.add('slide',[9]);
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
		mc.anchor.x=.5;
        mc.anchor.y= .5;
		game.physics.arcade.enable(mc);
        mc.body.collideWorldBounds=true;
		mc.body.gravity.y = 600
        mc.body.setSize(100,170,0,0);
        game.camera.follow(mc)
        addmenu()
		
    },
//***********************************************************************************************//
    update:function(){
        updateall();
        exitLevel4();
        musicrestart();
		enemyMove(E1,850,950);
        enemyMove(enemy4,1400,2500);
        enemyMove(enemy3,1400,2500);
        enemyMove(enemy5,1400,2500);
        enemyMove(enemy7,900,2400);
        enemyMove(enemy8,1200,1800);
        enemyMove(enemy6,1400,2500);
		enemyMove(E2,850,950);
        
        
        enemyMove(enemy4a,1600,3500);
        enemyMove(enemy3a,1600,3580);
        enemyMove(enemy5a,1600,3540);
        enemyMove(enemy6a,1600,3500);
        
        enemyMove(enemyA,3200,3240);
        
        
        if (e4.radar.body.x>2585){
            e4.radar.body.velocity.x=-20
        }
        else {
            e4.radar.body.velocity.x=0
        }
        
    }
}