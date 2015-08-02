requirejs.config({
  baseUrl: "src/",
  paths: {
    phaser: '../bower_components/phaser/dist/phaser-arcade-physics.min'
  },
  shim: {
    'phaser': {
      exports: 'Phaser'
    }
  }
});
