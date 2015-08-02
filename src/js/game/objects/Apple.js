define(function() {
  'use strict';

  function Apple(state) {
    this.pos = {};
    do {
      this.pos.x = state.game.rnd.integerInRange(0, state.game.global.mapSize - 1);
      this.pos.y = state.game.rnd.integerInRange(0, state.game.global.mapSize - 1);
    } while (state.snake.parts.containsObject(this.pos));
  }

  return Apple;
});
