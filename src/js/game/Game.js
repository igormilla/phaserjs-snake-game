define([
  'phaser',
  'js/game/states/BootState',
  'js/game/states/PreloadState',
  'js/game/states/GameState',
  'js/game/states/ScoreState'
], function(
  Phaser,
  BootState,
  PreloadState,
  GameState,
  ScoreState
) {
  'use strict';



  function Game() {}

  Game.prototype = {
    start: function() {

      var tileSize = 32;
      var mapSize = 10;

      var game = new Phaser.Game(tileSize * mapSize, tileSize * mapSize, Phaser.AUTO, '');
      game.state.add('Preload', PreloadState);
      game.state.add('Boot', BootState);
      game.state.add('Game', GameState);
      game.state.add('Score', ScoreState);

      game.global = {};
      game.global.tileSize = tileSize;
      game.global.mapSize = mapSize;

      game.global.tile = {};
      game.global.tile.grass = 1;
      game.global.tile.snake = 2;
      game.global.tile.snakeDead = 3;
      game.global.tile.apple = 4;

      game.global.getStyle = function(font) {
        return {
          font: font,
          fill: "#fff",
          wordWrap: true,
          wordWrapWidth: game.stage.width,
          align: "center"
        };
      };

      game.global.centerTextH = function(textWidth, padding) {
        padding = padding || 0;
        return Math.floor(game.stage.width / 2 - textWidth / 2 + padding);
      };

      game.state.start('Preload');
    }
  };

  return Game;
});
