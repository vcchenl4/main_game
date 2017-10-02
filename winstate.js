var cursors;
var winstate={
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#777777';
        game.add.text(340, 200, 'YOU WIN!', { fontSize: '100px', fill: '#000' })
        game.add.text(190, 350, 'Press UP arrow key to play again!', { fontSize: '100px', fill: '#000' })
        cursors = game.input.keyboard.createCursorKeys();
        
    },
    update: function () { 
        if (cursors.up.isDown){
            game.state.start('state2')
        }

    },
    update: function(){}
}
