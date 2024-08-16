const hello = 'World';
console.log(hello);

import Typewriter from 'typewriter-effect/dist/core';

var app = document.getElementById('mainTitle');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Jessica Sea.')
  .pauseFor(5500)
  .start();