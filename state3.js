
//***********************************************************************************************//

var state3 = {
    preload: function(){
        preloadall();
    },
//***********************************************************************************************//
    create: function(){
        createrules();
        
		exit1 = exit.create(1400,175,'exit');
        exit1.body.immovable=true;
        exit1.anchor.x=.5;
        exit1.anchor.y=.5;
        
		
		block1 = blockB.create(180,922,'stepB');
        block1.body.immovable=true;
        block1.anchor.x=.5;
        block1.anchor.y=.5;
        
        
		block2 = blockG.create(528,922,'stepG');
        block2.anchor.x=.5;
        block2.anchor.y=.5
		block2.body.immovable=true;
        
        
        
        block3 = blockP.create(881,922,'stepP');
        block3.anchor.x=.5;
        block3.anchor.y=.5
		block3.body.immovable=true;
        
        block4 = blockY.create(1230,922,'stepY');
        block4.anchor.x=.5;
        block4.anchor.y=.5;
        block4.body.immovable=true;
        
		
        mc = game.add.sprite(0,700,'stickP');
        guycolor='P';
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        
        ground = platforms.create(0, bottom-20, 'ground');
		
        ground.body.immovable = true;
		
        wall1=platforms.create(1560,300,'testwall');
        wall1.body.immovable=true;
        
        //for now we have complete ground coverage, we can change this later in the builds
		//var test_wall = platforms.create(700,0,'testwall');
        //test_wall.body.immovable = true;
		//test_wall.scale.setTo(1,10);
        // ground width = 368 + height = 21
        ground.scale.setTo((width /368),1);
		
        mc.anchor.x=.5;
        mc.anchor.y= .5;
		game.physics.arcade.enable(mc);
        mc.body.collideWorldBounds=true;
		mc.body.gravity.y = 400
        
        game.camera.follow(mc);
		
    },
//***********************************************************************************************//
    update:function(){
        updateall();
        exitState2();
        //musicrestart();
        
		
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

