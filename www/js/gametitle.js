var title;
var subtitle;

gameTitle = {
	init: function() {
          game.log();
     },
  	create: function(){
			game.add.image(0, 0, "background");
      //
      backSnow = game.add.emitter(320, -32, 600);
      backSnow.makeParticles("snowflakes", [0, 1, 2, 3, 4, 5]);
      backSnow.maxParticleScale = 0.6;
      backSnow.minParticleScale = 0.2;
      backSnow.setYSpeed(20, 100);
      backSnow.setXSpeed(-15, 15);
      backSnow.gravity = 0;
      backSnow.width = 960;
      backSnow.minRotation = 0;
      backSnow.maxRotation = 40;
      backSnow.start(false, 14000, 20);
      //
      game.add.image(0, 415, "snow_mask");
      title = game.add.sprite(-320,170,"gametitle");
      title.anchor.setTo(0.5);
      subtitle = game.add.image(960,270,"gamesubtitle");
      subtitle.anchor.setTo(0.5);
      game.time.events.add(Phaser.Timer.SECOND * 4, this.showTitle, this);
      //
      music = game.add.audio("music",1,true);
      music.play("",0,1,true);
      //
      frontSnow = game.add.emitter(320, -32, 50);
      frontSnow.makeParticles("snowflakes_large", [0, 1, 2, 3, 4, 5]);
      frontSnow.maxParticleScale = 0.75;
      frontSnow.minParticleScale = 0.5;
      frontSnow.setYSpeed(50, 150);
      frontSnow.setXSpeed(-20, 20);
      frontSnow.gravity = 0;
      frontSnow.width = 960;
      frontSnow.minRotation = 0;
      frontSnow.maxRotation = 40;
      frontSnow.start(false, 14000, 1000);
		//
    var blackFade = game.add.sprite(0 ,0, "blackfade");
    var fadeTween = this.add.tween(blackFade);
		fadeTween.to({
			alpha: 0
		}, 4000, Phaser.Easing.Linear.Out, true);
		},
		start: function() {
				game.state.start("PlayGame");
		},
   showTitle: function(){
        var titleTween = game.add.tween(title);
        titleTween.to({
					x: 320
					}, 2000, Phaser.Easing.Cubic.Out, true);
			        titleTween.onComplete.add(function(){
			             var subtitleTween = game.add.tween(subtitle);
			             subtitleTween.to({
			   			x: 390
			   		}, 2000, Phaser.Easing.Cubic.Out, true);
				 });
				 var sBar = game.add.sprite(game.world.centerX, game.world.centerY+350, 'start');
				 sBar.anchor.setTo(0.5, 0.5);
				 sBar.alpha = 0;
				 var tween = game.add.tween(sBar).to( { alpha: 1 }, 500, "Linear", true, 0, -1);
				 tween.yoyo(true, 500);
				 game.input.onDown.add(this.start);
		}
}
