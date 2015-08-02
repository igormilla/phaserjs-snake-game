define([
  'phaser'
], function(
  Phaser
) {
  'use strict';

  function PreloadState() {}

  PreloadState.prototype = {
    preload: function() {
      var game = this.game;

      window.WebFontConfig = {

        active: function() {
          game.time.events.add(Phaser.Timer.SECOND, function() {
            game.state.start('Boot');
          }, this);
        },

        google: {
          families: ['Bangers', 'Frijole']
        }
      };

      game.load.tilemap('map', 'assets/tilemap/tiles.json', null,
        Phaser.Tilemap
        .TILED_JSON);
      game.load.image('tiles', 'assets/tilemap/tiles.png');
      game.load.script('webfont',
        '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    },
    create: function() {

    }
  };

  return PreloadState;
});
