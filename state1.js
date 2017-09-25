var state1 = {
    preload: function(){
    game.load.image('blockB', 'assets/Neon Block 1 Blue.png');
    game.load.image('blockG', 'assets/Neon Block 1 Green.png');
    game.load.image('blockP', 'assets/Neon Block 1 Pink.png');
    game.load.image('blockY', 'assets/Neon Block 1 Yellow.png');
    game.load.image('platform', 'assets/platform.png');
    game.load.spritesheet('stickB', 'assets/Stickman Neon Blue sprite.png', 200, 200);
    game.load.spritesheet('stickG', 'assets/Stickman Neon Green sprite.png', 200, 200);
    game.load.spritesheet('stickP', 'assets/Stickman Neon Pink sprite.png', 200, 200);
    game.load.spritesheet('stickY', 'assets/Stickman Neon Yellow sprite.png', 200, 200);
    
    },
    create: function(){
		game.stage.backgroundColor = '#353839';
        /*game.physics.startSystem(Phaser.Physics.ARCADE);
        platforms = game.add.group();
        platforms.enableBody = true;
        ground.body.immovable = true;
        game.add.sprite(675, 400, 'platform');	*/
        
    },
    update:function(){
        
        
    }
    
};