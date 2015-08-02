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

      var text = game.add.text(0, 0, "Snake", game.global.getStyle("90px Bangers"));
      text.x = game.global.centerTextH(text.width);
      text.y = Math.floor(game.stage.height / 2 - text.height * 0.75);

      var note = game.add.text(0, 0, "Press spacebar to continue", game.global.getStyle(
        "12px Courier New"));
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
