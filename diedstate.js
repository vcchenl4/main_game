var cursors;
var diedstate={
    preload: function(){
        preloadall();
    },
    create: function(){
        game.stage.backgroundColor = '#777777';
        game.add.text(340, 200, 'YOU Died!', { fontSize: '100px', fill: '#000' })
        game.add.text(190, 350, 'Press UP arrow key to play again!', { fontSize: '100px', fill: '#000' })
        cursors = game.input.keyboard.createCursorKeys();
        
    },
    update: function () { 
        if (cursors.up.isDown){
            health=100
            game.state.start('level4')
            music.restart()
        }

    }
}
