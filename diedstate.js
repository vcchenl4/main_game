var cursors;
var diedstate={
    preload: function(){
        preloadall();
    },
    create: function(){
		/*
        game.stage.backgroundColor = '#777777';
        game.add.text(340, 200, 'YOU Died!', { fontSize: '100px', fill: '#000' })
        game.add.text(190, 350, 'Press UP arrow key to play again!', { fontSize: '100px', fill: '#000' })
        
		*/
		cursors = game.input.keyboard.createCursorKeys();
		game.add.sprite(200,200,'gameOverScreen');
        
    },
	// set up a global variable checkpoint --> when you die you reset back to the level you were on
    update: function () { 
        if (cursors.up.isDown){
            loop=0
            restart=true
            restartTime=music.context.currentTime;
            music.stop();
            health=100
            game.state.start(checkpoint);
            //music.restart()
        }	

    }
}
