
var tutorialstate = {
    preload: function(){
        preloadall();
    },
//***********************************************************************************************//
    create: function(){
        createrules();
        
		exit1 = exit.create(5651,0,'exit');
        exit1.body.immovable=true;
        game.add.text(5713, 100, 'EXIT', { fontSize: '100px', fill: '#000' })
        
        
		
		var crate1 = platforms.create(250,920,'crate');
        crate1.body.immovable=true;
        crate1.anchor.x=.5;
        crate1.anchor.y=.5;
        
		var crate2 = platforms.create(800,920,'crate');
        crate2.anchor.x=.5;
        crate2.anchor.y=.5
		crate2.body.immovable=true;
        
        var crate3 = platforms.create(1562,673,'crate');
        crate3.anchor.x=.5;
        crate3.anchor.y=.5
		crate3.body.immovable=true;
        
        var crate5 = platforms.create(675,920,'crate');
        crate5.anchor.x=.5;
        crate5.anchor.y=.5
		crate5.body.immovable=true;
        
        var crate6 = platforms.create(926,920,'crate');
        crate6.anchor.x=.5;
        crate6.anchor.y=.5
		crate6.body.immovable=true;
        
        var crate4 = platforms.create(800,795,'crate');
        crate4.anchor.x=.5;
        crate4.anchor.y=.5;
        crate4.body.immovable=true;

        var crate7 = platforms.create(1500,860,'largecrate');
        crate7.anchor.x=.5;
        crate7.anchor.y=.5;
        crate7.body.immovable=true;
        
        var crate8 = platforms.create(1752,860,'largecrate');
        crate8.anchor.x=.5;
        crate8.anchor.y=.5;
        crate8.body.immovable=true;
        
        var crate9 = platforms.create(1752,613,'largecrate');
        crate9.anchor.x=.5;
        crate9.anchor.y=.5;
        crate9.body.immovable=true;
        
        var crateA = platforms.create(2850,860,'largecrate');
        crateA.anchor.x=.5;
        crateA.anchor.y=.5;
        crateA.body.immovable=true;
        
        var crateB = platforms.create(2850,613,'largecrate');
        crateB.anchor.x=.5;
        crateB.anchor.y=.5;
        crateB.body.immovable=true;
        
        var crateC = platforms.create(2850,237,'largecrate');
        crateC.anchor.x=.5;
        crateC.anchor.y-.5;
        crateC.body.immovable=true;
        
        var blockrack1=platforms.create(2400,260,'rack');
        blockrack1.scale.setTo(.98,.98);
        blockrack1.body.immovable=true;
        

        
        var wall2=backwall.create(1900,488,'testwall');
        wall2.scale.setTo(3.5,.0001);
        wall2.body.immovable=true;
        var wall2=backwall.create(1900,260,'testwall');
        wall2.scale.setTo(3.5,.0001);
        wall2.body.immovable=true;
        
        var wall3=backwall.create(2111,488,'testwall');
        wall3.scale.setTo(.0001,3);
        wall3.body.immovable=true;
        
        var wall4=backwall.create(2111,-190,'testwall');
        wall4.scale.setTo(.0001,1);
        wall4.body.immovable=true;
        var wall4=backwall.create(1900,-190,'testwall');
        wall4.scale.setTo(.0001,1);
        wall4.body.immovable=true; 
		
        var walkrack1=object.create(1900,4,'walkrack');
        walkrack1.scale.setTo(.98,.98);
        
		mc = game.add.sprite(0,800,'stickP');
        guycolor='P';
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        
        ground = platforms.create(0, bottom-20, 'ground');
		
        ground.body.immovable = true;
		
        wall1=platforms.create(2975,466,'testwall');
        wall1.body.immovable=true;
        wall1.scale.setTo(18.8,.04);
        
        wall1=blockP.create(3050,119,'wallP');
        wall1.body.immovable=true;
        wall1=blockB.create(3360,119,'wallB');
        wall1.body.immovable=true;
        wall1=blockG.create(3670,119,'wallG');
        wall1.body.immovable=true;
        wall1=blockY.create(3983,119,'wallY');
        wall1.body.immovable=true;
        
        var step1=blockY.create(4250,800,'stepY');
        step1.body.immovable=true;
        step1=blockB.create(4600,675,'stepB');
        step1.body.immovable=true;
        step1=blockP.create(4950,550,'stepP');
        step1.body.immovable=true;
        step1=blockG.create(5300,425,'stepG');
        step1.body.immovable=true;
        
        crate1=platforms.create(4124,920,'crate');
        crate1.anchor.y=.5
        crate1.body.immovable=true;
        
        wall1=platforms.create(5650,360,'testwall')
        wall1.scale.setTo(3,3);
        wall1.body.immovable=true;
        
        //for now we have complete ground coverage, we can change this later in the builds
		//var test_wall = platforms.create(700,0,'testwall');
        //test_wall.body.immovable = true;
		//test_wall.scale.setTo(1,10);
        // ground width = 368 + height = 21
        ground.scale.setTo((width /368 * 5),1);
		
        mc.anchor.x=.5;
        mc.anchor.y= .5;
		game.physics.arcade.enable(mc);
        mc.body.collideWorldBounds=true;
		mc.body.gravity.y = 400
        game.camera.follow(mc)
		
    },
//***********************************************************************************************//
    update:function(){
        updateall();
        exitTutorialstate();
        musicrestart();
        
		
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

