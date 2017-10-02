var mc = {} , blockB, blockG, blockP, blockY, platforms, guycolor, block1,block2, block3, block4;


var width = 2000 
var bottom = 1000
var state1 = {
    preload: function(){
		// character preloading
		game.load.spritesheet('stickB', 'assets/Stickman Neon Blue sprite_2.png', 160,180,8);
		game.load.spritesheet('stickG', 'assets/Stickman Neon Green sprite_2.png', 160,180,8);
		game.load.spritesheet('stickP', 'assets/Stickman Neon Pink sprite_2.png', 160,180,8);
		game.load.spritesheet('stickY', 'assets/Stickman Neon Yellow sprite_2.png', 160,180,8);
	
		//enviroment preloading
		
		game.load.image('ground','assets/ground.png');
		game.load.image('testwall','assets/testwall.png');
		
		game.load.image('blockB', 'assets/Neon Block 1 Blue.png');
		game.load.image('blockG', 'assets/Neon Block 1 Green.png');
		game.load.image('blockP', 'assets/Neon_Block_1_Pink.png');
		game.load.image('blockY', 'assets/Neon Block 1 Yellow.png');
    
    },
    create: function(){
		game.stage.backgroundColor = '#777777';
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
        
		
		block1 = blockB.create(1000,800,'blockB');
        block1.body.immovable=true;
        block1.anchor.x=.5;
        block1.anchor.y=.5;
        
		block2 = blockY.create(800,800,'blockY');
        block2.anchor.x=.5;
        block2.anchor.y=.5
		block2.body.immovable=true;
        
        block3 = blockP.create(500,800,'blockP');
        block3.anchor.x=.5;
        block3.anchor.y=.5
		block3.body.immovable=true;
        
        block4 = blockG.create(275,800,'blockG');
        block4.anchor.x=.5;
        block4.anchor.y=.5;
        block4.body.immovable=true;
        
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		mc = game.add.sprite(0,300,'stickP');
        guycolor='P';
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        platforms = game.add.group();
        platforms.enableBody = true;
        
        var ground = platforms.create(0, bottom-200, 'ground');
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
		
    },
    update:function(){
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
			mc.body.velocity.y = -600;	
		}
		else if(mc.body.touching.right == true){
			mc.body.velocity.y = -600;
			mc.body.velocity.x = -300;
			mc.scale.setTo(-1,1);
		}
		else if(mc.body.touching.left == true){
			mc.body.velocity.y = -600;
			mc.body.velocity.x = 300;
			mc.scale.setTo(1,1);			
		}
	}
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