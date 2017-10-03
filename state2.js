var mc = {} , blockB, blockG, blockP, blockY, platforms, guycolor, block1,block2, block3, block4, ground, wall1, wall2;


//***********************************************************************************************//
var width = 2000 
var bottom = 1000
var state2 = {
    preload: function(){
		// character preloading
		game.load.spritesheet('stickB', 'assets/Stickman Neon Blue sprite_3.png', 160,180,8);
		game.load.spritesheet('stickG', 'assets/Stickman Neon Green sprite_3.png', 160,180,8);
		game.load.spritesheet('stickP', 'assets/Stickman Neon Pink sprite_3.png', 160,180,8);
		game.load.spritesheet('stickY', 'assets/Stickman Neon Yellow sprite_3.png', 160,180,8);
	
		//enviroment preloading
		
		game.load.image('ground','assets/ground.png');
		game.load.image('testwall','assets/testwall.png');
		game.load.image('exit','assets/door.png');
		
		game.load.image('blockB', 'assets/Neon Block_3_Blue.png');
		game.load.image('blockG', 'assets/Neon Block_3_Green.png');
		game.load.image('blockP', 'assets/Neon_Block_3_Pink.png');
		game.load.image('blockY', 'assets/Neon Block_3_Yellow.png');
    
    
		game.load.image('wallG', 'assets/Neon_Wall_3_Green.png');
		game.load.image('wallP', 'assets/Neon_Wall_3_Pink.png');
		game.load.image('wallY', 'assets/Neon_Wall_3_Yellow.png');
        game.load.image('wallB', 'assets/Neon_Wall_3_Blue.png');
    
    },
//***********************************************************************************************//
    create: function(){
		game.stage.backgroundColor = '#777777';
		//game.add.image(0,0,'bg');
        game.physics.startSystem(Phaser.Physics.ARCADE);
		//game.world.setBounds(0,0,1000,1000);
		keydef()

		
		exit= game.add.group();
		blockB= game.add.group();
        blockY= game.add.group();
        blockG= game.add.group();
        blockP= game.add.group();
		
		exit.enableBody=true;
        blockB.enableBody=true;
        blockY.enableBody=true;
        blockG.enableBody=true;
        blockP.enableBody=true;
		
		exit1 = exit.create(1400,175,'exit');
        exit1.body.immovable=true;
        exit1.anchor.x=.5;
        exit1.anchor.y=.5;
        
		
		block1 = blockB.create(250,922,'blockB');
        block1.body.immovable=true;
        block1.anchor.x=.5;
        block1.anchor.y=.5;
        
		block2 = blockG.create(450,805,'wallG');
        block2.anchor.x=.5;
        block2.anchor.y=.5
		block2.body.immovable=true;
        
        block3 = blockP.create(650,805,'wallP');
        block3.anchor.x=.5;
        block3.anchor.y=.5
		block3.body.immovable=true;
        
        block4 = blockY.create(850,805,'wallY');
        block4.anchor.x=.5;
        block4.anchor.y=.5;
        block4.body.immovable=true;
        
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		mc = game.add.sprite(0,700,'stickP');
        guycolor='P';
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        platforms = game.add.group();
        platforms.enableBody = true;
        
        ground = platforms.create(0, bottom-20, 'ground');
		
        ground.body.immovable = true;
		
        wall1=platforms.create(1300,310,'testwall');
        wall1.body.immovable=true;
        wall1.scale.setTo(5,1.5);
        
        wall2=platforms.create(792,-46,'testwall');
        wall2.body.immovable=true;
        wall2.scale.setTo(1.96,1.5);
        //for now we have complete ground coverage, we can change this later in the builds
		//var test_wall = platforms.create(700,0,'testwall');
        //test_wall.body.immovable = true;
		//test_wall.scale.setTo(1,10);
        // ground width = 368 + height = 21
        ground.scale.setTo((width /368),1);
		
        mc.anchor.x=.5;
        mc.anchor.y= .5;
		addChangeEventListener();
        game.physics.arcade.enable(mc);
        mc.body.collideWorldBounds=true;
		mc.body.gravity.y = 400
		
    },
//***********************************************************************************************//
    update:function(){
        
        game.physics.arcade.collide(mc, platforms);
        passthrough();
		addMoveEventListener();
		musicrestart();
		exitState2();
        passthrough();
		
		if(mc.body.touching.right == true){
			walltouchR = true;
		}
		else if(mc.body.touching.left == true){
			walltouchL = true;
		}
		//changed directional inputs to an event listners
		//allows more simulatoneous inputs
		/*
		if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			mc.body.velocity.x=250;
			mc.scale.setTo(1,1);
			mc.animations.play('walk',5,true);
            
        }
		else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			mc.body.velocity.x=-250;
			mc.scale.setTo(-1,1);
			mc.animations.play('walk',5,true);
		}
        else if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && mc.body.touching.down){
            mc.body.velocity.y -= 300;
        }
		
		else{
            mc.body.velocity.x=0;
			mc.animations.stop();
			mc.frame = 0;
		}*/
    }
}

