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
      text.x = 65;
      text.y = 70;

      var note = game.add.text(0, 0, "Press spacebar to continue", game.global.getStyle(
        "12px Courier New"));
      note.x = game.global.centerTextH(note.width)+30;
      note.y = Math.floor(game.stage.height - 20)+20;

      var startKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      startKey.onDown.add(function() {
        game.state.start('Game');
      });
    }
  };

  return BootState;
});
