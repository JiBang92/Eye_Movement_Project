const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
/******************************************************************
 * ? event.clientX => get the horizontal coordinate of the mouse
 * ? event.clientY => get the vertical coordinate of the mouse
 * ? window.innerWidth => get the browser width
 * ? window.innerHeight => get the browser height
******************************************************************/
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  
  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};