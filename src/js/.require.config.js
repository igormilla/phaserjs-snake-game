requirejs.config({
  baseUrl: "src/",
  paths: {
    phaser: '../bower_components/phaser/build/custom/phaser-arcade-physics.min'
  },
  shim: {
    'phaser': {
      exports: 'Phaser'
    }
  }
});
