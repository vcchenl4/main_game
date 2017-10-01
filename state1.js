var mc = {} ,blockB, blockG, blockP, blockY, platforms;
var bottom=1000
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
		/*
		game.load.image('blockB', 'assets/Neon Block 1 Blue.png');
		game.load.image('blockG', 'assets/Neon Block 1 Green.png');
		game.load.image('blockP', 'assets/Neon_Block_1_Pink.png');
		game.load.image('blockY', 'assets/Neon Block 1 Yellow.png');*/
    
    },
    create: function(){
		game.stage.backgroundColor = '#777777';
        game.physics.startSystem(Phaser.Physics.ARCADE);
		
		//game.world.setBounds(0,0,1000,1000);
		
		/*
		blockB = game.add.sprite(500,500,'blockB');
		blockY = game.add.sprite(800,500,'blockY');
		blockP = game.add.sprite(500,800,'blockP');
		blockG = game.add.sprite(800,800,'blockG');*/
        
		mc = game.add.sprite(0,300,'stickP');
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        platforms = game.add.group();
        platforms.enableBody = true;
        
        var ground = platforms.create(0, bottom-20, 'ground');
		var test_wall = platforms.create(700,600,'testwall');
        
        ground.body.immovable = true;
        ground.scale.setTo(3,1);
		test_wall.body.immovable = true;
        
        mc.anchor.x=.5;
        mc.anchor.y=.5;
		addChangeEventListener();
        game.physics.arcade.enable(mc);
        mc.body.gravity.y=400;
        mc.body.collideWorldBounds=true;
		
    },
    update:function(){
        game.physics.arcade.collide(mc, platforms);
		addMoveEventListener()
		walltouch()
	
		game.input.keyboard.onUpCallback = function(){
			mc.body.velocity.x=0;
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

function colorChange(keyObject){
    var color = "";
    if (keyObject.keyCode==Phaser.Keyboard.ONE) {
        color='B'
    }
    else if (keyObject.keyCode==Phaser.Keyboard.TWO) {
        color='G'
    }
    else if (keyObject.keyCode==Phaser.Keyboard.THREE) {
        color='P'
    }
    else if (keyObject.keyCode==Phaser.Keyboard.FOUR) {
        color='Y'
    }
    
	mc.loadTexture('stick'+color);
    mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2]);
    console.log(color);
	}

function addKeyCallback(key,func,args){
	game.input.keyboard.addKey(key).onDown.add(func,null,null,args);
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
		mc.animations.play('walk',5,true);
		}
	else if(keypress.keyCode == Phaser.Keyboard.RIGHT){
		mc.body.velocity.x = 250;
		mc.scale.setTo(1,1);
		mc.animations.play('walk',5,true);
		}
	else if(keypress.keyCode == Phaser.Keyboard.UP){
		if(mc.body.touching.down){
			mc.body.velocity.y = -400;	
		}
	}
}

function walltouch(){
	if (mc.body.touching.down == false){
		if (mc.body.touching.right == true){
			console.log(mc.body.touching.right)
			mc.body.gravity = 0;
			mc.body.velocity.y = 100;
		}
	}
}

function addMoveEventListener(){
	addKeyCallback(Phaser.Keyboard.LEFT,moving);
	addKeyCallback(Phaser.Keyboard.RIGHT,moving);
	addKeyCallback(Phaser.Keyboard.UP,moving);
}