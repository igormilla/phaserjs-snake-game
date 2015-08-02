define([
  'phaser',
  'js/game/objects/Snake',
  'js/game/objects/Apple'
], function(
  Phaser,
  Snake,
  Apple
) {
  'use strict';

  function GameState() {}

  GameState.prototype = {
    preload: function() {

    },
    create: function() {

      var game = this.game;
      game.global.score = 0;

      this.snake = new Snake(this);
      this.apples = [];

      game.physics.startSystem(Phaser.Physics.ARCADE);

      this.map = game.add.tilemap('map');
      this.map.addTilesetImage('tiles');

      this.backgroundlayer = this.map.createLayer('backgroundLayer');
      this.backgroundlayer.resizeWorld();

      var startKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
      startKey.onDown.add(function() {
        game.state.start('Boot');
      });
      this.score = this.game.add.text(0, 0, "", this.game.global
        .getStyle(
          "14px Courier New"));
      game.time.events.loop(Phaser.Timer.SECOND * 0.25, this.gameLoop, this);
    },
    gameLoop: function() {
      if (this.apples.length < 1) {
        this.apples.push(new Apple(this));
      }
      this.snake.move();
      this.drawAllTheThings(this.snake, this.apples);
    },
    drawAllTheThings: function(snake, apples) {
      //clean the map
      this.map.fill(this.game.global.tile.grass, 0, 0, this.game.stage.width, this.game
        .stage
        .height);

      //draw le snake
      for (var part in snake.parts) {
        this.drawTile(snake.isAlive === true ? this.game.global.tile.snake : this.game.global
          .tile
          .snakeDead,
          snake.parts[part].x, snake.parts[part].y);
      }
      //draw Apple
      for (var i = 0; i < apples.length; i++) {
        this.drawTile(this.game.global.tile.apple,
          apples[i].pos.x, apples[i].pos.y);
      }

      //draw the score
      this.score.text = "Score: " + this.game.global.score;
      this.score.x = Math.floor(this.game.stage.width - this.score.width - 2);
      this.score.y = Math.floor(5);

    },
    drawTile: function(tile, x, y) {
      this.map.putTileWorldXY(tile, x * this.game.global.tileSize, y * this.game.global
        .tileSize,
        this.game.global.tileSize,
        this.game.global.tileSize,
        this.backgroundlayer);
    }
  };

  return GameState;
});
