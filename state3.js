
var state3 = {
    preload: function(){
		// character preloading
		preloadall();
    
    },
    create: function(){
		game.stage.backgroundColor = '#777777';
		/*
		//game.add.image(0,0,'bg');
        game.physics.startSystem(Phaser.Physics.ARCADE);
		//game.world.setBounds(0,0,1000,1000);
		blockB= game.add.group();
        blockY= game.add.group();
        blockG= game.add.group();
        blockP= game.add.group();
        blockB.enableBody=true;
        blockY.enableBody=true;
        blockG.enableBody=true;
        blockP.enableBody=true;
        
		
		block1 = blockB.create(250,922,'blockB');
        block1.body.immovable=true;
        block1.anchor.x=.5;
        block1.anchor.y=.5;
        
		block2 = blockG.create(450,708,'wallG');
        block2.anchor.x=.5;
        block2.anchor.y=.5
		block2.body.immovable=true;
        
        block3 = blockP.create(650,708,'wallP');
        block3.anchor.x=.5;
        block3.anchor.y=.5
		block3.body.immovable=true;
        
        block4 = blockY.create(850,708,'wallY');
        block4.anchor.x=.5;
        block4.anchor.y=.5;
        block4.body.immovable=true;
        
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		mc = game.add.sprite(0,700,'stickP');
        guycolor='P';
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        platforms = game.add.group();
        platforms.enableBody = true;
        
        var ground = platforms.create(0, bottom-20, 'ground');
		//var test_wall = platforms.create(700,0,'testwall');
        //test_wall.body.immovable = true;
		//test_wall.scale.setTo(1,10);
        
        
        ground.body.immovable = true;
		//for now we have complete ground coverage, we can change this later in the builds
		// ground width = 368 + height = 21
        ground.scale.setTo((width /368),1);
		
        mc.anchor.x=.5;
        mc.anchor.y= .5;
		addChangeEventListener();
        game.physics.arcade.enable(mc);
        mc.body.collideWorldBounds=true;
		mc.body.gravity.y = 400
		*/
		
    },
    update:function(){
		/*
        game.physics.arcade.collide(mc, platforms);
        passthrough();
		addMoveEventListener();
		
        passthrough();
	
		game.input.keyboard.onUpCallback = function(){
			mc.body.velocity.x = 0;
			mc.animations.stop();
			mc.frame = 0;
		}
	
		//changed directional inputs to an event listners
		//allows more simulatoneous inputs
		
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
