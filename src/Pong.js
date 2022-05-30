const $ = (s, o = document) => o.querySelector(s);
// const $$ = (s, o = document) => o.querySelectorAll(s);

var game = $('.game'),
    start_button = $('.start'),
    onescore = $('.onescore'),
    twoscore = $('.twoscore'),
    ball = {
      elem: $('.ball'),
      x: 0,
      y: 0,
      top: 0,
      left: 0
    },
    one = {
      elem: $('.paddle.one'),
      y: 0,
      top: 0,
      score: 0
    },
    two = {
      elem: $('.paddle.two'),
      y: 0,
      score: 0
    },
    interval;

function init() {
  if (game.classList.contains('idle')) {
    one.y = game.offsetHeight / 2 - one.elem.offsetHeight / 2;
    two.y = game.offsetHeight / 2 - two.elem.offsetHeight / 2;

    start();

    game.classList.remove('idle');
    game.classList.add('init');
  }
}

function start() {
  ball.x = game.offsetWidth / 2 - ball.elem.offsetWidth / 2;
  ball.y = game.offsetHeight / 2 - ball.elem.offsetHeight / 2;
  ball.top = Math.random() * 2 + 2;
  ball.left = (1 * Math.random() * 2 + 2);
  interval = window.setInterval(render, 1000 / 60);
}

function render() {
  one.y += one.top;
  two.y = ball.y - two.elem.offsetHeight / 2;

  ball.x += ball.left;
  ball.y += ball.top;

  if(one.y <= 0) {
      one.y = 0;
  }

  if(two.y <= 0) {
      two.y = 0;
  }

  if(one.y >= game.offsetHeight - one.elem.offsetHeight) {
      one.y = game.offsetHeight - one.elem.offsetHeight;
  }

  if(two.y > game.offsetHeight - two.elem.offsetHeight) {
      two.y = game.offsetHeight - two.elem.offsetHeight;
  }

  if(ball.y <= 0 || ball.y >= game.offsetHeight - ball.elem.offsetHeight) {
      ball.top = -ball.top;
  }

  if(ball.x <= (one.elem.offsetWidth - 2)) {
      if((ball.y + ball.elem.offsetHeight / 2 ) > one.y && (ball.y + ball.elem.offsetHeight / 2 ) < one.y + one.elem.offsetHeight) {
          ball.left = -ball.left;
      } else {
          two.score++;
          twoscore.textContent = two.score.toString();
          setTimeout(() => game.classList.add('idle'), 500);
          game.classList.remove('init');
          clearInterval(interval);
          // start();
      }
  }

  if(ball.x >= game.offsetWidth - ball.elem.offsetWidth - (two.elem.offsetWidth - 2)) {
      if((ball.y + ball.elem.offsetHeight / 2 ) > two.y && (ball.y + ball.elem.offsetHeight / 2 ) < two.y + two.elem.offsetHeight) {
          ball.left = -ball.left;
      } else {
          one.score++;
          onescore.textContent = one.score.toString();
          setTimeout(() => game.classList.add('idle'), 500);
          game.classList.remove('init');
          clearInterval(interval);
          //start();
      }
  }

  one.elem.style.setProperty('--y', one.y + 'px');
  two.elem.style.setProperty('--y', two.y + 'px');
  ball.elem.style.setProperty('--x', ball.x + 'px');
  ball.elem.style.setProperty('--y', ball.y + 'px');
}

document.addEventListener('keydown', e => {
  if(e.code === 'Enter') {
    init();
  }
  if(e.code === 'ArrowUp') {
      one.top = -8;
  }
  if(e.code === 'ArrowDown') {
      one.top = 8;
  }
}, false);

document.addEventListener('keyup', e => {
  if(e.code === 'ArrowUp') {
      one.top = 0;
  }
  if(e.code === 'ArrowDown') {
      one.top = 0;
  }
}, false);

window.onload = (e) => {
  onLoad();
}

export default function onLoad() {
  game = $('.game');
  start_button = $('.start');
  onescore = $('.onescore');
  twoscore = $('.twoscore');
  ball.elem = $('.ball');
  one.elem = $('.paddle.one');
  two.elem = $('.paddle.two');

  start_button.addEventListener('click', init);
}