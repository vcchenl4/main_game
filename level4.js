var level4 = {
    preload: function(){
        preloadall();
    },
//***********************************************************************************************//
    create: function(){
		checkpoint = 'level4'
        createrules(100,5/6, 'bgGray');
		game.world.setBounds(0,0,width * 5, bottom + 300);
		
		//creates the enemies

		

		
        createBlueCollide(300,240,'wallB',1,1)
        
        createYellowCollide(300,585,'wallY',1,1)
        createYellowCollide(300,930,'wallY',1,1)
        
        createBlueCollide(700,240,'wallB',1,1)
        createBlueCollide(700,-100,'wallB',1,1)
        createGreenCollide(700,585,'wallG',1,1)
        createPinkCollide(700,930,'wallP',1,1)
        
        
        createPinkCollide(820,580,'stepP',1,1)
        
        
        createPlatform(817,925,'testwall',5.8,.05)
        createPlatform(1165,580,'testwall',.5,2)
        createPlatform(0,580,'testwall',5,.05)
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
        
        
        
        createGreenCollide(2015,580,'wallG',1,1)
        createYellowCollide(2135,580,'wallY',1,1)
        createBlueCollide(2255,580,'wallB',1,1)
        createPlatform(2570,580,'testwall',2,.05)
        e4=createEnemy(2625,380,'enemyG')
        e4.scale.setTo(-1,1)
        e4.radar.scale.setTo(-1,1)
        
        
		
		//last platform + door
		exit.create(3300,980,'exit');
			
		//creates the ground
        ground=createPlatform(0,bottom + 280,'ground',1000,1);
        
        
        //add in the MC to the game
		mc = game.add.sprite(0,(bottom + 910) - 955 * .6  - 150,'stickB');
        //mc = game.add.sprite(2800,900,'stickB');
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
        exitLevel4();
        musicrestart();
		enemyMove(E1,850,950);
        enemyMove(enemy4,1400,2500);
        enemyMove(enemy3,1400,2500);
        enemyMove(enemy5,1400,2500);
        enemyMove(enemy7,900,2000);
        enemyMove(enemy8,1200,1800);
        enemyMove(enemy6,1400,2500);
		enemyMove(E2,850,950);
        
        
        if (e4.radar.body.x>2585){
            e4.radar.body.velocity.x=-20
        }
        else {
            e4.radar.body.velocity.x=0
        }
        
    }
}