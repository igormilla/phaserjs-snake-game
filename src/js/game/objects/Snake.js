define([
  'phaser'
], function(
  Phaser
) {
  'use strict';

  function Snake(state) {
    this.state = state;
    this.game = state.game;

    this.parts = [{
      x: 4,
      y: 4
    }, {
      x: 5,
      y: 4
    }, {
      x: 6,
      y: 4
    }];
    this.direction = Phaser.Keyboard.LEFT;
    this.nextDirection = Phaser.Keyboard.LEFT;
    this.isAlive = true;
    this.isMoved = false;

    var left = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    var right = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    var up = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    var down = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

    var snake = this;
    left.onDown.add(function() {
      if (!snake.isMoved && snake.direction !== Phaser.Keyboard.RIGHT) {
        snake.nextDirection = Phaser.Keyboard.LEFT;
        snake.isMoved = true;
      }
    });

    right.onDown.add(function() {
      if (!snake.isMoved && snake.direction !== Phaser.Keyboard.LEFT) {
        snake.nextDirection = Phaser.Keyboard.RIGHT;
        snake.isMoved = true;
      }
    });

    up.onDown.add(function() {
      if (!snake.isMoved && snake.direction !== Phaser.Keyboard.DOWN) {
        snake.nextDirection = Phaser.Keyboard.UP;
        snake.isMoved = true;
      }
    });

    down.onDown.add(function() {
      if (!snake.isMoved && snake.direction !== Phaser.Keyboard.UP) {
        snake.nextDirection = Phaser.Keyboard.DOWN;
        snake.isMoved = true;
      }
    });



  }

  Snake.prototype = {
    move: function() {

      this.direction = this.nextDirection;

      if (!this.isAlive) {
        this.game.state.start('Score');
        return;
      }

      var snakeHead = this.parts[0];

      switch (this.direction) {
        case Phaser.Keyboard.LEFT:
          this.parts.unshift({
            x: snakeHead.x - 1,
            y: snakeHead.y
          });
          break;
        case Phaser.Keyboard.DOWN:
          this.parts.unshift({
            x: snakeHead.x,
            y: snakeHead.y + 1
          });
          break;
        case Phaser.Keyboard.UP:
          this.parts.unshift({
            x: snakeHead.x,
            y: snakeHead.y - 1
          });
          break;
        case Phaser.Keyboard.RIGHT:
          this.parts.unshift({
            x: snakeHead.x + 1,
            y: snakeHead.y
          });
          break;
      }

      snakeHead = this.parts[0];

      //implementing moving throught the screen ages
      if (snakeHead.x < 0) {
        snakeHead.x = this.game.global.mapSize;
      } else if (snakeHead.x >= this.game.global.mapSize) {
        snakeHead.x = 0;
      } else if (snakeHead.y < 0) {
        snakeHead.y = this.game.global.mapSize;
      } else if (snakeHead.y >= this.game.global.mapSize) {
        snakeHead.y = 0;
      }

      // check if snake bite itself
      if (this.parts.slice(1).containsObject(snakeHead)) {
        this.isAlive = false;
      }

      // if we had any apples on the screen and out head hit it,
      // than we remove an apple
      if (this.state.apples.length > 0 && this.parts.containsObject(this.state.apples[0].pos)) {
        this.state.apples.pop();
      } else {
        this.parts.pop();
      }
      this.game.global.score = (this.parts.length - 3) * 100;
      this.isMoved = false;
    }
  };

  return Snake;
});
