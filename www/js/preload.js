loading = {
     init: function() {
          game.log();
     },
	preload: function(){
          var loadingBar = game.add.sprite(game.world.centerX, game.world.centerY + 80, "loading");
          loadingBar.anchor.setTo(0.5);
          game.load.setPreloadSprite(loadingBar);
          var logo = game.add.sprite(game.world.centerX, game.world.centerY, "logo").anchor.setTo(0.5);
          game.load.image("background","assets/sprites/background.png");
          game.load.image("snow_mask","assets/sprites/snow_mask.png");
          game.load.image("gametitle","assets/sprites/gametitle.png");
          game.load.image("gamesubtitle","assets/sprites/gamesubtitle.png");
          game.load.image("start","assets/sprites/click.png");
          game.load.image("blackfade","assets/sprites/blackfade.png");
          game.load.spritesheet("snowflakes", "assets/sprites/snowflakes.png", 17, 17);
          game.load.spritesheet("snowflakes_large", "assets/sprites/snowflakes_large.png", 64, 64);
          game.load.audio("music","assets/sounds/music.mp3");
          game.load.spritesheet("orbs", "assets/sprites/orbs.png", 100, 100);
	},
  	create: function(){
		game.state.start("GameTitle");
	}
}
