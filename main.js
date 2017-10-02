var game = new Phaser.Game(1500,bottom,Phaser.AUTO)
game.state.add('state1',state1);
game.state.add('state2',state2);
game.state.add('state3',state3);
game.state.start('state1');
