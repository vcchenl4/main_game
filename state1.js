var mc = {} , blockB, blockG, blockP, blockY, platforms, guycolor, block1,block2, block3, block4, exit, music, enemy1, enemy2, enemy3, turn=1, jump,enemyP,enemyG,enemyY,enemyB, Stealth, Stealthtext,radarG,radarB,radarY,radarP,ground,loop=1, hitwalltime;
var Rkey,Lkey,Ukey,walltouchL = false,walltouchR = false;
//***********************************************************************************************//
var width = 2000 
var bottom = 1000

var state1 = {
    preload: function(){
		// character preloading
		preloadall();
    
    },
//***********************************************************************************************//
    create: function(){
		
        createrules();
        
        mc = game.add.sprite(200,800,'stickP');
        guycolor='P';
		mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        mc.anchor.x=.5;
        mc.anchor.y= .5;
		
		exit1 = exit.create(2000,850,'exit');
        exit1.body.immovable=true;
        exit1.anchor.x=.5;
        exit1.anchor.y=.5;
		
		//block1 = blockB.create(1000,800,'blockB');
		block1 = blockB.create(1500,bottom-80,'blockB');
        block1.body.immovable=true;
        block1.anchor.x=.5;
        block1.anchor.y=.5;
        
		block2 = blockY.create(1200,bottom-80,'blockY');
        block2.anchor.x=.5;
        block2.anchor.y=.5
		block2.body.immovable=true;
        
        block3 = blockP.create(900,bottom-80,'blockP');
        block3.anchor.x=.5;
        block3.anchor.y=.5
		block3.body.immovable=true;
        
        block4 = blockG.create(600,bottom-80,'blockG');
        block4.anchor.x=.5;
        block4.anchor.y=.5;
        block4.body.immovable=true;
        
        enemy1 = createEnemy(600,500,'enemyP')
        enemy2 = createEnemy(400,500,'enemyB')
        enemy3 = createEnemy(800,500,'enemyG')
        
        
				
        game.physics.arcade.enable(mc,platforms);
        mc.body.collideWorldBounds=true;
		mc.body.gravity.y = 400
        
        
        game.camera.follow(mc);
        
    
        
		
    },
//***********************************************************************************************//
    update:function(){
        updateall();
        musicrestart();
        exitState1();
		
    }
}
//***********************************************************************************************//
function preloadall(){
	// load the player sprites
    game.load.spritesheet('stickB', 'assets/Stickman Neon Blue sprite_3.png', 160,180,8);
    game.load.spritesheet('stickG', 'assets/Stickman Neon Green sprite_3.png', 160,180,8);
	game.load.spritesheet('stickP', 'assets/Stickman Neon Pink sprite_3.png', 160,180,8);
	game.load.spritesheet('stickY', 'assets/Stickman Neon Yellow sprite_3.png', 160,180,8);
	
		//enviroment preloading
		
	game.load.image('ground','assets/ground.png');
	game.load.image('testwall','assets/testwall.png');
	game.load.image('exit','assets/door.png');
	// load the color blocks	
	game.load.image('blockB', 'assets/Neon Block_3_Blue.png');
	game.load.image('blockG', 'assets/Neon Block_3_Green.png');
	game.load.image('blockP', 'assets/Neon_Block_3_Pink.png');
	game.load.image('blockY', 'assets/Neon Block_3_Yellow.png');
	// load the background audio
	game.load.audio('bgm',['audio/Fox_Night2.mp3','audio/Fox_Night2.ogg','audio/Fox_Night2.wav']);
    game.load.audio('jumpSFX',['audio/Jump_SFX1.mp3','audio/Jump_SFX1.ogg','audio/Jump_SFX1.wav'])
	
    //load the color walls
    game.load.image('wallG', 'assets/Neon_Wall_3_Green.png');
    game.load.image('wallP', 'assets/Neon_Wall_3_Pink.png');
	game.load.image('wallY', 'assets/Neon_Wall_3_Yellow.png');
    game.load.image('wallB', 'assets/Neon_Wall_3_Blue.png');
	//load the color platforms
    game.load.image('stepG', 'assets/horizNeon_Wall_3_Green.png');
    game.load.image('stepP', 'assets/horizNeon_Wall_3_Pink.png');
	game.load.image('stepY', 'assets/horizNeon_Wall_3_Yellow.png');
    game.load.image('stepB', 'assets/horizNeon_Wall_3_Blue.png');
    
    game.load.image('radarG','assets/Neon_Green_Radar.png')
    game.load.image('radarB','assets/Neon_Blue_Radar.png')
    game.load.image('radarY','assets/Neon_Yellow_Radar.png')
    game.load.image('radarP','assets/Neon_Pink_Radar.png')
    
    //load the types of walls and crates
    game.load.image('crate', 'assets/crate.png');
    game.load.image('largecrate','assets/largecrate.png')
    game.load.image('rack', 'assets/block_rack.png')
    game.load.image('walkrack','assets/walk_rack.png')
    game.load.image('background','assets/background.png')
	game.load.image('sml_rack','assets/small_walk_rack.png')
    game.load.image('walkrack','assets/walk_rack.png')
    game.load.image('background','assets/background.png')
	game.load.image('invis','assets/invis.png')
    
    //enemy preloading
    game.load.spritesheet('enemyB', 'assets/Enemy_Neon_Blue_sprite_3.png', 160,180,8);
    game.load.spritesheet('enemyG', 'assets/Enemy_Neon_Green_sprite_3.png', 160,180,8);
    game.load.spritesheet('enemyP', 'assets/Enemy_Neon_Pink_sprite_3.png', 160,180,8);
    game.load.spritesheet('enemyY', 'assets/Enemy_Neon_Yellow_sprite_3.png', 160,180,8);       
}

function createrules(lvl_y,y_scale){
	//this allows for when you want to change the height of the game and redraw the height of the background
	if (lvl_y === undefined){
		lvl_y = 0
	}
	if(y_scale === undefined){
		y_scale = 2/3
	}
    cursors = game.input.keyboard.createCursorKeys();
    game.stage.backgroundColor = '561b1b';
    var background=game.add.sprite(0,lvl_y,'background')
    background.scale.setTo(2/3,y_scale)    
    var background=game.add.sprite(1732,lvl_y,'background')
    background.scale.setTo(2/3,y_scale)    
    var background=game.add.sprite(1732*2,lvl_y,'background')
    background.scale.setTo(2/3,y_scale)
    var background=game.add.sprite(1732*3,lvl_y,'background')
    background.scale.setTo(2/3,y_scale)
    var background=game.add.sprite(1732*4,lvl_y,'background')
    background.scale.setTo(2/3,y_scale)
    var background=game.add.sprite(1732*5,lvl_y,'background')
    background.scale.setTo(2/3,y_scale)
    game.physics.startSystem(Phaser.Physics.ARCADE);
    Stealth=100;
    Stealthtext = game.add.text(16, 20, 'Stealth: 100%', { fontSize: '32px', fill: '#fff' });
    Stealthtext.fixedToCamera=true;
    
    headtext = game.add.text(340, 20, 'Control Keys:    1=', { fontSize: '32px', fill: '#fff' });
    headtext.fixedToCamera=true;
    headdude=game.add.sprite(570,8,'stickB');
    headdude.scale.setTo(.35,.35);
    headdude.fixedToCamera=true;
    
    headtext = game.add.text(640, 20, '2=', { fontSize: '32px', fill: '#fff' });
    headtext.fixedToCamera=true;
    headdude=game.add.sprite(670,8,'stickG');
    headdude.scale.setTo(.35,.35);
    headdude.fixedToCamera=true;
    
    
    headtext = game.add.text(740, 20, '3=', { fontSize: '32px', fill: '#fff' });
    headtext.fixedToCamera=true;
    headdude=game.add.sprite(770,8,'stickP');
    headdude.scale.setTo(.35,.35);
    headdude.fixedToCamera=true;
    
    
    
    headtext = game.add.text(840, 20, '4=', { fontSize: '32px', fill: '#fff' });
    headtext.fixedToCamera=true;
    headdude=game.add.sprite(870,8,'stickY');
    headdude.scale.setTo(.35,.35);
    headdude.fixedToCamera=true;
    
    
    
	keydef()
		
	exit= game.add.group();
	blockB= game.add.group();
    blockY= game.add.group();
    blockG= game.add.group();
    blockP= game.add.group();
    enemyB=game.add.group();
    enemyY=game.add.group();
    enemyG=game.add.group();
    enemyP=game.add.group();
    radarB=game.add.group();
    radarY=game.add.group();
    radarP=game.add.group();
    radarG=game.add.group();
    object=game.add.group();
        
	object.enableBody=true;	
	exit.enableBody=true;
    radarB.enableBody=true;
    radarY.enableBody=true;
    radarG.enableBody=true;
    radarP.enableBody=true;
    blockB.enableBody=true;
    blockY.enableBody=true;
    blockG.enableBody=true;
    blockP.enableBody=true;
    enemyB.enableBody=true;
    enemyG.enableBody=true;
    enemyY.enableBody=true;
    enemyP.enableBody=true;
    
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		
    platforms = game.add.group();
    platforms.enableBody = true;
    addChangeEventListener();
    
    
    game.world.setBounds(0,0, width*5 , bottom );
    game.camera.deadzone=new Phaser.Rectangle(400,0,1000,bottom);
    music = game.add.audio('bgm');
    
       
    jump=game.add.audio('jumpSFX')   
}

function hitEnemy(mc, enemy){
    Stealth-=.5
    Stealthtext.text="Stealth: "+Math.round(Stealth)+"%"
}

function updateall(){
    
    game.physics.arcade.collide(mc, platforms, collision);
    game.physics.arcade.collide(enemyP, platforms);
    game.physics.arcade.collide(enemyG, platforms);
    game.physics.arcade.collide(enemyB, platforms);
    game.physics.arcade.collide(enemyY, platforms);
    game.physics.arcade.collide(enemyY, [blockG,blockP,blockB]);
    game.physics.arcade.collide(enemyG, [blockY,blockP,blockB]);
    game.physics.arcade.collide(enemyB, [blockG,blockP,blockY]);
    game.physics.arcade.collide(enemyP, [blockG,blockY,blockB]);

    
	addMoveEventListener();
	
    if (game.state.game.time.now>hitwalltime+300){
        walltouchL=false;
        walltouchR=false;
    }
    
    passthrough();
    if (Stealth<=0){
        game.state.start('diedstate')
    }
	
    
	if(mc.body.touching.right == true){
		walltouchR = true;
        hitwalltime=game.state.game.time.now
        
	}
	else if(mc.body.touching.left == true){
		walltouchL = true;
        hitwalltime=game.state.game.time.now
	}
    
}


function addKeyCallback(key,func,args){
	game.input.keyboard.addKey(key).onDown.add(func,null,null,args);
}

function colorChange(keyObject){
    guycolor=""
	
    if (keyObject.keyCode==Phaser.Keyboard.ONE) {
        guycolor='B';
    }
    else if (keyObject.keyCode==Phaser.Keyboard.TWO) {
        guycolor='G';
    }
    else if (keyObject.keyCode==Phaser.Keyboard.THREE) {
        guycolor='P';
    }
    else if (keyObject.keyCode==Phaser.Keyboard.FOUR) {
        guycolor='Y';
    }
    
	mc.loadTexture('stick'+guycolor);
    mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2]);
    
    console.log(guycolor);
    
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
		mc.animations.play('walk',12,true);
		}
	if(keypress.keyCode == Phaser.Keyboard.RIGHT){
		mc.body.velocity.x = 250;
		mc.scale.setTo(1,1);
		mc.animations.play('walk',12,true);
		}
	if(keypress.keyCode == Phaser.Keyboard.UP){
        
		if(mc.body.touching.down){
			mc.body.velocity.y = -350;	
            jump.play('',0,6,true);
		}
        
		else if(walltouchR == true){
			mc.body.velocity.y = -350;
			mc.body.velocity.x = -200;
			mc.scale.setTo(-1,1);
			walltouchR = false;
            jump.play('',0,6,true);
		}
		else if(walltouchL == true){
			mc.body.velocity.y = -350;
			mc.body.velocity.x = 200;
			mc.scale.setTo(1,1);
			walltouchL = false;
            jump.play('',0,6,true);
		}
	}
}





function passthrough(){
    if (guycolor!="P"){
        game.physics.arcade.collide(mc, blockP);
        game.physics.arcade.collide(mc, enemyP,hitEnemy);
        
    }
    if (guycolor!="G"){
        game.physics.arcade.collide(mc, blockG);
        game.physics.arcade.collide(mc, enemyG,hitEnemy);
    }
    if (guycolor!="Y"){
        game.physics.arcade.collide(mc, blockY);
        game.physics.arcade.collide(mc, enemyY,hitEnemy);
    }
    if (guycolor!="B"){
        game.physics.arcade.collide(mc, blockB);
        game.physics.arcade.collide(mc, enemyB,hitEnemy);
    }
};


function addMoveEventListener(){
	addKeyCallback(Phaser.Keyboard.LEFT,moving);
	addKeyCallback(Phaser.Keyboard.RIGHT,moving);
	addKeyCallback(Phaser.Keyboard.UP,moving);
    
}

function exitState1(){
	game.physics.arcade.overlap(mc, exit,enterState2 ,null, this);
}
function enterState2(){
	game.state.start('state2');
}

function exitState2(){
	game.physics.arcade.overlap(mc, exit,enterState3,null, this);
	
}
function enterState3(){
	game.state.start('state3');
	
}

function exitTutorialstate(){
	game.physics.arcade.overlap(mc, exit,enterLevel1,null, this);
	
}
function enterwinstate(){
	game.state.start('winstate');
	
}
function enterLevel1(){
	game.state.start('level1');
	
}

function keydef(){
	Rkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	Lkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	Ukey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
	
	//for wall jumps
	Lkey.onUp.add(function(){walltouch = false;});
	Rkey.onUp.add(function(){walltouch = false;});
	//to properly stop walking animations
	Lkey.onUp.add(function(){
		mc.body.velocity.x = 0;
		mc.animations.stop();
		mc.frame = 0;
	});
	Rkey.onUp.add(function(){
		mc.body.velocity.x = 0;
		mc.animations.stop();
		mc.frame = 0;
	});
	
	
}
// loop the bgm music
function musicrestart(){
   if (music.context.currentTime>loop*18){
       music.stop()
       music.restart()      
       loop+=1
       
   }
};
//creates the crates to use and place
function createCrate(X,Y,crateType){
	var crate = platforms.create(X,Y,crateType);
	crate.body.immovable=true;
	crate.anchor.x=.5;
	crate.anchor.y=.5;
}

function createPlatform(X,Y,name,xScale,yScale){
	var wall=platforms.create(X,Y,name);
	wall.scale.setTo(xScale,yScale);
	wall.body.immovable=true;
    return wall
}

function createPinkCollide(X,Y,name,xScale,yScale){
    var thisobject=blockP.create(X,Y,name);
    thisobject.scale.setTo(xScale,yScale);
    thisobject.body.immovable=true;
}

function createBlueCollide(X,Y,name,xScale,yScale){
    var thisobject=blockB.create(X,Y,name);
    thisobject.scale.setTo(xScale,yScale);
    thisobject.body.immovable=true;
}
function createYellowCollide(X,Y,name,xScale,yScale){
    var thisobject=blockY.create(X,Y,name);
    thisobject.scale.setTo(xScale,yScale);
    thisobject.body.immovable=true;
}
function createGreenCollide(X,Y,name,xScale,yScale){
    var thisobject=blockG.create(X,Y,name);
    thisobject.scale.setTo(xScale,yScale);
    thisobject.body.immovable=true;
}

function createEnemy(X,Y,color){
    var thisenemy;
    if (color == 'enemyG'){
        thisenemy=enemyG.create(X,Y,color)
        thisenemy.radar=radarG.create(X+40,Y-70,"radarG")
        thisenemy.color="G"
    }
    if (color == 'enemyB'){
        thisenemy=enemyB.create(X,Y,color)
        thisenemy.radar=radarB.create(X+40,Y-70,"radarB")
        thisenemy.color="B"
    }
    if (color == 'enemyP'){
        thisenemy=enemyP.create(X,Y,color)
        thisenemy.radar=radarP.create(X+40,Y-70,"radarP")
        thisenemy.color="P"
    }
    if (color == 'enemyY'){
        thisenemy=enemyY.create(X,Y,color)
        thisenemy.radar=radarY.create(X+40,Y-70,"radarY")
        thisenemy.color="Y"
    }
    thisenemy.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2]);
    thisenemy.anchor.x=.5;
    thisenemy.anchor.y=.5;
    thisenemy.body.collideWorldBounds=true;
    thisenemy.body.gravity.y = 400;
    thisenemy.turn=1
    
    return thisenemy
 }

function enemyMove(enemyNum,bound1,bound2){
    if ((enemyNum.body.position.x-mc.body.position.x)>0){
        if (enemyNum.turn==-1 && (enemyNum.body.position.x-mc.body.position.x)<250){
            if (enemyNum.color!=guycolor){
                if (mc.body.position.y<(enemyNum.body.position.y+120) && mc.body.position.y>(enemyNum.body.position.y-240) ){
                    inRange();
                }
            }
        }
    }
    else if ((enemyNum.body.position.x-mc.body.position.x)<0){
        if (enemyNum.turn==1 && (mc.body.position.x-enemyNum.body.position.x)<250){
            if (enemyNum.color!=guycolor){
                if (mc.body.position.y<(enemyNum.body.position.y+120) && mc.body.position.y>(enemyNum.body.position.y-240) ){
                    inRange();
                }
            }
        }
    }
    if (enemyNum.body.x >=bound2){
        enemyNum.turn=-1
        enemyNum.radar.scale.setTo(enemyNum.turn,1)
        enemyNum.body.velocity.x= enemyNum.turn * 150;
        enemyNum.radar.body.velocity.x=enemyNum.turn*150
        enemyNum.radar.body.x=enemyNum.body.x+40
        enemyNum.radar.body.y=enemyNum.body.y-70
        
    }
    else if(enemyNum.body.x <=bound1){
        
        enemyNum.turn=1;
        enemyNum.body.velocity.x = enemyNum.turn *150;
        enemyNum.radar.body.velocity.x=enemyNum.turn*150
        enemyNum.scale.setTo(1,1)
        enemyNum.radar.scale.setTo(enemyNum.turn,1)
        enemyNum.radar.body.x=enemyNum.body.x+120
        enemyNum.radar.body.y=enemyNum.body.y-70
        
    }
    else{
        enemyNum.radar.body.velocity.x=enemyNum.turn*150
        
        
        
        enemyNum.body.velocity.x=150*enemyNum.turn
        enemyNum.scale.setTo(enemyNum.turn,1)
        enemyNum.radar.scale.setTo(enemyNum.turn,1)
        enemyNum.animations.play('walk',12,true)
    }
}

function inRange(){
    Stealth-=.1
    Stealthtext.text="Stealth: "+Math.round(Stealth)+"%"  
}
function collision(mc, platform){
    console.log('colliding')
}