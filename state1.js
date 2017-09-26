var mc = {} ,blockB, blockG, blockP, blockY
var state1 = {
    preload: function(){
    game.load.image('blockB', 'assets/Neon Block 1 Blue.png');
    game.load.image('blockG', 'assets/Neon Block 1 Green.png');
    game.load.image('blockP', 'assets/Neon_Block_1_Pink.png');
    game.load.image('blockY', 'assets/Neon Block 1 Yellow.png');
    //game.load.image('platform', 'assets/platform.png');
    game.load.spritesheet('stickB', 'assets/Stickman Neon Blue sprite_1.png', 200,183,7);
    game.load.spritesheet('stickB', 'assets/Stickman Neon Blue sprite_1.png', 200,183,7);
    game.load.spritesheet('stickG', 'assets/Stickman Neon Green sprite_1.png', 200,183,7);
    game.load.spritesheet('stickP', 'assets/Stickman Neon Pink sprite_1.png', 200,183,7);
    game.load.spritesheet('stickY', 'assets/Stickman Neon Yellow sprite_1.png', 200,183,7);
    
    },
    create: function(){
		game.stage.backgroundColor = '#777777';
        game.physics.startSystem(Phaser.Physics.ARCADE);
		game.world.setBounds(0,0,2000,2000);
        /*platforms = game.add.group();
        platforms.enableBody = true;
        ground.body.immovable = true;
        game.add.sprite(675, 400, 'platform');*/
		blockB = game.add.sprite(500,500,'blockB');
		blockY = game.add.sprite(800,500,'blockY');
		blockP = game.add.sprite(500,800,'blockP');
		blockG = game.add.sprite(800,800,'blockG');
		mc = game.add.sprite(0,300,'stickY');
		mc.animations.add('walk',[0,1,2,3,4,5,6,7]);
		addChangeEventListener();
		
    },
    update:function(){
		if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			mc.x += 5;
			mc.scale.setTo(1,1);
			mc.animations.play('walk',20,true);
        }
		else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			mc.x -= 5;
			mc.scale.setTo(-1,1);
			mc.animations.play('walk',20,true);
		}
		else{
			mc.animations.stop()
			mc.frame = 0
		}
    }
    
};

function colorChange(i,col){
	mc.loadTexture('stick'+col);
	console.log(col)
}

function addKeyCallback(key,func,args){
	game.input.keyboard.addKey(key).onDown.add(func,null,null,args);
	console.log(args);
}

function addChangeEventListener(){
	addKeyCallback(Phaser.Keyboard.ONE,colorChange,'P');
	addKeyCallback(Phaser.Keyboard.TWO,colorChange,'Y');
	addKeyCallback(Phaser.Keyboard.THREE,colorChange,'B');
	addKeyCallback(Phaser.Keyboard.FOUR,colorChange,'G');	
}