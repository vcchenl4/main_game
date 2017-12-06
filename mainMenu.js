var mainMenu = {
	preload: function(){
		//loading main menu image
		game.load.image("mainmenu","assets/mainmenu_copy.PNG")
		game.load.spritesheet("play","assets/Play button.png",550,225)
	},

	create: function(){
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.add.sprite(0,0,"mainmenu");
		//game.add.sprite(width/3 + 75,600,"play");
		main = game.add.button(width/3 + 75,600,"play",enterTutorial,1,1,0,1);
	},
	
	update: function(){
	}
}

function enterTutorial(){
	game.state.start('tutorialstate');
}