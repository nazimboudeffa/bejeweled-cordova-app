boot = {
     init: function() {
          game.log();
     },
     preload: function() {
      game.load.image("loading", "assets/sprites/loading.png");
		  game.load.image("logo", "assets/sprites/logo.png");
     },
     create: function() {
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  		game.scale.pageAlignHorizontally = true;
  		game.scale.pageAlignVertically = true;
  		//game.scale.setScreenSize(true);
  		game.physics.startSystem(Phaser.Physics.ARCADE);
  		game.state.start("Loading");
     }
};
