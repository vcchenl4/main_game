var mainMenu = {
	preload: function(){
		preloadall();
		
		
	},
	
	
	create: function(){
		createrules(1,1,"mainMenu");
		game.world.setBounds(0,0,width,bottom);
		
		
		//Create the player
		mc = game.add.sprite(0,(bottom + 280) - 955 * .6  - 150,'stickB');
        guycolor='B';
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        mc.anchor.x=.5;
        mc.anchor.y= .5;
		game.physics.arcade.enable(mc);
        mc.body.collideWorldBounds=true;
        game.camera.follow(mc)
		mc.body.gravity.y = 400
		//create the ground
		ground=createPlatform(0,990,'ground',1000,1);
		wall=createPlatform(1410,0,'ground',10,100);

		
		
	},
	
	update: function(){
		updateall();
		
		
	}
	
	
}
