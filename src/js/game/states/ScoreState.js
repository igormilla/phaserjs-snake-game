define([
  'phaser'
], function(
  Phaser
) {
  'use strict';

  function BootState() {}

  BootState.prototype = {
    create: function() {
      var game = this.game;

      var text = game.add.text(0, 0, "Game Over", game.global.getStyle("60px Frijole"));
      text.x = game.global.centerTextH(text.width, 5);
      text.y = Math.floor(game.stage.height / 2 - text.height / 2 - 30);

      var score = game.add.text(0, 0, "Final score: " + game.global.score, game.global.getStyle(
        "14px Courier New"));
      score.x = game.global.centerTextH(score.width);
      score.y = Math.floor(game.stage.height / 2 + 55);

      var note = game.add.text(0, 0, "Press spacebar to continue", game.global.getStyle(
        "10px Courier New"));
      note.x = game.global.centerTextH(note.width);
      note.y = Math.floor(game.stage.height - 20);

      var startKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      startKey.onDown.add(function() {
        game.state.start('Game');
      });
    }
  };

  return BootState;
});
