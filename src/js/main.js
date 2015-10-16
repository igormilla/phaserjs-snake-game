(function() {
  'use strict';

  requirejs.config({
    baseUrl: ".",
    paths: {
      phaser: 'phaser/build/custom/phaser-arcade-physics.min'
    },
    shim: {
      'phaser': {
        exports: 'Phaser'
      }
    }
  });

  require([
      'phaser',
      'js/game/Game'
    ],
    function(
      Phaser,
      Game
    ) {

      Array.prototype.containsObject = function(obj) {
        var i;
        for (i = 0; i < this.length; i++) {
          if (this[i].x === obj.x && this[i].y === obj.y) {
            return true;
          }
        }
        return false;
      };

      var game = new Game();
      game.start();
    });
}());
