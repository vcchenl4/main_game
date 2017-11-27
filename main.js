var game = new Phaser.Game(width,bottom,Phaser.AUTO)
game.state.add('state1',state1);
game.state.add('state2',state2);
game.state.add('state3',state3);
game.state.add('mainMenu',mainMenu);
game.state.add('tutorialstate',tutorialstate);
game.state.add('level1',level1);
game.state.add('level2',level2);
game.state.add('level3',level3);
game.state.add('level4',level4);
game.state.add('level5',level5);
game.state.add('level6',level6);
game.state.add('winstate',winstate);
game.state.add('diedstate',diedstate);
game.state.start("level2");
