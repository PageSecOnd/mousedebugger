const $logger = document.querySelector('.logger');
const $mouse = document.querySelector('.mouse');

const log = msg => {
  const shouldScroll = $logger.scrollHeight - $logger.scrollTop <= $logger.offsetHeight;
  $logger.innerHTML += `&gt; ${msg}<br />`;
  if (shouldScroll) {
    $logger.scrollTop = $logger.scrollHeight;
  }
};

const press = type => {
  log(`${type}`);
  $mouse.classList.add(type);
};

const release = type => {
  log(`${type}`);
  $mouse.classList.remove(type);
};

document.addEventListener('mousedown', event => {
  switch (event.button) {
    case 0:
      press('左键被按下');
      break;
    case 1:
      press('中键被按下');
      event.preventDefault();
      event.stopPropagation();
      return false;
      break;
    case 2:
      press('右键被按下');
      break;
    default:
      log('未知的鼠标按钮');}

});

document.addEventListener('mouseup', event => {
  switch (event.button) {
    case 0:
      release('左键松开');
      break;
    case 1:
      release('中键松开');
      break;
    case 2:
      release('右键松开');
      break;
    default:
      log('未知的鼠标按钮');}

});

document.addEventListener('wheel', event => {
  if (event.deltaY !== 0) {
    log(event.deltaY < 0 ? '滚轮向上' : '滚轮向下');
  } else if (event.deltaX !== 0) {
    log(event.deltaX < 0 ? '滚轮向左' : '滚轮向右');
  }
});

document.querySelector('.log button').addEventListener('click', function () {
  $logger.innerHTML = '';
});

document.addEventListener('contextmenu', e => {
  e.preventDefault();
  e.stopPropagation();
  return false;
});

log('正在初始化记录器....');