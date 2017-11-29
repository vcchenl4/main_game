var tutorialstate = {
    preload: function(){
        preloadall();
    },
//***********************************************************************************************//
    create: function(){
        checkpoint = 'tutorialstate'
        createrules(undefined,undefined, 'background');
        

        
        //tutorial for walking
        tutorup = game.add.sprite(400,450,'tutor-lr');
        tutorial_walker = game.add.sprite(435,555,'stickB');
        tutorial_walker.width = 70;
        tutorial_walker.height = 70;
        tutorial_walker.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        
        //tutorial for jumping
        tutorup = game.add.sprite(800,450,'tutor-up');
        tutorial_jumper = game.add.sprite(835,555,'stickB');
        tutorial_jumper.animations.add('jump',[0,8]);
        tutorial_jumper.width = 70;
        tutorial_jumper.height = 70;        
        createCrate(1400,920,'crate');

        
        createCrate(1800,920,'crate');
        createCrate(1925,920,'crate');
        createCrate(2050,920,'crate');
        createCrate(1925,795,'crate');
        
        //tutorial for wall jump
        createCrate(2810,920,'crate');
        createCrate(3000,860,'largecrate');
        createCrate(3062,673,'crate');
        createCrate(3252,860,'largecrate');
        createCrate(3252,613,'largecrate');
        
        var walkrack1=object.create(3380,4,'walkrack');
        walkrack1.scale.setTo(.98,.98);
        //top invis wall
        createPlatform(3380,-190,'testwall',.0001,1)
        createPlatform(3380,488,'testwall',3.5,.0001)
        createPlatform(3380,260,'testwall',3.5,.0001)
        createPlatform(3590,488,'testwall',.0001,3)   
        createPlatform(3590,-190,'testwall',.0001,1)
        
        tutorwalljump = game.add.sprite(3602,350,'tutor-walljump');
        tutorwalljump.height = 500;
        tutorwalljump.width = 270;
        
        
        createPlatform(3880,260,'rack',.98,.98)
        createPlatform(4080,260,'rack',.98,.98)
        createPlatform(4280,260,'rack',.98,.98)
        createPlatform(4480,260,'rack',.98,.98)
        createPlatform(4690,485,'rack',.60,.68)
        
        createPlatform(4690,466,'greywall',35.1,.04)
        
        //create the color walls
        tutorcolorchange = game.add.sprite(4975,119,'tutor-color-change');
        createGreenCollide(5450,119,'wallG',1,1)
        createPinkCollide(5860,119,'wallP',1,1)
        createYellowCollide(6270,119,'wallY',1,1)
        createBlueCollide(6680,119,'wallB',1,1)
        createPlatform(6670,485,'rack',.60,.68)
        
        //create color block steps
        createYellowCollide(6800,800,'stepY',1,1)
        createBlueCollide(7150,675,'stepB',1,1)
        createPinkCollide(7500,550,'stepP',1,1)
        createGreenCollide(7850,425,'stepG',1,1)
        tutorColorGuard = game.add.sprite(7900,115,'tutor-color-guard');
        
        EA= createEnemy(8500,215,'enemyY');
        EA.scale.x *= -1;
        EA.radar.scale.x *=-1;
        blackblock2=createPlatform(8210,335,'ground',1.55,5.5);

        //createCrate(4124,920,'crate')
        
        mc = game.add.sprite(100,890,'stickB');


        
        exit1 = exit.create(8755,30,'exit');
        exit1.body.immovable=true;
        createPlatform(8750,340,'testwall',3,3)
                
        createPlatform(0,bottom-20,'ground',1000,1)
        
        guycolor='B';
        mc.animations.add('jump',[8]);
        mc.animations.add('slide',[9]);
        mc.animations.add('walk',[0,1,2,3,4,5,6,7,6,5,4,3,2,]);
        mc.anchor.x=.5;
        mc.anchor.y= .5;
        
        game.physics.arcade.enable(mc);
        mc.body.collideWorldBounds=true;
        mc.body.gravity.y =600;
        game.camera.follow(mc);
        mc.body.setSize(100,170,0,0);
        music.play('',0,1,true);     
        addmenu();
        
    },
//***********************************************************************************************//
    update:function(){
        updateall();
        exitTutorialstate();
        enemyStillLeft(EA)
        //musicrestart();
        tutorial_walker.animations.play('walk',12,true);
        tutorial_jumper.animations.play('jump',4,true);
        if (EA.radar.body.x>8485){
            EA.radar.body.velocity.x=-200
        }
        else {
            EA.radar.body.velocity.x=0
        }
        if (EA.radar.body.y>75){
            EA.radar.body.velocity.y=-200
        }
        else {
            EA.radar.body.velocity.y=0
        }
        
        
    }
}
