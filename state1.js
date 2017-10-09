var mc = {} , blockB, blockG, blockP, blockY, platforms, guycolor, block1,block2, block3, block4, exit, music;
var Rkey,Lkey,Ukey,walltouchL = false,walltouchR = false;
//***********************************************************************************************//
var width = 2000 
var bottom = 1000



var state1 = {
    preload: function(){
		// character preloading
		preloadall();
    
    },
//***********************************************************************************************//
    create: function(){
		
        createrules();

        
        mc = game.add.sprite(200,500,'stickP');
        guycolor='P';
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        mc.anchor.x=.5;
        mc.anchor.y= .5;
		
		exit1 = exit.create(2000,800,'exit');
        exit1.body.immovable=true;
        exit1.anchor.x=.5;
        exit1.anchor.y=.5;
		
		//block1 = blockB.create(1000,800,'blockB');
		block1 = blockB.create(1500,bottom-80,'blockB');
        block1.body.immovable=true;
        block1.anchor.x=.5;
        block1.anchor.y=.5;
        
		block2 = blockY.create(1200,bottom-80,'blockY');
        block2.anchor.x=.5;
        block2.anchor.y=.5
		block2.body.immovable=true;
        
        block3 = blockP.create(900,bottom-80,'blockP');
        block3.anchor.x=.5;
        block3.anchor.y=.5
		block3.body.immovable=true;
        
        block4 = blockG.create(600,bottom-80,'blockG');
        block4.anchor.x=.5;
        block4.anchor.y=.5;
        block4.body.immovable=true;
        
        var ground = platforms.create(0, bottom-20, 'ground');
		//var test_wall = platforms.create(700,0,'testwall');
        //test_wall.body.immovable = true;
		//test_wall.scale.setTo(1,10);
        
        ground.body.immovable = true;
		//for now we have complete ground coverage, we can change this later in the builds
		// ground width = 368 + height = 21
        ground.scale.setTo((width /368),1);
		
        
		
        game.physics.arcade.enable(mc,platforms);
        mc.body.collideWorldBounds=true;
		mc.body.gravity.y = 400
        
        
        game.camera.follow(mc);
        
		
    },
//***********************************************************************************************//
    update:function(){
        updateall();
        musicrestart();
        exitState1();
		
    }
}
//***********************************************************************************************//

function updateall(){
    
    game.physics.arcade.collide(mc, platforms);
    passthrough();
	addMoveEventListener();
	
    
    passthrough();
	
		
	if(mc.body.touching.right == true){
		walltouchR = true;
	}
	else if(mc.body.touching.left == true){
		walltouchL = true;
        
	}
}


function addKeyCallback(key,func,args){
	game.input.keyboard.addKey(key).onDown.add(func,null,null,args);
}

function colorChange(keyObject){
    guycolor=""
	
    if (keyObject.keyCode==Phaser.Keyboard.ONE) {
        guycolor='B';
    }
    else if (keyObject.keyCode==Phaser.Keyboard.TWO) {
        guycolor='G';
    }
    else if (keyObject.keyCode==Phaser.Keyboard.THREE) {
        guycolor='P';
    }
    else if (keyObject.keyCode==Phaser.Keyboard.FOUR) {
        guycolor='Y';
    }
    
	mc.loadTexture('stick'+guycolor);
    mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2]);
    console.log(guycolor);
    
	}

function addChangeEventListener(){
	addKeyCallback(Phaser.Keyboard.ONE,colorChange,'P');
	addKeyCallback(Phaser.Keyboard.TWO,colorChange,'Y');
	addKeyCallback(Phaser.Keyboard.THREE,colorChange,'B');
	addKeyCallback(Phaser.Keyboard.FOUR,colorChange,'G');
}

//need to add in wall jumping in some way
function moving(keypress){
	
	if (keypress.keyCode == Phaser.Keyboard.LEFT){
		mc.body.velocity.x = -250;
		mc.scale.setTo(-1,1);
		mc.animations.play('walk',12,true);
		}
	else if(keypress.keyCode == Phaser.Keyboard.RIGHT){
		mc.body.velocity.x = 250;
		mc.scale.setTo(1,1);
		mc.animations.play('walk',12,true);
		}
	else if(keypress.keyCode == Phaser.Keyboard.UP){
		if(mc.body.touching.down){
			mc.body.velocity.y = -350;	
		}
		else if(walltouchR == true){
			mc.body.velocity.y = -425;
			mc.body.velocity.x = -400;
			mc.scale.setTo(-1,1);
			walltouchR = false;
		}
		else if(walltouchL == true){
			mc.body.velocity.y = -425;
			mc.body.velocity.x = 400;
			mc.scale.setTo(1,1);
			walltouchL = false;
		}
	}
}

function preloadall(){
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
		
	game.load.audio('bgm',['audio/Fox_Night2.mp3','audio/Fox_Night2.ogg','audio/Fox_Night2.wav']);
    
	
    
	game.load.image('wallG', 'assets/Neon_Wall_3_Green.png');
    game.load.image('wallP', 'assets/Neon_Wall_3_Pink.png');
	game.load.image('wallY', 'assets/Neon_Wall_3_Yellow.png');
    game.load.image('wallB', 'assets/Neon_Wall_3_Blue.png');
    
    game.load.image('crate', 'assets/crate.png');
    game.load.image('largecrate','assets/largecrate.png')
    
        
}

function createrules(){
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
    
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		
    platforms = game.add.group();
    platforms.enableBody = true;
    
    addChangeEventListener();
    
    
    game.world.setBounds(0,0, width*5 , bottom );
    game.camera.deadzone=new Phaser.Rectangle(400,0,1000,bottom);
    music = game.add.audio('bgm');
    music.play('',0,.15,true);
    
		
		
        
    
    
}


function passthrough(){
    if (guycolor!="P"){
        game.physics.arcade.collide(mc, blockP);
    }
    if (guycolor!="G"){
        game.physics.arcade.collide(mc, blockG);
    }
    if (guycolor!="Y"){
        game.physics.arcade.collide(mc, blockY);
    }
    if (guycolor!="B"){
        game.physics.arcade.collide(mc, blockB);
    }
};


function addMoveEventListener(){
	addKeyCallback(Phaser.Keyboard.LEFT,moving);
	addKeyCallback(Phaser.Keyboard.RIGHT,moving);
	addKeyCallback(Phaser.Keyboard.UP,moving);
}

function exitState1(){
	game.physics.arcade.overlap(mc, exit,enterState2 ,null, this);
}
function enterState2(){
	game.state.start('state2');
}

function exitState2(){
	game.physics.arcade.overlap(mc, exit,enterState3,null, this);
	
}
function enterState3(){
	game.state.start('state3');
	
}

function exitTutorialstate(){
	game.physics.arcade.overlap(mc, exit,enterwinstate,null, this);
	
}
function enterwinstate(){
	game.state.start('winstate');
	
}

function keydef(){
	Rkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	Lkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	Ukey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
	
	//for wall jumps
	Lkey.onUp.add(function(){walltouch = false;});
	Rkey.onUp.add(function(){walltouch = false;});
	//to properly stop walking animations
	Lkey.onUp.add(function(){
		mc.body.velocity.x = 0;
		mc.animations.stop();
		mc.frame = 0;
	});
	Rkey.onUp.add(function(){
		mc.body.velocity.x = 0;
		mc.animations.stop();
		mc.frame = 0;
	});
	
	
}

function musicrestart(){
   if (music.isPlaying == false){
        music.restart();
   }
};